import React from "react";
import FormContato from "./bloc/formContato";

import './style.css'

const Main = () => {

    return (
        <main>
            <section className="intro" id="home">

                <div>
                    <h1>Precisa de Consultoria Jurídica de Confiança?</h1>
                    <p>Com mais de 10 anos de experiência, nosso escritório oferece soluções jurídicas eficazes nas áreas de Direito de Família, Trabalhista, Empresarial e mais.</p>
                </div>

                <a href="#contato" className="cta-button">Agende Sua Consultoria Agora!</a>
                
            </section>

            <section className="sobre" id="sobre">
                <h2>Sobre o Advogado</h2>
                <div className="content">
                    <img src="/image/img-adv.png" alt="Foto Profissional do Advogado" />
                    <div className="sobre-text">
                        <p>Olá, sou [Nome do Advogado], advogado com mais de 10 anos de experiência atuando em diversas áreas do Direito. Minha missão é proporcionar aos meus clientes um atendimento especializado, com foco em resultados práticos e soluções jurídicas eficientes.</p>
                        <p>Como fundador do [Nome do Escritório], prezo pela transparência, ética e comprometimento com cada caso. Estou aqui para ajudá-lo a resolver seus problemas jurídicos com segurança e confiança.</p>
                    </div>
                </div>

                <div className="content">
                    <h3>Certificações e Prêmios</h3>
                    <ul>
                        <li>OAB/SP 123456</li>
                        <li>Especialista em Direito de Família pela [Nome da Instituição]</li>
                        <li>Membro da Comissão de Direito Empresarial da OAB</li>
                    </ul>
                </div>

                <div className="content">
                    <h3>Depoimentos de Clientes</h3>
                    <ul>
                        <li>"O [Nome do Advogado] foi fundamental para resolver meu processo de divórcio de maneira tranquila e profissional." – Maria Souza</li>
                        <li>"Fiquei muito satisfeito com o serviço prestado pelo [Nome do Advogado]." – Carlos Almeida, Empresário</li>
                    </ul>
                </div>
            </section>

            <section className="areas-de-atuacao" id="servicos">
                <h2>Áreas de Especialização</h2>
                <div className="area">
                    <h3>Direito de Família</h3>
                    <p>Atuamos em casos de divórcio, guarda de filhos, pensão alimentícia, testamentos e inventários.</p>
                </div>
                <div className="area">
                    <h3>Direito Trabalhista</h3>
                    <p>Defendemos os direitos dos trabalhadores e empregadores, incluindo questões sobre rescisão, férias, hora extra e acidente de trabalho.</p>
                </div>
                <div className="area">
                    <h3>Direito Empresarial</h3>
                    <p>Consultoria jurídica para empresas de todos os portes, incluindo contratos, compliance e recuperação judicial.</p>
                </div>
                <div className="area">
                    <h3>Direito Civil</h3>
                    <p>Resolução de disputas contratuais e questões de responsabilidade civil.</p>
                </div>
                <div className="area">
                    <h3>Direito Imobiliário</h3>
                    <p>Consultoria e defesa em contratos de compra e venda, locação, despejo e regularização de imóveis.</p>
                </div>
            </section>

            <section className="depoimentos" id="depoimentos">
                <h2>O que Nossos Clientes Dizem</h2>
                <div className="depoimento">
                    <p>"O escritório foi excelente no atendimento do meu caso de Direito de Família." – Joana Pereira</p>
                </div>
                <div className="depoimento">
                    <p>"Minha empresa estava passando por dificuldades jurídicas, e graças à orientação da equipe do escritório, conseguimos resolver." – Ricardo Lima, CEO</p>
                </div>
            </section>

            <FormContato/>

            <section className="informacoes-contato" id="informacoes">
                <h2>Onde Estamos</h2>
                <p>Endereço: Rua das Flores, 123 – Centro, São Paulo, SP</p>
                <p>Telefone: (11) 98765-4321</p>
                <p>E-mail: contato@advocaciaexemplo.com.br</p>
                <p>Horário de Atendimento: Segunda a Sexta, das 9h às 18h</p>
                <a href="https://www.google.com/maps" target="_blank" rel="noopener noreferrer">Ver no Google Maps</a>
            </section>
        </main>
    )

}

export default Main;