import { useState, useEffect } from "react";

import Card from "/components/utils/Card";

import styles from "./style.module.css";

export default function UnderlineAnimation({ children, text, afterText }) {
  const extendedMargin = -240;
  const retractedMargin = -12;
  const speed = 4;
  const fps = 60;

  const defaultState = {
    status: 0,
    margin: extendedMargin,
  };

  const [st, updateState] = useState(defaultState);

  const scrollDown = () => {
    if (st.margin == retractedMargin) {
      updateState({
        status: 0,
        margin: retractedMargin,
      });
    } else {
      updateState({
        status: st.status,
        margin: st.margin + speed,
      });
    }
  };

  const scrollUp = () => {
    if (st.margin == extendedMargin) {
      updateState({
        status: 0,
        margin: extendedMargin,
      });
    } else {
      updateState({
        status: st.status,
        margin: st.margin - speed,
      });
    }
  };

  useEffect(() => {
    if (st.status == 1) {
      setTimeout(scrollDown, 1000 / fps);
    } else if (st.status == 3) {
      setTimeout(scrollUp, 1000 / fps);
    }
  }, [st]);

  return (
    <span className="relative z-10 mt-4 inline-block h-auto w-auto leading-none">
      <span
        className="relative z-10 inline-block h-auto border-white md:border-b-8"
        onMouseEnter={() =>
          updateState((oldState) => ({ ...oldState, status: 1 }))
        }
        onMouseLeave={() =>
          updateState((oldState) => ({ ...oldState, status: 3 }))
        }
      >
        {children}
      </span>
      <span className="relative z-10 inline-block h-auto">
        &nbsp;{afterText ? afterText : ""}
      </span>
      <div className="absolute top-full z-10 h-52 overflow-y-hidden overflow-x-visible md:w-96">
        <div
          className="absolute top-0 left-20 z-0 hidden overflow-visible pt-3 md:block"
          style={{ marginTop: `${st.margin}px` }}
        >
          <Card
            img="/images/mascot-footer.svg"
            alt="MascotFooter"
            inverted={true}
          >
            <h5 className={`font-ithin ${styles.cardText}`}>{text}</h5>
          </Card>
        </div>
      </div>
    </span>
  );
}
