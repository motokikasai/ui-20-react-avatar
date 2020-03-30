import React from "react";
import "./styles/App.css";

import Avatar from "./components/avatar";

function App() {
  return (
    <div className="App">
      <Avatar src="https://picsum.photos/400/400" size="xl" type="rounded" />
    </div>
  );
}

export default App;
