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
        animator="Eduardo Ribeiro & Filipe Valpereiro"
        day={2}
        activityID="devops"
        speakerID=""
        description=""
      />
      <Activity
        start="9:30"
        end="11:30"
        bigTitle="Sabes que começou na API, I-I-I"
        title="Workshop Primavera"
        animator="Jorge Ribeiro & Nuno Santos"
        day={2}
        activityID="api"
        speakerID="nunosantos"
        speakerID="jorgeribeiro"
        description="Sabes o que é uma Web API? Quer saibas ou não, junta-te a nós e aceita o desafio de fazer a tua primeira integração com o Jasmin. Há prémio para o(s) vencedor(es)!"
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
        bigTitle="Developing software remotely and asynchronously"
        title="Talk"
        start="15:00"
        end="16:00"
        animator="Gonçalo Silva, Doist"
        day={2}
        activityID="remote"
        speakerID="goncalosilva"
        description="Remote is here to stay. Increasingly, more companies realize it's the future of work. But with it, many best practices break down. Communicating and working synchronously is tricky when your team is distributed across the globe. Chit-chat is hard, pair programming is harder, mob programming is impossible. So, how exactly do you collaborate effectively? How do you raise the quality bar as a team? How do you share knowledge, and keep others in the loop? Are there established approaches from which we can draw inspiration?"
      />
      <CoffeeBreak name="Coffee Break" />
      <Activity
        main="yes"
        bigTitle="BNP Paribas"
        title="Pitch"
        start="16:30"
        end="16:45"
      />
      <Activity
        main="yes"
        bigTitle="OutSystems"
        title="Pitch"
        start="16:45"
        end="17:00"
      />
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
