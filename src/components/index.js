import React from "react";

function Avatar({ src, size = "", type = "" }) {
  return (
    <section>
      <h1>Customizable Avatar</h1>
      <div className="source">
        <img src={src} className={`size type`} alt="from lorempicsum" />
      </div>
      <p>
        Size <b>m</b> with 60x60
      </p>
      <p>
        Type <b>square</b>
      </p>
    </section>
  );
}

export default Avatar;
