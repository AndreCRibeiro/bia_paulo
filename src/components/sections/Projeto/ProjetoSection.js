import React from "react";
import "./styles.css";
import Image from "../../elements/Image";

const Projeto = ({ className }) => {
    return (
        <section className="box">
            <div>
                <h3
                    className="mt-0 mb-16 reveal-from-bottom title"
                    data-reveal-delay="200"
                >
                    <p className="text-color-primary">Projeto SOS-UnB </p>
                </h3>
            </div>
                <p class="text-info recuo">  
                    O projeto SOS-UnB é uma iniciativa do Laboratório UIoT - Universal Internet of Things (ENE/FT/UnB), coordenado pelo professor Rafael Timóteo. A aplicação dispõe de funcionalidades para auxiliar a comunidade acadêmica no período de isolamento social com serviços como acesso direto a canais com informações confiáveis a respeito do desenvolvimento do Covid-19, a obteção de diversos tipos de ajuda voluntária, além das funcionalidades de pedido de socorro em caso de emergência que podem ser direcionadas às autoridades de saúde e segurança pública do DF ou à segurança da universidade em casos de situação de risco nas dependências do campus.
                
                </p>
                 
                <p class="text-info recuo"> 
                    A ideia central do SOS-UnB é ajudar a comunidade acadêmica nesse período de isolamento, conectando pessoas que precisam de ajuda com quem está disposto a ofereceralgum tipo de serviço voluntário. O projeto também possui mecanismos de segurança e socorro a seus usuários através de centrais de comando e controle que funcionam como painéis para receber os dois tipos de pedido de socorro: os que chegam via botão de emergência solicitado dentro do campus da universidade e as solicitações de emergências de saúde.
                </p>
            <div class="profiles-container">

               
                <div class="text-image">   
                    <p class="text-info recuo-imagem"> 
                         O SOS-UnB inclui 4 funcionalidades principais as quais estão expostas no 
                         esquemático ao lado. Na opção “Voluntarie-se”, caso possua uma matrícula ativa na Universidade de Brasília (UnB), o usuário já cadastrado no aplicativo pode oferecer serviços voluntários. Esses serviços podem ser desde idas ao mercado até uma orientação em uma área de conhecimento especifica.     
                    </p>
                    <div class="profile">
                    <Image
                        src={require("../../../assets/images/esquema1.png")}
                        alt="Hero"
                        width={800}
                        height={600}
                    />
                </div>                           
                </div>
            </div>
                <p class="text-info recuo"> 
                    Na opção “Ajuda Solidária” o usuário selecionará a região administrativa onde se encontra, após isso é mostrada uma lista de serviços e voluntários para aquele local, basta escolher a atividade na qual necessita de auxilio e entrar em  com o ofertante através do chat no próprio app, qualquer pessoa pode solicitar ajuda.

                </p>
                    
                <p class="text-info recuo"> 
                   Na opção “Pedir Socorro” o usuário informa os sintomas que está sentindo, essa informação é enviada a Central de Comando e Controle vinculada as autoridades de saúde.

                </p>

                <p class="text-info recuo"> 
                   Além disso, o aplicativo conta com a funcionalidade “Botão de Emergência”, para uso exclusivo no campus da UnB. Se uma pessoa se encontra em uma situação de risco ou ameaça ela pode acionar essa função apenas agitando o dispositivo no qual o SOS-UnB está instalado e a segurança do campus receberá as informações de geolocalização da vítima e poderá socorre-la.
                   Por fim, o projeto inclui ainda links de acesso a sites com informações seguras a respeito da evolução do Covid-19 no Distrito Federal.
                </p>
          
        </section>
    );
};

export default Projeto;
