import React from "react";
import "./styles/styles.css";

class App extends React.Component {
  render() {
    return (
      <div>
        <div className="App">
          <div className="App__top">
            <div className="App__top__col1">top</div>
          </div>
          <div className="App__main"></div>
          <div className="App__bottom"></div>
        </div>
      </div>
    );
  }
}
export default App;
