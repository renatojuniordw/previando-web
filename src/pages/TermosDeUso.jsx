export default function TermosDeUso() {
  return (
    <div className="min-h-screen bg-dark-900">
      <div className="max-w-[760px] mx-auto px-[clamp(24px,5vw,80px)] py-20">
        <a href="/" className="text-amber-400 text-sm font-medium hover:underline mb-8 inline-block">
          ← Voltar para Previando
        </a>

        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mt-4">Termos de Uso</h1>
        <p className="text-gray-400 text-sm mt-2">Última atualização: 27 de junho de 2026</p>

        <div className="mt-10 space-y-8 text-gray-600 text-base leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">1. Aceitação dos Termos</h2>
            <p>
              Ao acessar ou utilizar a plataforma Previando (disponível em{' '}
              <a href="https://app.previando.com.br" className="text-amber-400 hover:underline">app.previando.com.br</a>)
              e o site institucional (<a href="https://previando.com.br" className="text-amber-400 hover:underline">previando.com.br</a>),
              você declara estar de acordo com estes Termos de Uso. Caso não concorde com qualquer condição, não utilize a plataforma.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">2. Definições</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Plataforma:</strong> sistema Previando, acessível via web, destinado a advogados previdenciários.</li>
              <li><strong>Usuário:</strong> advogado regularmente inscrito na OAB que se cadastra e utiliza a plataforma.</li>
              <li><strong>Segurado:</strong> cliente do advogado, titular dos dados previdenciários.</li>
              <li><strong>Plano:</strong> modalidade de assinatura (FREE, SOLO ou PRO) com limites e funcionalidades específicas.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">3. Cadastro e Conta</h2>
            <p>
              O cadastro é pessoal e intransferível. O usuário é responsável pela confidencialidade de sua senha e por toda atividade
              realizada em sua conta. É obrigatório fornecer dados cadastrais verdadeiros, incluindo nome completo e número da OAB.
            </p>
            <p className="mt-3">
              A Previando reserva-se o direito de suspender ou cancelar contas que violem estes Termos ou que apresentem indícios de
              uso indevido.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">4. Planos e Assinatura</h2>
            <p>
              O Plano FREE é gratuito por tempo indeterminado, com funcionalidades e limites descritos na página de planos.
              Os Planos SOLO e PRO são assinaturas mensais recorrentes.
            </p>
            <ul className="list-disc pl-6 mt-3 space-y-2">
              <li>A cobrança ocorre no início de cada ciclo mensal.</li>
              <li>O cancelamento pode ser feito a qualquer momento pelo painel de configurações.</li>
              <li>O cancelamento não gera reembolso do período já faturado.</li>
              <li>Após o cancelamento, o acesso permanece ativo até o fim do período pago.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">5. Uso da Plataforma</h2>
            <p>
              O Previando é uma ferramenta de apoio ao advogado previdenciário. Os cálculos, pareceres e petições gerados pelo sistema
              são <strong>rascunhos</strong> que devem ser revisados e validados pelo advogado antes de sua utilização profissional.
              A plataforma não substitui a análise técnica do profissional.
            </p>
            <p className="mt-3">
              É vedado o uso da plataforma para:
            </p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Armazenar dados de segurados sem autorização;</li>
              <li>Utilizar a plataforma para fins ilícitos ou fraudulentos;</li>
              <li>Compartilhar credenciais de acesso com terceiros não autorizados;</li>
              <li>Tentar burlar limites de plano ou funcionalidades bloqueadas.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">6. Limitação de Responsabilidade</h2>
            <p>
              A Previando não se responsabiliza por decisões profissionais tomadas com base nos cálculos, pareceres ou petições
              gerados pela plataforma. O advogado é o único responsável pela verificação da adequação técnica e jurídica de cada
              documento ou cálculo utilizado em sua atividade profissional.
            </p>
            <p className="mt-3">
              A plataforma utiliza inteligência artificial para produção de textos. A Previando não garante a precisão absoluta
              dos conteúdos gerados, sendo obrigatória a revisão pelo profissional.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">7. Disponibilidade</h2>
            <p>
              A Previando emprega esforços comercialmente razoáveis para manter a plataforma disponível, mas não garante
              disponibilidade ininterrupta. Podem ocorrer paradas programadas para manutenção ou indisponibilidades por
              fatores alheios ao nosso controle.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">8. Propriedade Intelectual</h2>
            <p>
              O nome, logotipo, identidade visual e código da plataforma são de propriedade da Unificando. O conteúdo gerado
              pelo usuário (dados de casos, cálculos, pareceres) pertence ao usuário, que concede à Previando licença para
              armazenamento e processamento necessários à operação do serviço.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">9. Disposições Gerais</h2>
            <p>
              Estes Termos são regidos pela legislação brasileira. Fica eleito o foro da comarca de São Paulo/SP para solução
              de controvérsias. A Previando poderá alterar estes Termos a qualquer momento, comunicando os usuários com
              antecedência mínima de 30 dias por meio da plataforma ou e-mail cadastrado.
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
