import React from 'react';
import './App.css';
import Axiom from './Components/Axiom';
import Argument from './Components/Argument';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Axiom 
          sentence="We can know statements" 
          onChange={() => console.log("hello")}/>
        {/* <Argument 
          premises={[
            {type: "axiom", sentence: "dthi"}
          ]}
          conclusion={{sentence: ""}}/> */}
      </div>
    );
  }
}

export default App;
