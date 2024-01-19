import React, { Component } from 'react'

export default class Result extends Component {
  render() {
    return (
      <div className='outerDiv'>
        <div className='mainDiv' id='resultMain'>
        <h1>Result</h1>
        <div className='resultCard'>
          <div className='practice'>
            <p>You need more practice</p>
          </div>
            <h1 className='practice'>Your score is 20%</h1>
            <div>
                <div className="resultData">
                    <span>Total number of question</span>
                    <span>15</span>
                </div>
                <div className="resultData">
                    <span>Number of attempted question</span>
                    <span>9</span>
                </div>
                <div className="resultData">
                    <span>Number of correct options</span>
                    <span>3</span>
                </div>
                <div className="resultData">
                    <span>Number of wrong answer</span>
                    <span>6</span>
                </div>
            </div>
        </div>
        <div >
            <button>Play Again</button>
            <button>Back To Home</button>
        </div>
        </div>
      </div>
    )
  }
}
