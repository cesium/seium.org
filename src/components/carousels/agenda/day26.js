import Activity from "../../carousels/activity";
import CoffeeBreak from "../../carousels/coffeeBreak";

let contentStyle = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  flexWrap: "wrap",
  maxWidth: "450px",
};

function Day26() {
  return (
    <div style={contentStyle}>
      <Activity
        start="9:30"
        end="11:30"
        bigTitle="Sensores e Algoritmos para Navegação Autónoma"
        title="Workshop Bosch"
        animator1="João Andrade"
        animator2="João Ribeiro"
        animator3="Luciano Sousa"
        day={3}
        activityID="sensores"
        speaker1ID="joaoandrade"
        speaker2ID="joaoribeiro"
        speaker3ID="lucianosousa"
        description="A Condução autónoma será a força motriz da evolução tecnológica nos tempos vindouros. A Participação da Bosch neste sector é muito variada, com grande ênfase na sensorização e Percepção baseada nos dados recebidos. Neste workshop iremos dar uma vista alargada sobre os sensores existentes, intuição acerca das vantagens/desvantagens de cada um, como fundir os dados de sensores diferentes e que ferramentas são necessárias para quem gostaria de trabalhar neste tópico."
      />
      <Activity
        start="9:30"
        end="11:30"
        bigTitle="TBA"
        title="Workshop"
        animator1="TBA"
      />
      <CoffeeBreak name="Coffee Break" />
      <Activity
        main="yes"
        bigTitle="TBA"
        title="Talk"
        start="12:00"
        end="13:00"
        animator1="TBA"
      />
      <CoffeeBreak name="Lunch Break" />
      <Activity
        main="yes"
        bigTitle="TBA"
        title="Talk"
        start="14:00"
        end="15:00"
        animator1="TBA"
      />
      <Activity
        main="yes"
        bigTitle="Como conseguires o teu emprego de sonho na Google"
        title="Talk"
        start="15:00"
        end="16:00"
        animator1="André Lago, Google"
        day={3}
        activityID="google"
        speaker1ID="andrelago"
        description="Se alguma vez sonhaste em trabalhar numa grande empresa como a Google, nesta talk vais descobrir como podes concretizar esse sonho! Vem aprender como te podes preparar para os processos de candidatura de empresas como a Google e descobre como é a sensação de trabalhar neste tipo de empresas. Depois desta talk, deverás ter tudo o que precisas para começar o teu caminho em direção ao emprego que sempre quiseste!"
      />
      <CoffeeBreak name="Coffee Break" />
      <Activity
        main="yes"
        bigTitle="TBA"
        title="Pitch"
        start="16:30"
        end="16:45"
      />
      <Activity
        main="yes"
        bigTitle="Teleperformance"
        title="Pitch"
        start="16:45"
        end="17:00"
      />
      <CoffeeBreak name="Coffee Break" />
      <Activity
        main="yes"
        bigTitle="Closing Session and Prize Announcement"
        start="17:30"
        end="18:30"
      />
      <Activity
        main="yes"
        bigTitle="Hackathon (42 hours)"
        start="21:00"
        end="24:00"
      />
    </div>
  );
}

export default Day26;
