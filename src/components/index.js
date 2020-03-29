import React from "react";

function Avatar({ src, size = "", type = "" }) {
  const ratio = document.querySelector("aspect-ratio");
  return (
    <section>
      <h1>Customizable Avatar</h1>
      <main>
        <div className="card">
          <img src={src} className={`${size} ${type}`} alt="from lorempicsum" />
          <p>
            Size <b>{size}</b> with <span className="aspect-ratio">{}</span>
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
