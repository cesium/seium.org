import React from "react";
import { Clickable } from "react-clickable";

import windowDimensions from "../utils/windowDimensions";
import Container from "../container/container";
import SpeakerEvent from "./speakerEvent";
import Speaker from "./Speaker";
import PrevNotClicked from "../images/prev-not-clicked.svg";
import NextNotClicked from "../images/next-not-clicked.svg";
import PrevClicked from "../images/prev-clicked.svg";
import NextClicked from "../images/next-clicked.svg";
import joaooliveira from "../images/speakers/joaooliveira.jpg";
import tiagocarcao from "../images/speakers/tiagocarcao.png";
import andrelago from "../images/speakers/andrelago.jpg";
import goncalosilva from "../images/speakers/goncalosilva.jpg";

import "./clickable.css";
import "../../assets/css/agenda.css";

let next = NextClicked;
let prev = PrevNotClicked;

let headerStyle = () => {
  let { width, height } = windowDimensions();
  if (width >= 1200) {
    return {
      button: {
        marginTop: "5%",
      },
      date: {
        fontSize: "24px",
        marginLeft: "59px",
        marginBottom: "7px",
      },
      day: {},
      container: {},
      navigation: {
        display: "flex",
        alignItems: "center",
        flexDirection: "row",
      },
      headerContainer: {
        display: "flex",
        alignItems: "flex-start",
        flexDirection: "column",
      },
    };
  } else if (width >= 823) {
    return {
      button: {
        marginTop: "10px",
        width: "24px",
      },
      date: {
        fontSize: "22px",
        marginLeft: "40px",
        marginBottom: "7px",
      },
      day: {
        fontSize: "46px",
      },
      container: {},
      navigation: {
        display: "flex",
        alignItems: "center",
        flexDirection: "row",
      },
      headerContainer: {
        display: "flex",
        alignItems: "flex-start",
        flexDirection: "column",
      },
    };
  } else if (width >= 768) {
    return {
      button: {
        marginTop: "10px",
        width: "20px",
      },
      date: {
        fontSize: "18px",
        marginLeft: "36px",
        marginBottom: "7px",
      },
      day: {
        fontSize: "36px",
      },
      container: {
        paddingLeft: "0px",
      },
      navigation: {
        display: "flex",
        alignItems: "center",
        flexDirection: "row",
      },
      headerContainer: {
        display: "flex",
        alignItems: "flex-start",
        flexDirection: "column",
      },
    };
  } else {
    return {
      button: {
        // paddingLeft: '15px',
        // paddingRight: '15px',
        backgroundColor: "transparent",
        marginTop: "5%",
        width: "22px",
      },
      date: {
        fontSize: "20px",
        marginLeft: "0",
      },
      day: {
        fontSize: "40px",
      },
      container: {
        flexDirection: "column",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      },
      navigation: {
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        height: "50px",
      },
      headerContainer: {
        width: "100%",
        maxWidth: "450px",
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        marginBottom: "30px",
      },
    };
  }
};

