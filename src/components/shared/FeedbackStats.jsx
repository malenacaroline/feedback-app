import React, { useContext } from "react";
import FeedbackContext from "../../context/FeedbackContext";

function FeedbackStats() {
  const { feedback } = useContext(FeedbackContext);

  // Calculate ratings avg
  let average =
    feedback.reduce((sum, current) => {
      return (sum += current.rating);
    }, 0) / feedback.length;

  //Regex replaces any 0 for nothing, ex.: 8.0 = 8
  average = average.toFixed(1).replace(/[.,]0$/, "");

  return (
    <div className="feedback-stats">
      <h4>{feedback.length} Reviews</h4>
      <h4>Average Rating: {isNaN(average) ? 0 : average}</h4>
    </div>
  );
}

export default FeedbackStats;
