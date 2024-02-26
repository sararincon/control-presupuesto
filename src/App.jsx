import { useState } from "react";
import Header from "./components/Header";

function App() {
  const [presupuesto, setPresupuesto] = useState(0);

  return (
    <h1>
      <Header presupuesto={presupuesto} setPresupuesto={setPresupuesto} />
    </h1>
  );
}

export default App;
