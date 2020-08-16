import React from "react";
import "./styles/styles.css";

class App extends React.Component {
  render() {
    return (
      <div>
        <div className="App">
          <div className="App__top"></div>
          <div className="App__main">main</div>
          <div className="App__bottom">bottom</div>
        </div>
      </div>
    );
  }
}
export default App;
