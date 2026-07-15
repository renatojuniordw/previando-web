// GA4 via gtag, carregado dinamicamente (sem script inline — CSP simples).
// Sem VITE_GA_ID definido, todas as funções viram no-op (dev/preview).
const GA_ID = import.meta.env.VITE_GA_ID

export function initAnalytics() {
  if (!GA_ID || typeof window === 'undefined' || window.gtag) return

  window.dataLayer = window.dataLayer || []
  function gtag() {
    window.dataLayer.push(arguments)
  }
  window.gtag = gtag

  gtag('consent', 'default', {
    ad_storage: 'denied',
    ad_user_data: 'denied',
    ad_personalization: 'denied',
    analytics_storage: 'granted',
  })
  gtag('js', new Date())
  gtag('config', GA_ID, { transport_type: 'beacon' })

  const script = document.createElement('script')
  script.async = true
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`
  document.head.appendChild(script)
}

export function trackEvent(name, params = {}) {
  if (typeof window === 'undefined' || typeof window.gtag !== 'function') return
  window.gtag('event', name, params)
}

export function trackCtaClick(section, destination) {
  trackEvent('cta_click', { section, destination })
}
