import Activity from "../../carousels/activity";
import CoffeeBreak from "../../carousels/coffeeBreak";

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
        bigTitle="TBA"
        title="Workshop"
        animator="TBA"
      />
      <Activity
        start="9:30"
        end="11:30"
        bigTitle="TBA"
        title="Workshop"
        animator="TBA"
      />
      <CoffeeBreak name="Coffee Break" />
      <Activity
        main="yes"
        bigTitle="TBA"
        title="Talk"
        start="12:00"
        end="13:00"
        animator="TBA"
      />
      <CoffeeBreak name="Lunch Break" />
      <Activity
        main="yes"
        bigTitle="TBA"
        title="Talk"
        start="14:00"
        end="15:00"
        animator="TBA"
      />
      <Activity
        main="yes"
        bigTitle="Sistemas de Larga Escala - O que esperar da indústria"
        title="Talk"
        start="15:00"
        end="16:00"
        animator="Tiago Carção, Glovo"
        day={1}
        activityID="sistemaslargaescala"
        speakerID="tiagocarcao"
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
      />
      <Activity
        main="yes"
        bigTitle="Vilt"
        title="Pitch"
        start="16:45"
        end="17:00"
      />
      <CoffeeBreak name="Coffee Break" />
      <Activity
        main="yes"
        bigTitle="CV - Check Up"
        title="Talk"
        start="17:30"
        end="18:30"
        animator="Juliana Carvalho, Unlimited Future"
        day={1}
        activityID="cv"
        speakerID="julianacarvalho"
        description="O CV sempre desempenhou um papel importante no processo de recrutamento, e é uma das ferramentas tradicionais do mercado de trabalho que funciona como um cartão de visita. Nesta talk, vamos dar-te algumas dicas sobre a maneira mais eficaz de apresentar a história da tua vida!"
      />
      <Activity
        main="yes"
        bigTitle="Discord Master Race"
        title="Activity"
        start="21:00"
        end="23:00"
      />
    </div>
  );
}

export default Day24;
