import { useState, useEffect, ReactNode, useCallback } from "react";

import Card from "@components/Card";

import styles from "./style.module.css";

interface Props {
  children: ReactNode;
  text: string;
  afterText?: string;
}

export default function UnderlineAnimation({
  children,
  text,
  afterText,
}: Props) {
  const extendedMargin = -240;
  const retractedMargin = -12;
  const speed = 4;
  const fps = 60;

  const defaultState = {
    status: 0,
    margin: extendedMargin,
  };

  const [st, updateState] = useState(defaultState);

  const scrollDown = useCallback(() => {
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
  }, [retractedMargin, st.margin, st.status]);

  const scrollUp = useCallback(() => {
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
  }, [extendedMargin, st.margin, st.status]);

  useEffect(() => {
    if (st.status == 1) {
      setTimeout(scrollDown, 1000 / fps);
    } else if (st.status == 3) {
      setTimeout(scrollUp, 1000 / fps);
    }
  }, [scrollDown, scrollUp, st]);

  return (
    <span className="relative z-10 inline-block h-auto w-auto">
      <span
        className="relative z-10 inline-block h-auto border-b-4 border-white md:border-b-8"
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
      <div className="pointer-events-none	absolute top-full z-10 h-52 overflow-y-hidden overflow-x-visible md:w-96">
        <div
          className="absolute top-0 z-0 hidden h-3/6 overflow-visible pt-3 md:block lg:left-10"
          style={{ marginTop: `${st.margin}px` }}
        >
          <Card img="/images/void.svg" alt="MascotFooter" inverted={true}>
            <h5
              className={`font-ithin normal-case leading-none ${styles.cardText}`}
            >
              {text}
            </h5>
          </Card>
        </div>
      </div>
    </span>
  );
}
