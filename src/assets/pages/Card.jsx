import React from "react";

function Card(props) {
  return (
    <div>
      <div onClick={props.card}>
        <div className="blog__card-div">
          <div className="case-study-card1  ">
            <img
              className="blog__card-div-img "
              src={props.image}
              width="100%"
              alt=""
            />
          </div>
          <div
            id="blog__card-lable"
            className={`${props.cardbodycss} blog_card-author-details`}
          >
            <label htmlFor="blog__card-lable" className="blog__card-lable">
              {props.lable}
            </label>
            <h1 className={`${props.textClass} text-start`}>{props.title}</h1>
            <div className="blog__card-date-time">
              <p className={props.textClass}>{props.writer}</p>
              <p className={props.textClass}>Posted by: {props.publishdate}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
