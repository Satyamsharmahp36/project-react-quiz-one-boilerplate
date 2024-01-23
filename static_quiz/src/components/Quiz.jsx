import React, { Component } from 'react'
import OurData from "/resources/quizQuestion"

export default class Quiz extends Component {
  constructor() {
    super()
  
    this.state = {
       count: 0
    }
  }

  handleNext=()=>{
    this.setState({
      count : this.state.count>=14?this.state.count=1:this.state.count+1
    })
  }

  handleBack=()=>{
    this.setState({
      count: this.state.count<=1?this.state.count=14:this.state.count-1
    })
  }

  handleQuit=()=>{
    alert("You are Exiting the Game")
  }

  render() {
    return (
      <div className='outerDiv'>
        <div className='mainDiv' id='QuizDiv'>
            <h1 className='blackcolor'>Question</h1>
            <p id='questionNo' className='blackcolor' >{this.state.count+1} 0f 15</p>
            <p className='blackcolor'>{OurData[this.state.count].question}</p>
            <div className="optionsColumns">
                <div className="options">{OurData[this.state.count].optionA}</div>
                <div className="options">{OurData[this.state.count].optionB}</div>
                <div className="options">{OurData[this.state.count].optionC}</div>
                <div className="options">{OurData[this.state.count].optionD}</div>
            </div>
            <div className='bottonButton'>
                <button onClick={this.handleBack}>Back</button>
                <button onClick={this.handleNext}>Next</button>
                <button onClick={this.handleQuit}>Quit</button>
            </div>
        </div>
      </div>
    )
  }
}
