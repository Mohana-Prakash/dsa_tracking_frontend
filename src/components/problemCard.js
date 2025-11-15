import { useState } from "react";
import moment from "moment";
import { MoreVertical } from "lucide-react";

export default function ProblemCard({
  data,
  setShowPopup,
  deleteHandler,
  isAdmin,
}) {
  const [open, setOpen] = useState(false);

  const confirmDelete = () => {
    if (window.confirm("Are you sure you want to delete this problem?")) {
      deleteHandler(data._id);
    }
  };

  return (
    <div
      key={data._id}
      className="
        w-full sm:w-[48%] lg:w-[23%] p-5 
        rounded-2xl border border-gray-200 
        bg-gradient-to-br from-sky-50 via-white to-teal-50
        shadow-md hover:shadow-xl
        transition-all duration-200
      "
    >
      {/* Header */}
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-base font-semibold tracking-wide text-slate-700">
          {data.title}
        </h3>

        {/* Dropdown */}
        <div className="relative">
          <button
            onClick={() => setOpen(!open)}
            className="p-2 rounded-full hover:bg-sky-300 transition bg-sky-100"
          >
            <MoreVertical className="w-5 h-5 text-slate-600 hover:text-white" />
          </button>

          {open && (
            <div className="absolute right-0 mt-2 w-36 bg-rose-50 shadow-xl border border-rose-400 z-30 transition rounded-lg overflow-hidden">
              <button
                className="text-center w-full text-left px-4 py-2 hover:bg-rose-500 text-black hover:text-white"
                onClick={() =>
                  setShowPopup({
                    isOpen: true,
                    title: "view",
                    problemId: data._id,
                  })
                }
              >
                VIEW
              </button>
              {isAdmin && (
                <>
                  <button
                    className="text-center w-full text-left px-4 py-2 hover:bg-rose-500 text-black hover:text-white"
                    onClick={() =>
                      setShowPopup({
                        isOpen: true,
                        title: "edit",
                        problemId: data._id,
                      })
                    }
                  >
                    EDIT
                  </button>
                  <button
                    className="text-center w-full text-left px-4 py-2 text-red-700 font-bold"
                    onClick={confirmDelete}
                  >
                    DELETE
                  </button>
                </>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Body */}
      <div className="space-y-3 text-sm text-slate-700">
        <p>
          <span className="font-medium text-sky-700">Leetcode:</span>{" "}
          <span className="text-slate-800">{data.leetCodeNo}</span>
        </p>

        <p>
          <span className="font-medium text-sky-700">Pattern:</span>{" "}
          <span className="text-slate-800">{data.pattern}</span>
        </p>

        <div className="flex items-center gap-2">
          <span className="font-medium text-sky-700">Level:</span>

          <span
            className={`px-2.5 py-0.5 rounded-full text-xs font-semibold border capitalize
              ${
                data.difficultyLevel === "hard"
                  ? "text-red-700 bg-red-100 border-red-300"
                  : data.difficultyLevel === "easy"
                  ? "text-green-700 bg-green-100 border-green-300"
                  : "text-yellow-700 bg-yellow-100 border-yellow-300"
              }`}
          >
            {data.difficultyLevel}
          </span>
        </div>

        <p>
          <span className="font-medium text-sky-700">Created:</span>{" "}
          <span className="text-slate-800">
            {moment(data.createdAt).format("MMM Do, YYYY HH:mm")}
          </span>
        </p>
      </div>
    </div>
  );
}
