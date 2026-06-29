export default function Lgpd() {
  return (
    <div className="min-h-screen bg-dark-900">
      <div className="max-w-[760px] mx-auto px-[clamp(24px,5vw,80px)] py-20">
        <a href="/" className="text-amber-400 text-sm font-medium hover:underline mb-8 inline-block">
          ← Voltar para Previando
        </a>

        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mt-4">Política de Privacidade — LGPD</h1>
        <p className="text-gray-400 text-sm mt-2">Conformidade com a Lei Geral de Proteção de Dados (Lei 13.709/2018)</p>
        <p className="text-gray-400 text-sm">Última atualização: 27 de junho de 2026</p>

        <div className="mt-10 space-y-8 text-gray-600 text-base leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">1. Controlador</h2>
            <p>
              O controlador dos dados pessoais tratados no âmbito da plataforma Previando é a <strong>Unificando</strong>,
              responsável pelas decisões referentes ao tratamento de dados.
            </p>
            <p className="mt-2">
              <strong>E-mail para contato:</strong>{' '}
              <a href="mailto:contato@previando.com.br" className="text-amber-400 hover:underline">contato@previando.com.br</a>
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">2. Base Legal para Tratamento</h2>
            <p>O tratamento de dados pessoais no Previando fundamenta-se nas seguintes bases legais da LGPD:</p>
            <ul className="list-disc pl-6 mt-3 space-y-2">
              <li>
                <strong>Execução de contrato (Art. 7º, V):</strong> dados do advogado são tratados para viabilizar a prestação
                do serviço contratado conforme os Termos de Uso.
              </li>
              <li>
                <strong>Exercício regular de direitos (Art. 7º, VI):</strong> dados dos segurados são tratados para viabilizar
                o exercício de direitos previdenciários.
              </li>
              <li>
                <strong>Legítimo interesse (Art. 7º, IX):</strong> registros de auditoria e métricas operacionais para segurança
                e melhoria do serviço.
              </li>
              <li>
                <strong>Consentimento (Art. 7º, I):</strong> quando aplicável, para comunicações e funcionalidades específicas.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">3. Mapeamento de Tratamento de Dados</h2>

            <div className="overflow-x-auto mt-4">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-dark-700 border-b border-dark-600">
                    <th className="text-left py-3 px-4 font-semibold text-gray-900">Operação</th>
                    <th className="text-left py-3 px-4 font-semibold text-gray-900">Dados</th>
                    <th className="text-left py-3 px-4 font-semibold text-gray-900">Finalidade</th>
                    <th className="text-left py-3 px-4 font-semibold text-gray-900">Período de Guarda</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-dark-600">
                  <tr>
                    <td className="py-3 px-4">Cadastro</td>
                    <td className="py-3 px-4">Nome, e-mail, OAB</td>
                    <td className="py-3 px-4">Identificação do usuário</td>
                    <td className="py-3 px-4">Vigência da conta + 90 dias</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4">CNIS</td>
                    <td className="py-3 px-4">PDF, contribuições</td>
                    <td className="py-3 px-4">Cálculo previdenciário</td>
                    <td className="py-3 px-4">Vigência da conta + 90 dias</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4">Auditoria</td>
                    <td className="py-3 px-4">Ações realizadas</td>
                    <td className="py-3 px-4">Segurança e conformidade</td>
                    <td className="py-3 px-4">5 anos (prazo legal)</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4">Pagamento</td>
                    <td className="py-3 px-4">Dados financeiros</td>
                    <td className="py-3 px-4">Cobrança</td>
                    <td className="py-3 px-4">Processado por terceiros</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4">Inteligência Artificial</td>
                    <td className="py-3 px-4">Dados do caso</td>
                    <td className="py-3 px-4">Geração de documentos</td>
                    <td className="py-3 px-4">Sem retenção pelo fornecedor</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">4. Direitos do Titular</h2>
            <p>
              Em conformidade com a LGPD, o titular dos dados pessoais (advogado ou segurado) pode exercer os seguintes
              direitos mediante solicitação:
            </p>
            <ol className="list-decimal pl-6 mt-3 space-y-2">
              <li><strong>Confirmação e acesso:</strong> saber se tratamos seus dados e acessá-los.</li>
              <li><strong>Correção:</strong> retificar dados incompletos, inexatos ou desatualizados.</li>
              <li><strong>Anonimização, bloqueio ou eliminação:</strong> solicitar a anonimização de dados desnecessários.</li>
              <li><strong>Portabilidade:</strong> solicitar a transferência a outro fornecedor.</li>
              <li><strong>Eliminação:</strong> excluir dados tratados com consentimento.</li>
              <li><strong>Informação sobre compartilhamento:</strong> saber com quem compartilhamos seus dados.</li>
              <li><strong>Revogação de consentimento:</strong> retirar o consentimento a qualquer momento.</li>
              <li><strong>Oposição:</strong> opor-se a tratamento realizado com base no legítimo interesse.</li>
            </ol>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">5. Procedimento para Exercício de Direitos</h2>
            <p>
              Para exercer seus direitos, envie um e-mail para{' '}
              <a href="mailto:contato@previando.com.br" className="text-amber-400 hover:underline">contato@previando.com.br</a>
              com o assunto <strong>"LGPD — Direitos do Titular"</strong> e as seguintes informações:
            </p>
            <ul className="list-disc pl-6 mt-3 space-y-1">
              <li>Nome completo</li>
              <li>E-mail cadastrado na plataforma</li>
              <li>Direito que deseja exercer</li>
              <li>CPF (para localização de dados, opcional)</li>
            </ul>
            <p className="mt-3">
              Responderemos em até <strong>15 dias úteis</strong>, conforme Art. 19 da LGPD.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">6. Segurança e Boas Práticas</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>A plataforma foi desenvolvida com proteção de dados desde sua concepção.</li>
              <li>Coletamos apenas os dados estritamente necessários para cada finalidade.</li>
              <li>O CPF do segurado é armazenado de forma criptografada, nunca em texto puro.</li>
              <li>O acesso aos dados é restrito a administradores autorizados.</li>
              <li>Todos os dados são armazenados em servidores no Brasil.</li>
              <li>Toda comunicação com a plataforma é criptografada.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">7. Incidentes de Segurança</h2>
            <p>
              Em caso de incidente de segurança que possa acarretar risco ou dano aos titulares, a Previando comunicará
              a Autoridade Nacional de Proteção de Dados (ANPD) e os titulares afetados em prazo razoável, conforme
              Art. 48 da LGPD, descrevendo a natureza do incidente, os dados envolvidos e as medidas de mitigação adotadas.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">8. Atualizações</h2>
            <p>
              Esta Política pode ser atualizada periodicamente. Notificaremos os usuários sobre alterações relevantes
              por e-mail ou por aviso na plataforma com antecedência mínima de 30 dias.
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
