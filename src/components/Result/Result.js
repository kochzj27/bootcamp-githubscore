import React from 'react';
import './Result.css';

const Result = (props) => {

  var score = props.score;
  let settings = props.settings;

  let msgObj = settings.filter(function (item) {
    return (score > item.min && score < item.max) || (score > item.min && item.max === null);
  });

  console.log(msgObj)

  return (
    <div className="result">
      {props.score !== -1 ?
        <div>
          <h1>Your Score: {props.score}</h1>
          {msgObj[0] ? <h3 style={{ color: `${msgObj[0].color}` }}> {msgObj[0].msg}</h3> : null}
        </div>
        :
        <div>
          <h1>User does not exist, pick a different GitHub username.</h1>
        </div>
      }
    </div>
  );
}


export default Result;