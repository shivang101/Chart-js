import BarChart from "./components/BarChart";
import LineChart from "./components/LineChart";
import { useState } from "react";
import { UserData } from "./Data";

function App() {

const [cd, setChartData] = useState({

  labels: UserData.map((item) => item.year),
  datasets: [{
    label: "User Gain",
    data: UserData.map((item) => item.userGain),
    backgroundColor: "rgba(255, 99, 132, 0.2)",
    borderColor: "rgba(255, 99, 132, 1)",
    borderWidth: 1,
  }]
})


const [lc, setLCData] = useState({

  labels: UserData.map((item) => item.year),
  datasets: [{
    label: "User lost",
    data: UserData.map((item) => item.userLost),
    backgroundColor: "rgba(255, 99, 132, 0.2)",
    borderColor: "rgba(255, 99, 132, 1)",
    borderWidth: 1,
  }]
})

  return (
    <>
    <h1 className="text-3xl font-bold underline">
    Hello world!
  </h1>
  <div className="w-2/4">
  < BarChart chartValues={cd} />
  < LineChart chartValues={lc} />

  </div>
    </>
  );
}

export default App;
