export default function Privacidade() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-[760px] mx-auto px-[clamp(24px,5vw,80px)] py-20">
        <a href="/" className="text-blue-primary text-sm font-medium hover:underline mb-8 inline-block">
          ← Voltar para Previando
        </a>

        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mt-4">Política de Privacidade</h1>
        <p className="text-gray-400 text-sm mt-2">Última atualização: 27 de junho de 2026</p>

        <div className="mt-10 space-y-8 text-gray-600 text-base leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">1. Quem somos</h2>
            <p>
              O Previando é uma plataforma de cálculos previdenciários operada pela <strong>Unificando</strong>.
              Esta Política de Privacidade descreve como coletamos, usamos, armazenamos e protegemos os dados pessoais
              dos usuários da plataforma e de seus clientes.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">2. Dados Coletados</h2>

            <h3 className="text-gray-900 font-semibold mt-4 mb-2">2.1. Dados do Advogado</h3>
            <ul className="list-disc pl-6 space-y-1">
              <li>Nome completo, e-mail e telefone</li>
              <li>Número da OAB</li>
              <li>Senha de acesso (armazenada de forma protegida)</li>
              <li>Dados de pagamento (processados de forma segura por terceiros)</li>
              <li>Registros de uso da plataforma</li>
            </ul>

            <h3 className="text-gray-900 font-semibold mt-4 mb-2">2.2. Dados do Cliente (Segurado)</h3>
            <ul className="list-disc pl-6 space-y-1">
              <li>Nome completo</li>
              <li>CPF (armazenado de forma criptografada, nunca em texto puro)</li>
              <li>Data de nascimento</li>
              <li>Telefone e e-mail (quando fornecidos)</li>
              <li>Dados previdenciários extraídos do CNIS</li>
              <li>Dados de saúde para análises BPC/LOAS</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">3. Como usamos os dados</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Operação do serviço:</strong> realizar cálculos previdenciários e gerar documentos.</li>
              <li><strong>Inteligência artificial:</strong> enviar dados do caso para geração de textos e análises. Nossos fornecedores de IA não utilizam os dados para treinamento de modelos.</li>
              <li><strong>Comunicação:</strong> enviar notificações sobre prazos, processamento de documentos e atualizações da plataforma.</li>
              <li><strong>Segurança:</strong> manter registro de atividades para conformidade e proteção dos dados.</li>
              <li><strong>Portal do Cliente:</strong> disponibilizar acesso controlado ao segurado.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">4. Compartilhamento com terceiros</h2>
            <p>
              A Previando não vende dados pessoais. Compartilhamos dados apenas quando necessário para a operação do serviço:
            </p>
            <ul className="list-disc pl-6 mt-3 space-y-2">
              <li><strong>Fornecedor de IA:</strong> dados de casos para geração de documentos e análises.</li>
              <li><strong>Armazenamento em nuvem:</strong> documentos e arquivos armazenados de forma segura em servidores no Brasil.</li>
              <li><strong>Processamento de pagamentos:</strong> as transações financeiras são processadas por plataforma especializada. A Previando não armazena dados de cartão de crédito.</li>
              <li><strong>Consulta processual:</strong> consulta pública de andamentos de processos judiciais.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">5. Segurança dos Dados</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>CPFs e senhas são armazenados de forma criptografada.</li>
              <li>Toda comunicação com a plataforma é feita de forma segura.</li>
              <li>Servidores localizados no Brasil.</li>
              <li>Backup diário automatizado dos dados.</li>
              <li>Acesso restrito a administradores autorizados.</li>
              <li>Todas as atividades importantes são registradas para auditoria.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">6. Retenção e Exclusão</h2>
            <p>
              Os dados são mantidos enquanto a conta do usuário estiver ativa. Ao cancelar a assinatura, os dados permanecem
              por 90 dias para possível reativação. Após esse período, os dados são anonimizados ou excluídos.
            </p>
            <p className="mt-3">
              O usuário pode solicitar a exclusão antecipada de seus dados entrando em contato pelo e-mail{' '}
              <a href="mailto:contato@previando.com.br" className="text-blue-primary hover:underline">contato@previando.com.br</a>.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">7. Direitos do Titular (LGPD)</h2>
            <p>Nos termos da Lei Geral de Proteção de Dados (Lei 13.709/2018), você tem direito a:</p>
            <ul className="list-disc pl-6 mt-3 space-y-2">
              <li>Confirmar a existência de tratamento de dados;</li>
              <li>Acessar seus dados pessoais;</li>
              <li>Corrigir dados incompletos, inexatos ou desatualizados;</li>
              <li>Anonimizar, bloquear ou eliminar dados desnecessários;</li>
              <li>Portar dados a outro fornecedor de serviço;</li>
              <li>Eliminar dados tratados com consentimento;</li>
              <li>Revogar o consentimento a qualquer momento.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">8. Cookies</h2>
            <p>
              A plataforma utiliza cookies essenciais para funcionamento da autenticação.
              Não utilizamos cookies de rastreamento ou publicidade. O site institucional (previando.com.br) não utiliza
              cookies de terceiros.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">9. Contato</h2>
            <p>
              Para exercer seus direitos ou esclarecer dúvidas sobre esta Política, entre em contato:
            </p>
            <p className="mt-2">
              <strong>E-mail:</strong>{' '}
              <a href="mailto:contato@previando.com.br" className="text-blue-primary hover:underline">contato@previando.com.br</a>
              <br />
              <strong>Responsável:</strong> Unificando
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
