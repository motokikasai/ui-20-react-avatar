import React from "react";
import Theme from "../theme";
import PropTypes from "prop-types";

function Avatar({ src, size = "m", type = "square" }) {
  return (
    <section>
      <Theme />

      <h1>Customizable Avatar</h1>
      <main>
        <div className="card">
          <img
            src={src}
            className={`shade ${size} ${type}`}
            alt="from lorempicsum"
          />
          <p>
            Size <b>{size}</b> with
            <b>
              <span id={size}></span>
            </b>
          </p>
          <p>
            Type <b>{type}</b>
          </p>
        </div>
      </main>
    </section>
  );
}

Avatar.propTypes = {
  src: PropTypes.string,
  size: PropTypes.oneOf(["s", "m", "l"]),
  type: PropTypes.string
};

export default Avatar;
