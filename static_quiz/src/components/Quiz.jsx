import React, { Component } from 'react'
import "./qiuzStyle.css"

export default class Quiz extends Component {
  render() {
    return (
      <div className='outerDiv'>
        <div className='mainDiv' id='QuizDiv'>
            <h1 className='blackcolor'>Question</h1>
            <p id='questionNo' className='blackcolor' >1 0f 15</p>
            <p className='blackcolor'>Which is the only Monkey who can speek ?</p>
            <div className="optionsColumns">
                <div className="options">Ananya</div>
                <div className="options">Satyam</div>
                <div className="options">Abhinandan</div>
                <div className="options">Swasti</div>
            </div>
            <div className='bottonButton'>
                <button>Present</button>
                <button>Next</button>
                <button>Quit</button>
            </div>
        </div>
      </div>
    )
  }
}
