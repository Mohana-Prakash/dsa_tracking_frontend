import { useEffect, useState } from "react";
import { getProblemById } from "../services/api";
import moment from "moment";
import CodeEditor from "./codeViewer";

export default function ViewProblemComp({ modalData }) {
  const [problem, setProblem] = useState(null);

  const fetchProblem = async () => {
    try {
      const { data } = await getProblemById(modalData.problemId);
      setProblem(data);
    } catch (err) {
      console.error("Error fetching problem:", err);
    }
  };

  useEffect(() => {
    if (modalData.problemId) fetchProblem();
  }, [modalData.problemId]);

  if (!problem) return <p className="text-gray-600">Loading...</p>;

  return (
    <div>
      {/* Title */}
      <h2 className="text-2xl font-bold text-slate-800 mb-4 border-b pb-2">
        {problem.title}
      </h2>

      {/* Info Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm text-gray-700">
        <InfoCard label="LeetCode No" value={problem.leetCodeNo} />

        <InfoCard
          label="Difficulty"
          value={problem.difficultyLevel}
          badge={true}
        />

        <InfoCard label="Pattern" value={problem.pattern} />

        <InfoCard
          label="Created At"
          value={moment(problem.createdAt).format("MMM Do, YYYY HH:mm")}
        />
        <InfoCard label="Time Complexity" value={problem.timeComplexity} />
        <InfoCard label="Space Complexity" value={problem.spaceComplexity} />
      </div>

      {/* Content Sections */}
      <Section title="Idea" text={problem.idea} />
      <Section title="Steps" text={problem.steps} />

      <Section title="Other Info" text={problem.otherInfo} />

      {/* CODE BLOCK */}
      {problem.code && (
        <div className="mt-6">
          <h3 className="font-semibold text-rose-500 mb-2">Code</h3>
          <CodeEditor code={problem.code} isEditable={false} />
        </div>
      )}
    </div>
  );
}

/* ---------- Small Components ---------- */

function InfoCard({ label, value, badge }) {
  if (!value) return null;

  return (
    <div>
      <p className="font-semibold text-rose-500 mb-2">{label}:</p>

      {badge ? (
        <span
          className={`px-2 py-1 rounded-md text-xs border capitalize
            ${
              value === "hard"
                ? "text-red-700 bg-red-100 border-red-300"
                : value === "easy"
                ? "text-green-700 bg-green-100 border-green-300"
                : "text-yellow-700 bg-yellow-100 border-yellow-300"
            }
        `}
        >
          {value}
        </span>
      ) : (
        <p className="text-gray-800">{value}</p>
      )}
    </div>
  );
}

function Section({ title, text }) {
  if (!text) return null;

  return (
    <div className="">
      <h3 className="font-semibold text-rose-500 mb-2">{title}</h3>
      <p className="text-gray-800 whitespace-pre-wrap bg-white p-3 rounded-md shadow-sm border">
        {text}
      </p>
    </div>
  );
}
