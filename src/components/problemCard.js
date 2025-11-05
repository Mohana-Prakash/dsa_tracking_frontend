import React from "react";
import moment from "moment";

function ProblemCard({ data, setShowPopup, deleteHandler }) {
  return (
    <div key={data._id} className="problem-card">
      <p className="problem-card-title">{data.title}</p>
      <div className="problem-card-body">
        <p>
          <span>Leetcode:</span> {data.leetCodeNo}
        </p>
        <p>
          Pattern: <span className="problem-pattern">{data.pattern}</span>
        </p>
        <p>
          Difficult Level:{" "}
          <span
            className={`problem-pattern difficulty-badge ${data.difficultyLevel}`}
          >
            {data.difficultyLevel}
          </span>
        </p>
        <p>Created at: {moment(data.createdAt).format("MMMM Do, YYYY")}</p>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <button
            className="view-update-btn"
            onClick={() =>
              setShowPopup({
                isOpen: true,
                title: "viewUpdate",
                problemId: data._id,
              })
            }
          >
            View / Update
          </button>
          <button
            className="delete-btn"
            onClick={() => deleteHandler(data._id)}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProblemCard;
