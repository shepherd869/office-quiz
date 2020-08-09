import React, { Component } from 'react';
import { withRouter } from "react-router-dom";

class FinalResultsPage extends Component {
  handleClick = () => {
    const { nextPath, reset } = this.props;

    reset();
    this.props.history.push(nextPath);
  }

  render() {
    const { score, currentQuestionIndex } = this.props;

    return (
      <div className="results-page-container">
        
        <h1 className="heading-l fg-dark">Nice job, Tuna!</h1>

        <h2 className="heading-l fg-lt">
          Your final score is {`${score} out of ${currentQuestionIndex}`}
        </h2>

        <button
          onClick={this.handleClick}
          className="btn-main"
        >
          Try again
        </button>
      </div>
    );
  }
}

export default withRouter(FinalResultsPage);