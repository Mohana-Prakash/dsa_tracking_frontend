import { useState, useEffect } from "react";
import { deleteProblem, getProblems } from "../services/api";
import Modal from "../components/modal";
import AddEditProblemComp from "../components/addEditProblemComp";
import { toast } from "react-toastify";
import ProblemCard from "../components/problemCard";
import ViewProblemComp from "../components/viewProblemComp";
import Header from "../components/header";

export default function Problems() {
  const [isAdmin, setIsAdmin] = useState(!!localStorage.getItem("adminToken"));
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
    if (!alert("Are you sure you want to delete this problem?")) return;

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
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="w-12 h-12 border-4 border-blue-400 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <>
      {/* Header */}
      <Header
        setShowPopup={setShowPopup}
        setIsAdmin={setIsAdmin}
        isAdmin={isAdmin}
      />

      {/* Search + Pagination */}
      <div className="p-5">
        <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
          {/* Search */}
          <div className="flex items-center w-full md:w-1/2 gap-2">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search Problem"
              className="border border-rose-300 rounded-md px-3 py-2 w-full outline-none text-gray-700"
            />
            <button
              onClick={fetchProblems}
              className="px-4 py-2 border border-rose-300 rounded-md bg-rose-600 text-white transition hover:bg-rose-500"
            >
              Search
            </button>
          </div>

          {/* Pagination */}
          <div className="flex items-center gap-3">
            <button
              disabled={page <= 1}
              onClick={() => setPage(page - 1)}
              className="px-3 py-1 border border-rose-300 bg-rose-600 text-white rounded-md disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Prev
            </button>

            <span className="text-white">
              Page {page} / {totalPages}
            </span>

            <button
              disabled={page >= totalPages}
              onClick={() => setPage(page + 1)}
              className="px-3 py-1 border border-rose-300 bg-rose-600 text-white rounded-md disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Next
            </button>
          </div>
        </div>

        {/* Cards */}
        <div className="flex flex-wrap gap-5">
          {problems.length === 0 ? (
            <p className="text-gray-600 text-lg text-center w-full">
              No problems found.
            </p>
          ) : (
            problems.map((p) => (
              <ProblemCard
                key={p._id}
                data={p}
                setShowPopup={setShowPopup}
                deleteHandler={deleteHandler}
                isAdmin={isAdmin}
              />
            ))
          )}
        </div>
      </div>

      {/* Modal */}
      {(showPopup.title === "add" || showPopup.title === "edit") && (
        <Modal
          isOpen={showPopup}
          onClose={modalCloseHandler}
          title={
            showPopup.title === "add" ? "Add Problem" : "View / Update Problem"
          }
        >
          <AddEditProblemComp
            modalData={showPopup}
            setShowPopup={setShowPopup}
            fetchProblems={fetchProblems}
          />
        </Modal>
      )}
      {showPopup.title === "view" && (
        <Modal isOpen={showPopup} onClose={modalCloseHandler}>
          <ViewProblemComp
            modalData={showPopup}
            setShowPopup={setShowPopup}
            fetchProblems={fetchProblems}
          />
        </Modal>
      )}
    </>
  );
}
