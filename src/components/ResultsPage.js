import React, { Component } from 'react';
import { Link } from "react-router-dom";

class ResultsPage extends Component {

  componentDidMount() {
    window.scrollTo(0,0);
  }
  
  render() {
    const { score, currentQuestionIndex, lastAnswerText, nextPath } = this.props;

    return (
      <div className="results-page-container">
        
        <h1 className="heading-l fg-dark">{lastAnswerText}</h1>

        <h2 className="heading-l fg-lt">
          Your current score is {`${score} out of ${currentQuestionIndex}`}
        </h2>

        <Link
          to={nextPath}
          className="btn-main"
        >
          Next Question
        </Link>
      </div>
    );
  }
}

export default ResultsPage;