import React from "react";
import styled from "styled-components";

const FooterContainer = styled.footer`
  width: 100%;
  background-color: #034c5c;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  padding: 2vw 0 0 0;
  height: 100%;
`;

const FooterColunas = styled.footer`
  width: 100%;
  background-color: #034c5c;
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 2vw 2vw;
  height: 100%;
`;

const FooterTitulo = styled.footer`
  width: 100%;
  padding: 2vw 2vw;
`;

function Footer() {
  return (
    <FooterContainer>
      <div>
        <FooterTitulo>Hapvida</FooterTitulo>
        <FooterColunas style={{ display: "flex", flexDirection: "column" }}>
          <div>
            <ul>
              <h4>Institucional</h4>
              <li>
                <a href="/site/qualitotal">Programa Qualitotal</a>
              </li>
              <li>
                <a href="/site/institucional">Hapvida</a>
              </li>
              <li>
                <a href="/site/rede-exclusiva">Rede Exclusiva</a>
              </li>
              <li>
                <a href="/site/atendimento-ao-cliente">
                  Centrais de Atendimento Presencial
                </a>
              </li>
              <li>
                <a href="/site/assessoria-de-imprensa">
                  Assessoria de Imprensa
                </a>
              </li>
              <li>
                <a href="https://sistemahapvida.gupy.io">Trabalhe Conosco</a>
              </li>
              <li>
                <a
                  href="https://www.hapvida.com.br/site/integridade-e-compliance"
                  target="_blank"
                >
                  Integridade e Compliance
                </a>
              </li>
              <li>
                <a href="http://ri.hapvida.com.br" target="_blank">
                  Investidores
                </a>
              </li>
              <li>
                <a href="/site/demonstracoes-financeiras">
                  Demonstrações Financeiras
                </a>
              </li>
              <li>
                <a href="http://www.hapvida.com.br/site/lgpd">
                  Portal de Privacidade
                </a>
              </li>
            </ul>
          </div>
        </FooterColunas>
      </div>
      <div>
        <FooterTitulo>ATENDIMENTO</FooterTitulo>
        <FooterColunas>
          <div>
            <ul>
              <h4>Atendimento On-line</h4>
              <li>
                <a
                  href="javascript:void(0)"
                  className="chat-online"
                  onclick="openChat('https://live.sapios.com.br/webchat/?t=bd19f6d7-29c2-4b51-aace-5206a4591e2a&amp;chatbubble=false');jQuery('#sapioschat-container').show();jQuery('#pop-up_new').hide();
                jQuery('#block-avanz-teleconsultas-teleconsultas-botao').addclassName('chat-on');"
                >
                  <i className="icon-bubbles"></i>&nbsp;&nbsp;Chat On-line
                </a>
              </li>
              <li>
                <a
                  data-width="600"
                  data-height="640"
                  href="https://apa5.xgen.com.br/hapvida/form_chat_savi.html"
                >
                  <i className="icon-bubble"></i>
                  &nbsp;&nbsp;Deficientes Auditivos
                </a>
              </li>
              <li>
                <a href="/site/central_de_ajuda">
                  <i className="icon-support"></i>&nbsp;Ajuda
                </a>
              </li>
              <li>
                <a
                  data-width="600"
                  data-height="640"
                  className="portabilidade popup"
                  href="https://cafex.hapvida.com.br/sigo/portabilidade/#/home/1"
                >
                  <i className="icon-refresh"></i>&nbsp;&nbsp;Portabilidade
                </a>
              </li>
              <li>
                <a href="https://www.hapvida.com.br/site/ouvidoria">
                  <i className="icon-bubble"></i>&nbsp;&nbsp;Formulário Online
                  Ouvidoria
                </a>
              </li>
            </ul>
          </div>
          <div>
            <ul>
              <h4>Atendimento Telefônico</h4>
              <li>
                Call Center 24h 4002.3633, 4020.3633 ou 0300 313 3633 (Norte e
                Nordeste).
              </li>
              <li>
                Marcações de consultas e exames: 6h às 22h (Sul, Sudeste e
                Centro-Oeste) 4020-1899 ou 0300 789 3650
              </li>
              <li>
                SAC 24h 7 dias por semana de domingo a domingo (Sul, Sudeste e
                Centro-Oeste): 0800.018.3456
              </li>
              <li>
                SAC 24h 7 dias por semana de domingo a domingo (exclusivo para
                telefones fixos): 0800 280 9130 (Norte e Nordeste)
              </li>
              <li>
                <a href="/site/ouvidoria" target="_blank">
                  Ouvidoria
                </a>{" "}
                (Atendimento de segunda a sexta-feira, exceto feriados, das 7h
                às 19h): 4020.9091
              </li>
              <li>Central de cancelamento: 4020.1885</li>
              <li>Central de vendas saúde: 0800 777 9070</li>
              <li>
                <a
                  target="_blank"
                  href="https://www.canaldedenuncias.com.br/hapvidandi"
                >
                  Canal de Denúncias<span>*</span>
                </a>
              </li>
              <li>
                <span>*</span>Por meio deste canal são recebidas de forma segura
                e confidencial, denúncias de suspeitas de fraude e demais
                violações dos princípios éticos estabelecidos no
                <strong>
                  <a
                    target="_blanck"
                    href="/site/sites/all/themes/bootstrap_avanz/files/Codigo_de_Etica-Hapvida.pdf"
                  >
                    Código de Ética do Grupo Hapvida
                  </a>
                </strong>
                .
              </li>
            </ul>
          </div>
        </FooterColunas>
      </div>
      <div>
        <FooterTitulo>ONDE ENCONTRAR</FooterTitulo>
        <FooterColunas>
          <div>
            <ul>
              <h4>Endereço</h4>
              <li>
                <i className="icon-location-pin"></i>&nbsp;&nbsp;Av. Heráclito
                Graça, 406 Centro - CEP 60140-061 Fortaleza-CE
              </li>
            </ul>
          </div>
          <div>
            <ul>
              <h4>Continue Conectado</h4>
              <li>
                <a
                  target="_blank"
                  href="https://www.facebook.com/hapvida.saude"
                >
                  <i className="icon-social-facebook"></i>&nbsp;&nbsp;Facebook
                </a>
              </li>
              <li>
                <a target="_blank" href="https://www.twitter.com/hapvidasaude">
                  <i className="icon-social-twitter"></i>&nbsp;&nbsp;Twitter
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  href="https://www.youtube.com/user/hapvidasaude"
                >
                  <i className="icon-social-youtube"></i>&nbsp;&nbsp;Youtube
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  href="https://www.instagram.com/hapvidasaude/"
                >
                  <i className="icon-social-instagram"></i>&nbsp;&nbsp;Instagram
                </a>
              </li>
            </ul>
          </div>
        </FooterColunas>
      </div>
    </FooterContainer>
  );
}

export default Footer;
