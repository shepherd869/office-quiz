import React, { Component } from 'react';
import '../styles/index.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import banner_img from '../img/banner.jpg';
import dwight from '../img/dwight.jpg';
import party from '../img/party.jpg';
import michael_scott from '../img/michael-scott.jpeg';
import kevin from '../img/kevin.png';
import cod from '../img/cod.png';
import QuestionPage from './QuestionPage';
import ResultsPage from './ResultsPage';
import FinalResultsPage from './FinalResultsPage';

const dataObj = [
  {
    question: 'The casting team originally wanted who to audition for the role of Dwight?',
    possibleAnswers: ['Steve Carell', 'John Krasinski', 'B.J. Novak', 'Ed Helms'],
    correctAnswer: 'John Krasinski',
    img: dwight
  },
  {
    question: 'Who are the three main members of the party planning committee?',
    possibleAnswers: [
      'Karen, Angela, and Kelly', 
      'Pam, Meredith, and Holly', 
      'Phyllis, Angela, and Pam', 
      'Pam, Phyllis, and Karen'
    ],
    correctAnswer: 'Phyllis, Angela, and Pam',
    img: party
  },
  {
    question: 'Who does Michael wear on his head during the activity on diversity day?',
    possibleAnswers: ['Martin Luther King Jr.', 'Wayne Gretzky', 'Stanley', 'Ghandi'],
    correctAnswer: 'Martin Luther King Jr.',
    img: michael_scott
  },
  {
    question: 'At Jim and Pam’s wedding in the “Niagara” episode, what was Kevin wearing on his feet?',
    possibleAnswers: ['Rollerblades', 'Ski boots', 'Sandals', 'Tissue boxes'],
    correctAnswer: 'Tissue boxes',
    img: kevin
  },
  {
    question: 'In the episode “The Coup”, the members of the Stamford branch play what video game with each other?',
    possibleAnswers: ['Call of Duty', 'Battlefield 1942', 'Unreal Tournament', 'Quake 3'],
    correctAnswer: 'Call of Duty',
    img: cod
  }
];

class Main extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      currentQuestionIndex: 0,
      lastAnswerText: null,
      score: 0
    }
  }

  reset = () => {
    this.setState({
      currentQuestionIndex: 0,
      lastAnswerText: null,
      score: 0
    });
  }

  setScore = (isCorrect) => {
    const { currentQuestionIndex, score } = this.state;

    if (isCorrect) {
      this.setState({ 
        currentQuestionIndex: currentQuestionIndex + 1,
        score: score + 1,
        lastAnswerText: 'Correct!'
      })
    } else {
      this.setState({ 
        currentQuestionIndex: currentQuestionIndex + 1,
        lastAnswerText: 'Wrong!'
      })
    }
  }
  
  render() {
    const { currentQuestionIndex, score, lastAnswerText } = this.state;

    return (
      <Router>
        <div className="main-container">
          <Switch>
            
            <Route exact path="/">
              <StartPage />
            </Route>

            <Route exact path="/question-1">
              <QuestionPage 
                question={dataObj[0].question}
                possibleAnswers={dataObj[0].possibleAnswers}
                correctAnswer={dataObj[0].correctAnswer}
                img={dataObj[0].img}
                setScore={this.setScore}
                nextPath="/question-1-results"
              />
            </Route>

            <Route exact path="/question-1-results">
              <ResultsPage 
                currentQuestionIndex={currentQuestionIndex}
                score={score}
                lastAnswerText={lastAnswerText}
                nextPath="/question-2"
              />
            </Route>

            <Route exact path="/question-2">
              <QuestionPage 
                question={dataObj[1].question}
                possibleAnswers={dataObj[1].possibleAnswers}
                correctAnswer={dataObj[1].correctAnswer}
                img={dataObj[1].img}
                setScore={this.setScore}
                nextPath="/question-2-results"
              />
            </Route>

            <Route exact path="/question-2-results">
              <ResultsPage 
                currentQuestionIndex={currentQuestionIndex}
                score={score}
                lastAnswerText={lastAnswerText}
                nextPath="/question-3"
              />
            </Route>

            <Route exact path="/question-3">
              <QuestionPage 
                question={dataObj[2].question}
                possibleAnswers={dataObj[2].possibleAnswers}
                correctAnswer={dataObj[2].correctAnswer}
                img={dataObj[2].img}
                setScore={this.setScore}
                nextPath="/question-3-results"
              />
            </Route>

            <Route exact path="/question-3-results">
              <ResultsPage 
                currentQuestionIndex={currentQuestionIndex}
                score={score}
                lastAnswerText={lastAnswerText}
                nextPath="/question-4"
              />
            </Route>

            <Route exact path="/question-4">
              <QuestionPage
                question={dataObj[3].question}
                possibleAnswers={dataObj[3].possibleAnswers}
                correctAnswer={dataObj[3].correctAnswer}
                img={dataObj[3].img}
                setScore={this.setScore}
                nextPath="/question-4-results"
              />
            </Route>

            <Route exact path="/question-4-results">
              <ResultsPage 
                currentQuestionIndex={currentQuestionIndex}
                score={score}
                lastAnswerText={lastAnswerText}
                nextPath="/question-5"
              />
            </Route>

            <Route exact path="/question-5">
              <QuestionPage
                questions={dataObj[4].question}
                possibleAnswers={dataObj[4].possibleAnswers}
                correctAnswer={dataObj[4].correctAnswer}
                img={dataObj[4].img}
                setScore={this.setScore}
                nextPath="/final-results"
              />
            </Route>

            <Route exact path="/final-results">
              <FinalResultsPage 
                currentQuestionIndex={currentQuestionIndex}
                score={score}
                reset={this.reset}
                nextPath="/"
              />
            </Route>
            
          </Switch>
        </div>
      </Router>
    );
  }
}

export default Main;

function StartPage() {
  return (
    <div className="start-page-container">
      <h1 className="heading-l fg-white">The Office Trivia</h1>
      <h2 className="heading-m fg-dark">
        Test your knowledge about the show <span className=" heading-m fg-white">The Office.</span>
      </h2>

      <div className="image-container">
        <img src={banner_img} alt="the-office-banner" />
      </div>

      <Link 
        className="btn-main"
        to="question-1"
      >
        Start
      </Link>
    </div>
  );
}