import { useEffect } from "react";
import Lottie from "lottie-web";
import seilogo from "./logo_animation.json";


export default function Animation() {

  useEffect(() => {
    Lottie.loadAnimation({
      container: document.querySelector("#sei-logo"),
      animationData: seilogo,
    });
  }, []);

  return <div id="sei-logo" height={150} width={150} />
};
