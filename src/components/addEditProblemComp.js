import React, { useState, useEffect } from "react";
import { createProblem, getProblemById, updateProblem } from "../services/api";
import { toast } from "react-toastify";
import CodeEditor from "./codeViewer";
import { difficultLevel, problemFields } from "./constant";

export default function AddEditProblemComp({
  modalData,
  setShowPopup,
  fetchProblems,
}) {
  const [formData, setFormData] = useState({
    title: "",
    leetCodeNo: "",
    difficultyLevel: "",
    pattern: "",
    idea: "",
    steps: "",
    timeComplexity: "",
    spaceComplexity: "",
    code: "",
    otherInfo: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const requiredFields = [
      "title",
      "leetCodeNo",
      "difficultyLevel",
      "pattern",
      "idea",
      "steps",
      "timeComplexity",
      "spaceComplexity",
      "code",
    ];

    const missing = requiredFields.filter((f) => !formData[f]?.trim());
    if (missing.length > 0) {
      toast.error("Please fill all required fields");
      return;
    }

    const isAdd = modalData.title === "add";

    try {
      const res = isAdd
        ? await createProblem(formData)
        : await updateProblem(modalData.problemId, formData);

      if ([200, 201].includes(res.status)) {
        fetchProblems();
        toast.success(res.message);

        resetForm();
        closePopup();
      }
    } catch (err) {
      console.error("Error in handleSubmit:", err);
      toast.error("Something went wrong! Please try again.");
    }
  };

  const resetForm = () => {
    setFormData({
      title: "",
      leetCodeNo: "",
      difficultyLevel: "",
      pattern: "",
      idea: "",
      steps: "",
      timeComplexity: "",
      spaceComplexity: "",
      code: "",
      otherInfo: "",
    });
  };

  const closePopup = () => {
    setShowPopup({
      isOpen: false,
      title: "",
      problemId: null,
    });
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

  return (
    <form onSubmit={handleSubmit} className="flex flex-col">
      {/* Form Fields Grid */}
      <div className="flex flex-wrap gap-5 mb-6">
        {problemFields.map((field) => (
          <div
            key={field.name}
            className={`flex flex-col ${
              field.input === "textarea" || field.input === "codeViewer"
                ? "w-full"
                : "w-full md:w-[30%]"
            }`}
          >
            <label
              htmlFor={field.name}
              className="mb-1 font-medium text-gray-700"
            >
              {field.label}:
            </label>

            {field.input === "textarea" ? (
              <textarea
                id={field.name}
                name={field.name}
                rows="8"
                value={formData[field.name]}
                onChange={handleChange}
                placeholder={`Enter ${field.label}`}
                required
                className="border border-gray-300 rounded-md px-3 py-2 text-gray-700 outline-none focus:border-blue-500 resize-y"
              />
            ) : field.input === "codeViewer" ? (
              <div className="border border-gray-300 rounded-md p-2">
                <CodeEditor
                  code={formData[field.name]}
                  onChange={(newCode) =>
                    setFormData({ ...formData, [field.name]: newCode })
                  }
                  isEditable={true}
                />
              </div>
            ) : field.input === "select" ? (
              <select
                name={field.name}
                value={formData[field.name]}
                onChange={(e) =>
                  setFormData({ ...formData, [field.name]: e.target.value })
                }
                required
                className="border border-gray-300 rounded-md px-3 py-2 text-gray-700 outline-none focus:border-blue-500"
              >
                <option value="" disabled>
                  Select
                </option>
                {difficultLevel.map((e) => (
                  <option key={e.name} value={e.name}>
                    {e.label}
                  </option>
                ))}
              </select>
            ) : (
              <input
                type={field.type}
                name={field.name}
                value={formData[field.name]}
                onChange={handleChange}
                placeholder={`Enter ${field.label}`}
                required
                className="border border-gray-300 rounded-md px-3 py-2 text-gray-700 outline-none focus:border-blue-500"
              />
            )}
          </div>
        ))}
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="self-start px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
      >
        {modalData.title === "add" ? "Add Problem" : "Update Problem"}
      </button>
    </form>
  );
}
