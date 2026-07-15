const APP_URL = 'https://app.previando.com.br'

const UTM_BASE = 'utm_source=previando-lp&utm_medium=website&utm_campaign=lp2026'

export function appLink(path, section) {
  return `${APP_URL}${path}?${UTM_BASE}&utm_content=${encodeURIComponent(section)}`
}

export function registerLink(section) {
  return appLink('/register', section)
}

export function loginLink(section) {
  return appLink('/login', section)
}
