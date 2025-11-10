import moment from "moment";

function ProblemCard({ data, setShowPopup, deleteHandler }) {
  return (
    <div key={data._id} className="problem-card">
      <p className="problem-card-title">{data.title}</p>
      <div className="problem-card-body">
        <p>
          Leetcode: <span>{data.leetCodeNo}</span>
        </p>
        <p>
          Pattern: <span>{data.pattern}</span>
        </p>
        <p>
          Difficult Level:{" "}
          <span className={`difficulty-badge ${data.difficultyLevel}`}>
            {data.difficultyLevel}
          </span>
        </p>
        <p>
          Created at:{" "}
          <span>{moment(data.createdAt).format("MMM Do, YYYY HH:mm")}</span>
        </p>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "15px",
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
