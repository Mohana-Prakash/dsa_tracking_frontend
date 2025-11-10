import { useState, useEffect } from "react";
import { deleteProblem, getProblems } from "../services/api";
import Modal from "../components/modal";
import ProblemComp from "../components/problemComp";
import { toast } from "react-toastify";
import ProblemCard from "../components/problemCard";

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
  const [loading, setLoading] = useState(false);

  const fetchProblems = async () => {
    setLoading(true);
    try {
      const res = await getProblems(page, size, searchTerm);
      setProblems(res.data);
      setTotalPages(res.totalPages);
    } catch (err) {
      console.error("Error in fetchProblems:", err);
    } finally {
      setLoading(false);
    }
  };

  const deleteHandler = async (problemId) => {
    try {
      let res = await deleteProblem(problemId);
      if (res.status === 200) {
        toast.success("Problem deleted successfully");
        fetchProblems();
      }
    } catch (err) {
      toast.error(err.response?.data?.error || "Error deleting problem");
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

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <div className="problems-header">
        <p className="problems-title">DSA Problems Tracker</p>
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
          {problems.length === 0 ? (
            <p className="no-problems-text">No problems found.</p>
          ) : (
            problems.map((p) => (
              <ProblemCard
                data={p}
                setShowPopup={setShowPopup}
                deleteHandler={deleteHandler}
              />
            ))
          )}
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
          <ProblemComp
            modalData={showPopup}
            setShowPopup={setShowPopup}
            fetchProblems={fetchProblems}
          />
        </Modal>
      )}
    </>
  );
}
