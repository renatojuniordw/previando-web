const BASE_URL = 'https://previando.com.br'

export const routes = {
  '/': {
    title: 'Previando — Inteligência Previdenciária com IA para Advogados',
    description:
      'Calculadora previdenciária com IA para advogados. Upload do CNIS, 14 modalidades de cálculo, comparativo automático de 22 cenários, parecer jurídico e petição inicial. RMI, RMA e retroativos em minutos.',
  },
  '/termos': {
    title: 'Termos de Uso — Previando',
    description: 'Termos de uso da plataforma Previando — inteligência previdenciária para advogados.',
  },
  '/privacidade': {
    title: 'Política de Privacidade — Previando',
    description: 'Política de privacidade da plataforma Previando. Como coletamos, usamos e protegemos seus dados.',
  },
  '/lgpd': {
    title: 'LGPD — Previando',
    description: 'Compromisso do Previando com a Lei Geral de Proteção de Dados (Lei 13.709/2018).',
  },
}

export function canonicalUrl(route) {
  return route === '/' ? BASE_URL : `${BASE_URL}${route}`
}
