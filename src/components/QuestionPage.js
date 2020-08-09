import React, { Component } from 'react';
import { withRouter } from "react-router-dom";

class QuestionPage extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      selectedAnswer: null
    }
  }

  componentDidMount() {
    window.scrollTo(0,0);
  }

  onValueChange = (value) => {
    this.setState({
      selectedAnswer: value
    });
  }

  handleClick = () => {
    const { correctAnswer, setScore, nextPath } = this.props;
    const { selectedAnswer } = this.state;
    const isCorrect = selectedAnswer === correctAnswer;

    setScore(isCorrect);
    this.props.history.push(nextPath);
  }
  
  render() {
    const { question, possibleAnswers, img, nextPath } = this.props;

    return (
      <div className="question-page-container">
        
        <div className="image-container">
          <img src={img} alt="office" />
        </div>

        <form>
          <legend className="question-text heading-m">{question}</legend>

          <ul className="answer-list">
            {possibleAnswers.map((answer, i) => {
              const key = `answer-${i}`;
              const isSelected = this.state.selectedAnswer === answer;

              return (
                <li className="list-item" key={key}>
                  <label 
                    id={key}
                    className={isSelected ? 'selected' : null}
                  >
                    <input 
                      type="radio" 
                      htmlFor={key}
                      checked={isSelected}
                      onChange={() => this.onValueChange(answer)}
                    />
                    <span>{answer}</span>
                  </label>
                </li>
              )
            })}
          </ul>
        </form>
        <button
          onClick={this.handleClick}
          className="submit-btn"
        >
          Submit
        </button>
      </div>
    );
  }
}

export default withRouter(QuestionPage);