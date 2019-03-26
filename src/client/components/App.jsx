import React, { Component } from 'react'
import P5Wrapper from 'react-p5-wrapper'
import '../main.css'
// import Sketchone from './Sketchone'
import Sketchtwo from './Sketchtwo'

class App extends Component {
  render() {
    return (
      <div>
        <h1>React.js with P5 </h1>
        {/* <P5Wrapper className="sketch" sketch={Sketchone} /> */}
        <P5Wrapper className="sketch" sketch={Sketchtwo} />
      </div>
    )
  }
}

export default App
