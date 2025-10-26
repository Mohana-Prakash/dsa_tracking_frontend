import React, { useState, useEffect } from "react";
import { createProblem, getProblemById, updateProblem } from "../services/api";
import { toast } from "react-toastify";
import CodeEditor from "./codeViewer";

export default function ProblemComp({ modalData, setShowPopup }) {
  const [formData, setFormData] = useState({
    title: "",
    leetCodeNo: "",
    pattern: "",
    idea: "",
    steps: "",
    timeComplexity: "",
    spaceComplexity: "",
    code: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await (modalData.title === "add"
        ? createProblem(formData)
        : updateProblem(modalData.problemId, formData));

      toast.success(
        `Problem ${
          modalData.title === "add" ? "added" : "updated"
        } successfully!`
      );

      setFormData({
        title: "",
        leetCodeNo: "",
        pattern: "",
        idea: "",
        steps: "",
        timeComplexity: "",
        spaceComplexity: "",
        code: "",
      });

      setShowPopup({
        isOpen: false,
        title: "",
        problemId: null,
      });
    } catch (err) {
      console.error("Error in handleSubmit:", err);
    }
  };

  const fetchProblemById = async () => {
    try {
      const { data } = await getProblemById(modalData.problemId);
      setFormData(data);
    } catch (err) {
      console.error("Error fetching problem:", err);
    }
  };

  useEffect(() => {
    if (modalData.problemId) fetchProblemById();
  }, [modalData.problemId]);

  const problemFields = [
    { name: "title", label: "Title", input: "input", type: "text" },
    {
      name: "leetCodeNo",
      label: "Leetcode Problem Number",
      input: "input",
      type: "text",
    },
    { name: "pattern", label: "Pattern", input: "input", type: "text" },
    { name: "idea", label: "Idea", input: "textarea" },
    { name: "steps", label: "Steps", input: "textarea" },
    { name: "code", label: "Code", input: "codeViewer" },
    {
      name: "timeComplexity",
      label: "Time Complexity",
      input: "input",
      type: "text",
    },
    {
      name: "spaceComplexity",
      label: "Space Complexity",
      input: "input",
      type: "text",
    },
  ];

  return (
    <form onSubmit={handleSubmit} className="problem-form">
      <div className="form-grid">
        {problemFields.map((field) => (
          <div
            key={field.name}
            className={`form-field ${
              field.input === "textarea" || field.input === "codeViewer"
                ? "full-width"
                : ""
            }`}
          >
            <label htmlFor={field.name}>{field.label}:</label>
            {field.input === "textarea" ? (
              <textarea
                id={field.name}
                name={field.name}
                rows="10"
                value={formData[field.name]}
                onChange={handleChange}
                placeholder={`Enter ${field.label}`}
                required
              />
            ) : field.input === "codeViewer" ? (
              <CodeEditor
                code={formData[field.name]}
                onChange={(newCode) =>
                  setFormData({ ...formData, [field.name]: newCode })
                }
              />
            ) : (
              <input
                type={field.type}
                name={field.name}
                value={formData[field.name]}
                onChange={handleChange}
                placeholder={`Enter ${field.label}`}
                required
              />
            )}
          </div>
        ))}
      </div>

      <button type="submit" className="submit-btn">
        {modalData.title === "add" ? "Add Problem" : "Update Problem"}
      </button>
    </form>
  );
}
