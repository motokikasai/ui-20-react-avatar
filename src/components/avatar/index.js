import React from "react";
import Theme from "../theme";

function Avatar({ src, size = "m", type = "rounded" }) {
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

export default Avatar;
