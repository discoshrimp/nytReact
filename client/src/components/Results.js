import React from "react";

const Results = props => (
  <div className="container">
    <li className="list-group-item">
      <h4>
        <span>
          <em>{props.title}</em>
        </span>
        <span className="btn-group pull-right">
          <a href={props.url} rel="noopener noreferrer" target="_blank">
            <button className="btn btn-default ">View Article</button>
          </a>
            <button className='btn btn-default'>Save Article</button>
        </span>
      </h4>
    </li>
  </div>
);

export default Results;
