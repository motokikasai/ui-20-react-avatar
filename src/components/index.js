import React from "react";

function Avatar({ src, size = "", type = "" }) {
  return (
    <section>
      <h1>Customizable Avatar</h1>
      <main>
        <div className="card">
          <img src={src} className={`${size} ${type}`} alt="from lorempicsum" />
          <p>
            Size <b>{size}</b> with 60x60
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
