import React, { useEffect, useState } from "react";
import Iframe from "react-iframe";

const IframePage = ({ src, modelName }) => {
  const [showQuestion, setShowQuestion] = useState(false);
  const [msgFromIframe, setMsgFromIframe] = useState(null);
  const toggleShowQuestion = () => {
    setShowQuestion((curr) => !curr);
  };

  useEffect(() => {
    window.addEventListener("message", (e) => {
      if (e.data && e.data.from === "iframe") {
        setMsgFromIframe(e.data.msg);
      }
    });
  }, []);
  return (
    <>
      <p>AR.js embbeded in React app by iframe</p>
      {msgFromIframe && <span>Msg from iframe: {msgFromIframe}</span>}
      <div id="iframe-container">
        <div id="question" className={showQuestion ? "show" : ""}>
          <p>Question 1.</p>
          <p>How many moons does mars has?</p>
          <div className="answer-button-wrapper">
            {Array(4)
              .fill()
              .map((n, i) => {
                return (
                  <button key={i} className="answer-button button" type="input">
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

        <Iframe
          id="iframe"
          src={modelName ? `${src}?model=${modelName}` : src}
        />
      </div>
    </>
  );
};

export default IframePage;
