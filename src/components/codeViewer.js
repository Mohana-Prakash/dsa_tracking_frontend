import Editor from "react-simple-code-editor";
import { highlight, languages } from "prismjs/components/prism-core";
import "prismjs/components/prism-clike";
import "prismjs/components/prism-javascript";
import "prismjs/themes/prism-tomorrow.css";

export default function CodeEditor({ code, onChange, isEditable = false }) {
  return (
    <div
      style={{
        backgroundColor: "#1e1e1e",
        padding: "10px",
        borderRadius: "8px",
      }}
    >
      <Editor
        value={code}
        onValueChange={onChange}
        highlight={(code) => highlight(code, languages.javascript)}
        padding={10}
        style={{
          fontFamily: "'Fira Code', monospace",
          fontSize: 14,
          backgroundColor: "#1e1e1e",
          color: "#d4d4d4",
          minHeight: "200px",
          outline: "none",
          border: "none",
        }}
        readOnly={!isEditable}
      />
    </div>
  );
}
