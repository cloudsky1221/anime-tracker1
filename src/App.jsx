import { useState } from "react";
import "./App.css";
import RankPage from "./Pages/RankPage/RankPage";
import Favorite from "./Pages/Favorite/Favorite";

function App() {
  const [look, setLook] = useState(false);
  return (
    <div id="App">
      <Favorite />
      {look && <RankPage />}
    </div>
  );
}

export default App;
