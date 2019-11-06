//TODO: STEP 1 - Import the useState hook.
import React, {useState} from "react";
import "./App.css";
import TopRow from "./TopRow"
import BottomButtons from "./BottomButtons";
function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.
  const [homeScore, setHomeScore] = useState(0);
  const [awayScore, setAwayScore] = useState(0);
  return (
    <div>
      <TopRow homeScore = {homeScore} setHomeScore = {setHomeScore} awayScore = {awayScore} setAwayScore = {setAwayScore}/>
      <BottomButtons homeScore = {homeScore} setHomeScore = {setHomeScore} awayScore = {awayScore} setAwayScore = {setAwayScore}/>
    </div>
  );
}
export default App;
