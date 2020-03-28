import React from "react";

function Avatar(props) {
  return (
    <section>
      <h1>hello world</h1>
      <div className="source">
        <img src={props.src} alt="from lorempicsum" />
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
