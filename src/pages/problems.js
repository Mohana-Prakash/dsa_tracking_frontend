import { useState, useEffect } from "react";
import { getProblems } from "../services/api";
import Modal from "../components/modal";
import ProblemComp from "../components/problemComp";
import moment from "moment";

export default function Problems() {
  const [showPopup, setShowPopup] = useState({
    title: "",
    isOpen: false,
  });
  const [searchTerm, setSearchTerm] = useState("");
  const [problems, setProblems] = useState([]);
  const [page, setPage] = useState(1);
  const [size] = useState(20);
  const [totalPages, setTotalPages] = useState(1);

  const fetchProblems = async () => {
    try {
      const res = await getProblems(page, size, searchTerm);
      setProblems(res.data);
      setTotalPages(res.totalPages);
    } catch (err) {
      console.error("Error in fetchProblems:", err);
    }
  };

  useEffect(() => {
    fetchProblems();
  }, [page]);

  const modalCloseHandler = () => {
    setShowPopup({
      isOpen: false,
      title: "",
      problemId: null,
    });
  };

  return (
    <>
      <div className="problems-header">
        <p className="problems-title">DSA Notes Tracker</p>
        <button
          className="add-problem-btn"
          onClick={() =>
            setShowPopup({
              isOpen: true,
              title: "add",
              problemId: null,
            })
          }
        >
          Add Problem
        </button>
      </div>

      <div className="problems-container">
        <div className="filter-section">
          <div className="search-section">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search Problem"
              className="search-input"
            />
            <button onClick={fetchProblems} className="search-btn">
              Search
            </button>
          </div>
          <div>
            <button
              disabled={page <= 1}
              onClick={() => setPage(page - 1)}
              className="page-btn"
            >
              Prev
            </button>
            <span className="page-info">
              Page {page} / {totalPages}
            </span>
            <button
              disabled={page >= totalPages}
              onClick={() => setPage(page + 1)}
              className="page-btn"
            >
              Next
            </button>
          </div>
        </div>

        <div className="cards-wrapper">
          {problems.map((p) => (
            <div key={p._id} className="problem-card">
              <p className="problem-card-title">{p.title}</p>
              <div className="problem-card-body">
                <p>
                  <span>Leetcode:</span> {p.leetCodeNo}
                </p>
                <p>
                  Pattern: <span className="problem-pattern">{p.pattern}</span>
                </p>
                <p>Created at: {moment(p.createdAt).format("MMMM Do, YYYY")}</p>
                <p
                  className="view-link"
                  onClick={() =>
                    setShowPopup({
                      isOpen: true,
                      title: "viewUpdate",
                      problemId: p._id,
                    })
                  }
                >
                  View / Update
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {showPopup.isOpen && (
        <Modal
          isOpen={showPopup}
          onClose={modalCloseHandler}
          title={
            showPopup.title === "add" ? "Add Problem" : "View / Update Problem"
          }
        >
          <ProblemComp modalData={showPopup} setShowPopup={setShowPopup} />
        </Modal>
      )}
    </>
  );
}
