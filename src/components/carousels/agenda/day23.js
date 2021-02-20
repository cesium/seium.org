import Activity from "../../carousels/activity";
import CoffeeBreak from "../../carousels/coffeeBreak";

let contentStyle = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  flexWrap: "wrap",
  maxWidth: "450px",
};

function Day23() {
  return (
    <div style={contentStyle}>
      <Activity main="yes" start="10:00" end="11:00" title="Opening session" />
      <Activity
        main="yes"
        start="11:00"
        end="11:30"
        title="Prizes and Contests"
      />
      <CoffeeBreak name="Coffee Break" />
      <Activity
        main="yes"
        bigTitle="The Future of Language: Augmenting AI and Humans"
        title="Talk"
        start="12:00"
        end="13:00"
        animator1="Paulo Dimas, Unbabel"
        day={0}
        activityID="ai"
        speaker1ID="paulodimas"
        description="In 1998, 80% of the internet was in English. In 2018 it is only 20%. Nowadays, software programs and social media platforms are often available in 30 to 100 languages. That doesn't sound too bad until we realize that there are more than 6,000 languages on the planet.
        This means that the language of business is diversifying and companies must be multilingual, otherwise, the language will become a barrier for global enterprises and their growth. How do we create more accessibility and mind share? Pulling from enterprise use cases, Paulo will explain how AI can break these language roadblocks without replacing humans, but combining AI technology with real humans and their authenticity, and what this means for global companies in the future."
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
        bigTitle="We Can Do It!"
        title="Talk"
        start="15:00"
        end="16:00"
        animator1="João Oliveira, Tonic App"
        day={0}
        activityID="wecandoit"
        speaker1ID="joaooliveira"
        description="Numa indústria até há uns anos enormemente desproporcional no rácio de profissionais por género, o papel das mulheres na indústria de tecnologia e software é cada vez mais relevante e prometedor em economias que as tecnologias são parte da visão estratégica e aposta no futuro de um país."
      />
      <CoffeeBreak name="Coffee Break" />
      <Activity
        main="yes"
        bigTitle="Accenture"
        title="Pitch"
        start="16:30"
        end="16:45"
      />
      <Activity
        main="yes"
        bigTitle="Capgemini"
        title="Pitch"
        start="16:45"
        end="17:00"
      />
      <Activity
        main="yes"
        bigTitle="Developing Tasker - Desafios de um solo Developer"
        title="Talk"
        start="17:00"
        end="18:00"
        animator1="João Dias, Tasker"
        day={0}
        activityID="developer"
        speaker1ID="joaodias"
        description="Como é ser um developer encarregue da app de automatização mais popular no Android? Nesta palestra, falamos com João Dias, o proprietário e developer da app Tasker, uma referência no mundo da automação há mais de uma década com mais de 1.500.000 de instalações. Munido de uma perspetiva diferente e incomum do mundo de Android development, vamos explorar como é ser um developer independente de sucesso, os desafios, as vitórias, o bom e o mau que acompanha a responsabilidade de gerir todo o ecossistema Tasker."
      />
      <Activity
        bigTitle="CS:GO Tournament"
        title="Activity"
        start="21:00"
        end="23:00"
      />
      <Activity
        bigTitle="Chess Tournament"
        title="Activity"
        start="21:00"
        end="23:00"
      />
    </div>
  );
}

export default Day23;
