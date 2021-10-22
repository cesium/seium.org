import Activity from "../../Activity";
import CoffeeBreak from "../../CoffeeBreak";

let contentStyle = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  flexWrap: "wrap",
  maxWidth: "450px",
};

function Day24() {
  return (
    <div style={contentStyle}>
      <Activity
        start="9:30"
        end="11:30"
        bigTitle="Cybersecurity @everis - top 10 OWASP vulnerabilities"
        title="Workshop Everis"
        animator1="Mauro Almeida"
        animator2="Ricardo Gomes"
        day={1}
        join="https://www.eventbrite.pt/e/142305384235"
        activityID="cybersecurity"
        speaker1ID="mauroalmeida"
        speaker2ID="ricardogomes"
        description="Neste workshop, será apresentada a área de segurança de informação e cibersegurança da everis Portugal, com breve descrição do que é trabalhar na área da cibersegurança em Portugal. De seguida, um dos nossos lead architects irá falar das top 10 vulnerabilidades da OWASP, demonstrando como estas vulnerabilidades podem ser exploradas e como os programadores podem prevenir este tipo de ataques."
      />
      <Activity
        start="10"
        end="11:30"
        bigTitle="Testes para Futuros Engenheiros de Software"
        title="Workshop Subvisual"
        animator1="Pedro Costa"
        day={1}
        join="https://www.eventbrite.pt/e/142305783429"
        activityID="testes"
        speaker1ID="pedrocosta"
        description="Testes são a base da engenharia aplicada à criação de software. Neste workshop iremos analisar e experimentar diferentes tipos de testes e o seu papel na produção de produtos digitais de qualidade. Usaremos JavaScript e várias ferramentas do respectivo ecossistema.
        É necessário computador com: Ambiente Node.js; Terminal (WSL ou máquina virtual em Windows); Editor de texto para programação (VS Code recomendado); e browser Firefox, Chrome, ou derivados."
      />
      <CoffeeBreak name="Coffee Break" />
      <Activity
        main="yes"
        bigTitle="(don't) use vim"
        title="Talk"
        start="12:00"
        end="13:00"
        animator1="Miguel Palhas, Subvisual"
        day={1}
        join="https://zoom.us/j/92009060946"
        activityID="vim"
        speaker1ID="miguelpalhas"
        description="A (mostly improvised) buffet of things you might be able to do to make your life easier when writing code. And to look like a real hacker while doing it."
      />
      <CoffeeBreak name="Lunch Break" />
      <Activity
        main="yes"
        bigTitle="Deep Dive IoT"
        title="Talk"
        start="14:00"
        end="15:00"
        animator1="Alexandre Brito, Accenture"
        day={1}
        join="https://zoom.us/j/98778437905"
        activityID="iot"
        speaker1ID="alexandrebrito"
        description="Vem conhecer mais sobre Cloud, IoT, Machine Learning. Descobre que tipo de projectos e tecnologias implementamos nos nossos clientes."
      />
      <Activity
        main="yes"
        bigTitle="Sistemas de Larga Escala - O que esperar da indústria"
        title="Talk"
        start="15:00"
        end="16:00"
        animator1="Tiago Carção, Glovo"
        day={1}
        join="https://zoom.us/j/94515931976"
        activityID="sistemaslargaescala"
        speaker1ID="tiagocarcao"
        description="Hoje em dia vivemos numa sociedade global, altamente conectada, always-on, com uma grande pegada digital. Estas características fazem de grande parte das aplicações e serviços que utilizamos hoje, sistemas que recebem um grande volume de tráfego e devem ser capazes de reagir às diferentes flutuações de horário, hábitos e gostos.
        Este é o panorama que encontramos quando entramos na indústria, e é com este contexto que temos que lidar pondo em prática os conceitos que aprendemos e muitos mais que vamos adquirindo de uma área em constante evolução.
        Com esta palestra, e explorando as minhas diferentes experiências e desafios em diferentes áreas, produtos, equipas e empresas, bem como alguns conceitos importantes para enfrentar estes desafios, gostava de clarificar possíveis dúvidas e oferecer alguma visão em primeira mão de como é trabalhar nesta indústria."
      />
      <CoffeeBreak name="Coffee Break" />
      <Activity
        main="yes"
        bigTitle="Ubiwhere"
        title="Pitch"
        start="16:30"
        end="16:45"
        join="https://zoom.us/j/95635161884"
      />
      <Activity
        main="yes"
        bigTitle="Vilt"
        title="Pitch"
        start="16:45"
        end="17:00"
        join="https://zoom.us/j/95854630311"
      />
      <CoffeeBreak name="Coffee Break" />
      <Activity
        main="yes"
        bigTitle="CV - Check Up"
        title="Talk"
        start="17:30"
        end="18:30"
        animator1="Juliana Carvalho, Unlimited Future"
        day={1}
        join="https://zoom.us/j/93616962948"
        activityID="cv"
        speaker1ID="julianacarvalho"
        description="O CV sempre desempenhou um papel importante no processo de recrutamento, e é uma das ferramentas tradicionais do mercado de trabalho que funciona como um cartão de visita. Nesta talk, vamos dar-te algumas dicas sobre a maneira mais eficaz de apresentar a história da tua vida!"
      />
      <Activity
        main="yes"
        bigTitle="Discord Master Race"
        title="Activity"
        start="21:00"
        end="22:30"
      />
    </div>
  );
}

export default Day24;
