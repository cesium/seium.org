import Activity from "../../carousels/activity";
import CoffeeBreak from "../../carousels/coffeeBreak";

let contentStyle = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  flexWrap: "wrap",
  maxWidth: "450px",
};

function Day25() {
  return (
    <div style={contentStyle}>
      <Activity
        start="9:30"
        end="11:30"
        bigTitle="DevOps: The Next Generation!"
        title="Workshop Critical Software"
        animator1="Eduardo Ribeiro"
        animator2="Filipe Valpereiro"
        day={2}
        join="https://www.eventbrite.pt/e/142306567775"
        activityID="devops"
        speaker1ID="eduardoribeiro"
        speaker2ID="filipevalpereiro"
        description="DevOps é um conjunto de práticas que combina desenvolvimento de software e operações de TI. Tem como objetivo encurtar o ciclo de vida de desenvolvimento de sistemas e fornecer entrega contínua com alta qualidade de software. DevOps é complementar ao desenvolvimento de software Agile; vários aspectos do DevOps vieram da metodologia Agile. Nosso objetivo é esclarecer o que significa DevOps e o que consideramos ser a próxima geração."
      />
      <Activity
        start="9:30"
        end="11:30"
        bigTitle="Sabes que começou na API, I-I-I"
        title="Workshop Primavera"
        animator1="Nuno Santos"
        animator2="Jorge Ribeiro"
        day={2}
        join="https://www.eventbrite.pt/e/142306096365"
        activityID="api"
        speaker1ID="nunosantos"
        speaker2ID="jorgeribeiro"
        description="Sabes o que é uma Web API? Quer saibas ou não, junta-te a nós e aceita o desafio de fazer a tua primeira integração com o Jasmin. Há prémio para o(s) vencedor(es)!"
      />
      <CoffeeBreak name="Coffee Break" />
      <Activity
        main="yes"
        bigTitle="O ecossistema tecnológico da mobilidade sustentável"
        title="Talk"
        start="12:00"
        end="13:00"
        animator1="André Dias, GoWithFlow"
        day={2}
        join="https://zoom.us/j/92963044285"
        activityID="mobilidade"
        speaker1ID="andredias"
        description="A transição para uma mobilidade cada vez mais sustentável é acompanhada e acelerada pela introdução de vários paradigmas tecnológicos como IoT, Big Data ou Inteligência Artificial num ecossistema tecnológico complexo, mas com múltiplas oportunidades de novos serviços cada vez mais inteligentes e conectados."
      />
      <CoffeeBreak name="Lunch Break" />
      <Activity
        main="yes"
        bigTitle="STAYAWAY COVID - uma ferramenta de combate à pandemia"
        title="Talk"
        start="14:00"
        end="15:00"
        animator1="Francisco Maia, Keyruptive"
        day={2}
        join="https://zoom.us/j/92815361928"
        activityID="stayaway"
        speaker1ID="franciscomaia"
        description="A STAYAWAY COVID é a aplicação de rastreio de contactos digital para Portugal. O seu desenho e aplicação foi alvo de imensas opiniões, críticas e elogios. Aproveitando a SEI como evento de diálogo tecnológico, olharemos para as decisões de desenho da STAYAWAY COVID e os desafios associados a lançar uma aplicação que ultrapassou os 3 Milhões de downloads."
      />
      <Activity
        main="yes"
        bigTitle="Developing software remotely and asynchronously"
        title="Talk"
        start="15:00"
        end="16:00"
        animator1="Gonçalo Silva, Doist"
        day={2}
        join="https://zoom.us/j/96091573369"
        activityID="remote"
        speaker1ID="goncalosilva"
        description="Remote is here to stay. Increasingly, more companies realize it's the future of work. But with it, many best practices break down. Communicating and working synchronously is tricky when your team is distributed across the globe. Chit-chat is hard, pair programming is harder, mob programming is impossible. So, how exactly do you collaborate effectively? How do you raise the quality bar as a team? How do you share knowledge, and keep others in the loop? Are there established approaches from which we can draw inspiration?"
      />
      <CoffeeBreak name="Coffee Break" />
      <Activity
        main="yes"
        bigTitle="BNP Paribas"
        title="Pitch"
        start="16:30"
        end="16:45"
        join="https://zoom.us/j/95558350771"
      />
      <Activity
        main="yes"
        bigTitle="OutSystems"
        title="Pitch"
        start="16:45"
        end="17:00"
        join="https://zoom.us/j/99813190619"
      />
      <Activity
        main="yes"
        bigTitle="Eurotux"
        title="Pitch"
        start="17:00"
        end="17:15"
        join="https://zoom.us/j/97273566550"
      />
      <CoffeeBreak name="Coffee Break" />
      <Activity
        main="yes"
        bigTitle="Google HashCode"
        start="17:30"
        end="22:00"
      />
      <Activity
        main="yes"
        bigTitle="Discord Social Meeting"
        title="Activity"
        start="22:00"
        end="23:00"
      />
    </div>
  );
}

export default Day25;
