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

            if (check) {
              bd.style.background = "#323232";
              bd.style.color = "#dddddd";
              document.querySelector(".card").style.boxShadow =
                "-6px -6px 12px rgba(120, 120, 120, 0.7), 9px 9px 16px rgba(20, 20, 20, 0.7)";
              document.querySelector("img.shade").style.boxShadow =
                "-5px -5px 12px rgba(120, 120, 120, 0.7), 9px 9px 16px rgba(20, 20, 20, 0.9)";
              document.querySelector(".cover").classList.add("cover-dark");
            } else {
              bd.style.background = "#efeeee";
              bd.style.color = "rgb(63, 63, 63)";
              document.querySelector(".card").style.boxShadow =
                "-9px -9px 16px rgba(255, 255, 255, 0.7), 9px 9px 16px rgba(151, 151, 151, 0.7)";
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
