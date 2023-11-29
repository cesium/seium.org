import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";

export default function GoToTop() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 400) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    });
  }, []);

  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      className={`fixed right-5 bottom-5 cursor-pointer w-12 h-12 bg-white rounded-full transition-translate duration-300 ${
        showButton ? "" : "translate-y-52"
      }`}
      onClick={goToTop}
    >
      <FontAwesomeIcon icon={faArrowUp} className="text-3xl text-black" />
    </button>
  );
}