function FiltredCarousel(props) {
  let containerStyle = {
    ...{
      width: "100%",
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      paddingLeft: "5vw",
      paddingRight: "5vw",
    },
    ...headerStyle().container,
  };
  let contentStyle = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    flexWrap: "wrap",
    maxWidth: "450px",
  };
  let [increment, setIcrement] = React.useState(0);
  function navigate(param) {
    if (param == "next" && increment < carouselPages.length - 1)
      setIcrement((next) => next + 1);
    else if (param == "prev" && increment > 0) setIcrement((prev) => prev - 1);

    return 1;
  }

  let carouselPages = [
    <div style={contentStyle}>
      <Speaker
        initStatus={"show"}
        label="Talk. 14h"
        name="João Oliveira"
        job="Chief Technical Officer"
        description="TonicApp SA"
        picture={joaooliveira}
        bio={[
          "Aos 14 anos de idade João vendeu o seu primeiro software por 30 “contos”, aos 17 foi finalista das Olimpíadas de Informática, aos 26 co-fundou a empresa que lançou o primeiro ERP português disponível como Software as a Service, software distinguido, 2 anos depois, com o prémio “Inovação Tecnológica em PME” promovido pela Oracle e Intel.",
          "João Oliveira é licenciado pela Universidade do Minho, tem um trajeto profissional diversificado, no setor público e privado, co-fundou uma startup onde foi Chief Technical Officer e Arquitecto de Software, e nos últimos anos passou por multinacionais da área das telecomunicações (Wedo Technologies) e da indústria de moda de luxo (Farfetch). Desde o início de 2020 é Chief Technical Officer na TonicApp SA, empresa que desenvolve uma plataforma digital de saúde desenvolvida para apoiar a comunidade médica a diagnosticar e a tratar os doentes, empresa que está presente em Portugal, Espanha, França e Itália.",
        ]}
      />
    </div>,
    <div style={contentStyle}>
      <Speaker
        initStatus={"hide"}
        label="Talk. 14h"
        name="Tiago Carção"
        job="Software Engineer and Tech Lead"
        description="Glovo"
        picture={tiagocarcao}
        bio={[
          "Sou o Tiago Carção e fiz a graduação em Engenharia Informática na Universidade do Minho. Desde sempre, o impacto que a tecnologia consegue trazer às nossas vidas todos os dias e em tudo o que fazemos, é algo que me fascina!",
          "Fui cofundador de duas startups (uma ainda em execução e em total força yay!), trabalhei na Farfetch (e-commerce), Revolut (fintech) e, atualmente, trabalho na Glovo (on-demand courier service). Por isso, compreendo os problemas inerentes de uma startup que está a crescer e, por outro lado, as questões que uma grande empresa enfrenta.",
          "Pessoalmente, gosto de trabalhar em sistemas distribuídos com grande escala. Problemas reais e que precisam de decisões rápidas e não comprometedoras. É difícil manter-me motivado, pois preciso de me sentir desafiado todos os dias! Amo trabalhar num ambiente de equipa altamente motivado a aprender e a evoluir alinhado a um bom desafio tecnológico.",
          "Acredito que só em equipa aprendendo uns com os outros podemos, realmente, crescer pessoalmente e profissionalmente. Sobretudo na área da tecnologia a partilha de conhecimento em equipa faz sentido: aprender e partilhar, tomar decisões bem ponderadas e baseadas em bons princípios! Além da tecnologia (que ocupa grande parte da minha vida :p) gosto de acompanhar muitos desportos, mais especificamente futebol (global), NBA, NFL, cinema e de ler.",
        ]}
      />
    </div>,
    <div style={contentStyle}>
      <Speaker
        initStatus={"show"}
        label="Talk. 14h"
        name="Gonçalo Silva"
        job="Chief Technical Officer"
        description="Doist"
        picture={goncalosilva}
        bio={[
          "Gonçalo is the CTO at Doist, creators of Todoist and Twist. He's been working remotely for over a decade, and managing remote teams for most of that time. He loves long-term ambition, asynchronous communication, and programming.",
        ]}
      />
    </div>,
    <div style={contentStyle}>
      <Speaker
        initStatus={"show"}
        label="Talk. 14h"
        name="André Lago"
        job="Software Engineer and Tech Lead"
        description="Google"
        picture={andrelago}
        bio={[
          "O André é Software Engineer e Tech Lead na Google, em Munique na Alemanha. A equipa do André desenvolve produtos externos de privacidade essenciais na Google, que todos os dias ajudam milhões de utilizadores a gerir a sua privacidade online.",
          "O André é apaixonado por tecnologia desde criança e adora aprender coisas novas por conta própria. Desde que começou a estudar na Universidade do Porto, ele trabalhou em projetos diversos, desde assistentes inteligentes para gerir sistemas IoT a jogos 3D. O André também participou em vários projetos não técnicos, tais como ser o CEO de uma empresa de 50 estudantes e ser o Conference Chair de uma conferência com mais de 500 participantes.",
          "Para além de tecnologia, o André gosta de música, basquetebol e surf.",
        ]}
      />
    </div>,
  ];

  function Header(props) {
    return (
      <div style={headerStyle().headerContainer}>
        <p className="x-large-1" style={headerStyle().date}>
          Happening on
        </p>
        <div style={headerStyle().navigation}>
          <Clickable
            onClick={() => {
              navigate("prev");
            }}
            className="clickable prev"
            style={{
              ...headerStyle().button,
              ...{ backgroundImage: `url(${prev})` },
            }}
          ></Clickable>
          <h1 style={headerStyle().day}>{23 + increment} Fev</h1>
          <Clickable
            onClick={() => {
              navigate("next");
            }}
            className="clickable next"
            style={{
              ...headerStyle().button,
              ...{ backgroundImage: `url(${next})` },
            }}
          >
            {" "}
          </Clickable>
        </div>
        <div className="headerButtons">
          <p className="small" style={{ width: "68%", lineHeight: "1.2" }}>
            During this week, you have the opportunity to interact with many
            recognized speakers, national, international and notorious
            companies! You can get to know them better here.
          </p>
          <div className="agenda-buttons"></div>
        </div>
      </div>
    );
  }
  let manageNavigation = () => {
    prev = PrevClicked;
    next = NextClicked;
    if (increment === 0) prev = PrevNotClicked;

    if (increment === carouselPages.length - 1) next = NextNotClicked;
  };
  return (
    <Container
      style={{
        ...containerStyle,
        ...props.style,
        ...{ paddingRight: "0px", paddingLeft: "10px" },
      }}
    >
      <Header></Header>
      {manageNavigation()}
      {carouselPages[increment]}
    </Container>
  );
}

export default FiltredCarousel;
