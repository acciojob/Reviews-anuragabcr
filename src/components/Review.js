import React from "react";

function Review({ review }) {
    return (
        <div className="review">
            <p className="author" id={"author-" + review.id}>Author: {review.name}</p>
            <p className="job">Job: {review.job}</p>
            <p className="info">Info: {review.text}</p>
            <img className="person-img" style={{height: '400px'}} src={review.image} />
        </div>
    )
}

export default Review