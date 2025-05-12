import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>{count} well it is nice</div>
    </>
  );
}

export default App;
