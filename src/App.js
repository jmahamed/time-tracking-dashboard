import "./App.css";
import Card from "./Card";
import CardMonth from "./CardMonth";
import data from "./data.json";
import { useState } from "react";
import CardDaily from "./CardDaily";

function App() {
  const [currentView, setCurrentView] = useState("Weekly");

  const handleViewChange = (view) => {
    setCurrentView(view);
  };

  return (
    <div className="App">
      <div className="profile">
        <div className="profile-image">
          <img src="./image-jeremy.png" width={64} alt="" />
          <div className="profile-title">
            <p>Report for</p>
            <span>Jeremy Robson</span>
          </div>
        </div>
        <div className="profile-body">
          <div className="profile-text">
            <span onClick={() => handleViewChange("Daily")}  id={currentView === 'Daily' ? 'current-view' : ''}>Daily</span>
            <span onClick={() => handleViewChange("Weekly")} id={currentView === 'Weekly' ? 'current-view' : ''}>Weekly</span>
            <span onClick={() => handleViewChange("Monthly")} id={currentView === 'Monthly' ? 'current-view' : ''}>Monthly</span>
          </div>
        </div>
      </div>
      {data.map((item, index) => {
        if (currentView === "Monthly")  {
          return ( 
            <CardMonth
            key={index}
            imageUrl={`./${item.title.toLowerCase()}.png`}
            title={item.title}
            presentHours={`${item.timeframes.monthly.current}hrs`}
            lastHours={`Last Month - ${item.timeframes.monthly.previous}hrs`}
            backgroundColor={getBackgroundColor(item.title)}
          />
          );
         } else if  (currentView === 'Daily') {
          return (
          <CardDaily
            key={index}
            imageUrl={`./${item.title.toLowerCase()}.png`}
            title={item.title}
            presentHours={`${item.timeframes.daily.current}hrs`}
            lastHours={`Yesterday - ${item.timeframes.daily.previous}hrs`}
            backgroundColor={getBackgroundColor(item.title)}
          />
          );
         } else if (currentView === 'Weekly') {
          return (
            <Card
            key={index}
            imageUrl={`./${item.title.toLowerCase()}.png`}
            title={item.title}
            presentHours={`${item.timeframes.weekly.current}hrs`}
            lastHours={`Last Week - ${item.timeframes.weekly.previous}hrs`}
            backgroundColor={getBackgroundColor(item.title)}
          />
          );
         }
      })}
    </div>
  );
}

function getBackgroundColor(title) {
  switch (title.toLowerCase()) {
    case "work":
      return "#FF8B64";
    case "play":
      return "#55C2E6";
    case "study":
      return "#FF5E7D";
    case "exercise":
      return "#4BCF82";
    case "social":
      return "#7335D2";
    case "self-care":
      return "#F1C75B";
    default:
      return "#FFFFFF";
  }
}

export default App;
