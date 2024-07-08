import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Button } from "./components/ui/button";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1 className="text-red-400 font-bold">Subscribe</h1>
      <Button>Subscribe</Button>
    </>
  );
}

export default App;
