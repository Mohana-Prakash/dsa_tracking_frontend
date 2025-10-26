import React from "react";

export default function Modal({ isOpen, onClose, title, children }) {
  if (!isOpen) return null;

  const overlayStyle = {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 1000,
  };

  const popupStyle = {
    backgroundColor: "#fff",
    borderRadius: "10px",
    padding: "24px",
    width: "100%",
    maxWidth: "70%",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
    position: "relative",
    height: "80vh",
    overflowY: "scroll",
  };

  const closeButtonStyle = {
    position: "absolute",
    top: "10px",
    right: "10px",
    border: "none",
    background: "none",
    fontSize: "18px",
    cursor: "pointer",
    color: "#555",
  };

  const titleStyle = {
    fontSize: "20px",
    fontWeight: "600",
    marginBottom: "16px",
    color: "#333",
  };

  return (
    <div style={overlayStyle}>
      <div style={popupStyle}>
        <button style={closeButtonStyle} onClick={onClose}>
          ✖
        </button>
        {title && <h2 style={titleStyle}>{title}</h2>}
        <div>{children}</div>
      </div>
    </div>
  );
}
