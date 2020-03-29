import React from "react";
import sun from "../../assets/sun.svg";
import moon from "../../assets/moon.svg";

function Theme() {
  // Theme Switcher callback function

  const themeSwitcher = () => {
    // if (checkbox.checked) {
    //   container.classList.add("container-dark");
    //   header.classList.add("header-dark");
    //   iconCover.style.right = "34px";
    //   iconCover.classList.add("cover-dark");
    // } else {
    //   container.classList.remove("container-dark");
    //   header.classList.remove("header-dark");
    //   iconCover.style.right = "80px";
    //   iconCover.classList.remove("cover-dark");
    console.log("checked");

    // }
  };

  // Add Change Event to theme switcher button/input
  //   checkbox.addEventListener("change", themeSwitcher);

  return (
    <section className="theme-changer">
      <div className="input-bar">
        <input
          type="checkbox"
          name="theme"
          id="checkbox"
          className="checkbox"
          onClick={themeSwitcher}
          checked={true}
        />
      </div>
      <img src={moon} alt="moon" className="weather-icon moon" />
      <img src={sun} alt="sun" className="weather-icon sun" />
      <div className="cover"></div>
    </section>
  );
}

export default Theme;
