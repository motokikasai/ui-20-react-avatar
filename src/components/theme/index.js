import React, { useState } from "react";
import sun from "../../assets/sun.svg";
import moon from "../../assets/moon.svg";

function Theme() {
  // Theme Switcher callback function
  let [check, setCheck] = useState(true);

  return (
    <section className="theme-changer">
      <div className="input-bar">
        <input
          type="checkbox"
          name="theme"
          id="checkbox"
          className="checkbox"
          checked={check}
          onChange={() => {
            const bd = document.body;
            const card = document.querySelector(".card");

            function darkEnter(e) {
              e.target.style.boxShadow =
                "-3px -3px 5px rgba(120, 120, 120, 0.7), 3px 3px 5px rgb(20, 20, 20)";
              document.querySelector("img.shade").style.boxShadow =
                "-3px -3px 5px rgba(120, 120, 120, 0.7), 3px 3px 5px rgb(20, 20, 20)";
            }
            function darkLeave(e) {
              e.target.style.boxShadow =
                "-6px -6px 12px rgba(120, 120, 120, 0.7), 9px 9px 16px rgba(20, 20, 20, 0.7)";
              document.querySelector("img.shade").style.boxShadow =
                "-6px -6px 12px rgba(120, 120, 120, 0.7), 9px 9px 16px rgba(20, 20, 20, 0.7)";
            }
            function lightEnter(e) {
              e.target.style.boxShadow =
                "-3px -3px 9px rgb(255, 255, 255), 3px 3px 9px rgb(151, 151, 151)";
              document.querySelector("img.shade").style.boxShadow =
                "-3px -3px 9px rgb(255, 255, 255), 3px 3px 9px rgb(151, 151, 151)";
            }
            function lightLeave(e) {
              e.target.style.boxShadow =
                "-9px -9px 16px rgba(255, 255, 255, 0.7), 9px 9px 16px rgba(151, 151, 151, 0.7)";
              document.querySelector("img.shade").style.boxShadow =
                "-9px -9px 16px rgba(255, 255, 255, 0.7), 9px 9px 16px rgba(151, 151, 151, 0.7)";
            }

            if (check) {
              bd.style.background = "#323232";
              bd.style.color = "#dddddd";
              document.querySelector(".card").style.boxShadow =
                "-6px -6px 12px rgba(120, 120, 120, 0.7), 9px 9px 16px rgba(20, 20, 20, 0.7)";
              document.querySelector("img.shade").style.boxShadow =
                "-6px -6px 12px rgba(120, 120, 120, 0.7), 9px 9px 16px rgba(20, 20, 20, 0.7)";

              // RemoveEventListener
              card.removeEventListener("mouseenter", lightEnter);
              card.removeEventListener("mouseleave", lightLeave);

              // AddEventListener
              card.addEventListener("mouseenter", darkEnter);
              card.addEventListener("mouseleave", darkLeave);

              document.querySelector(".cover").classList.add("cover-dark");
            } else {
              bd.style.background = "#efeeee";
              bd.style.color = "rgb(63, 63, 63)";
              document.querySelector(".card").style.boxShadow =
                "-9px -9px 16px rgba(255, 255, 255, 0.7), 9px 9px 16px rgba(151, 151, 151, 0.7)";

              // RemoveEventListener
              card.removeEventListener("mouseenter", lightEnter);
              card.removeEventListener("mouseleave", lightLeave);

              // AddEventListener
              card.addEventListener("mouseenter", lightEnter);
              card.addEventListener("mouseleave", lightLeave);

              document.querySelector("img.shade").style.boxShadow =
                "-9px -9px 16px rgba(255, 255, 255, 0.7), 9px 9px 16px rgba(151, 151, 151, 0.7)";
              document.querySelector(".cover").classList.remove("cover-dark");
            }

            setCheck(!check);
          }}
        />
      </div>
      <img src={moon} alt="moon" className="weather-icon moon" />
      <img src={sun} alt="sun" className="weather-icon sun" />
      <div className="cover"></div>
    </section>
  );
}

export default Theme;
