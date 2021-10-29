import React, { useState } from "react";
import Iframe from "react-iframe";

const IframePage = ({ src }) => {
  const [showQuestion, setShowQuestion] = useState(false);
  const toggleShowQuestion = () => {
    setShowQuestion((curr) => !curr);
  };

  return (
    <>
      <p>AR.js embbeded in React app by iframe</p>
      <div id="iframe-container">
        <div id="question" className={showQuestion && "show"}>
          <p>Question 1.</p>
          <p>How many moons does mars has?</p>
          <div className="answer-button-wrapper">
            {Array(4)
              .fill()
              .map((n, i) => {
                return (
                  <button className="answer-button button" type="input">
                    {i}
                  </button>
                );
              })}
          </div>
          <button
            className="button show-question-button"
            onClick={toggleShowQuestion}
          >
            Show
            <br />
            Quiz
          </button>
        </div>

        <Iframe id="iframe" src={src} />
      </div>
    </>
  );
};

export default IframePage;
