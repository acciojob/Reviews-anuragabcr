import React from "react";

function Review({ review, handleClick }) {
    return (
        <div className="review">
            <p className="author" id={"author-" + review.id}>Author: {review.name}</p>
            <p className="job">Job: {review.job}</p>
            <p className="info">Info: {review.text}</p>
            <img className="person-img" style={{height: '400px'}} src={review.image} />
            <button className="prev-btn" onClick={() => handleClick(0)}>Previous Review</button>    
            <button className="random-btn" onClick={() => handleClick(1)}>surprise me</button>    
            <button className="next-btn" onClick={() => handleClick(2)}>Next Review</button>  
        </div>
    )
}

export default Review