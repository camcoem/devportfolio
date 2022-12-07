import React from "react";

export default function Card(props) {
  return (
    <>
      <div className="cards">
        <div className="imgCardTodo"></div>
        <h2>{props.name}</h2>
        <p>
          {props.description}
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s
        </p>
        <div className="readmore">
          <span className="spanBtn">
            <a href="#" className="readMoreLink">
              <button className="btn">Read more</button>
            </a>
          </span>
        </div>
      </div>
    </>
  );
}
