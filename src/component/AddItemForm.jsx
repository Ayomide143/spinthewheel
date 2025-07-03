import React, { useState } from "react";

function AddItemForm({ entries, setEntries }) {
  const [item, setItem] = useState("");

  const addEntry = () => {
    if (!item.trim()) return;
    setEntries([...entries, item.trim()]);
    setItem("");
  };

  return (
    <div
      className="add-form-card"
      style={{
        margin: "2rem auto",
        padding: "1.5rem 1rem",
        borderRadius: "12px",
        background: "rgba(255,255,255,0.95)",
        boxShadow: "0 4px 24px 0 rgba(0,0,0,0.08)",
        maxWidth: "350px",
        width: "100%", 
        marginLeft: "auto",
        marginRight: "auto",
        transition: "box-shadow 0.3s",
        animation: "fadeIn 0.7s",
        boxSizing: "border-box",
      }}
    >
      <input
        value={item}
        onChange={(e) => setItem(e.target.value)}
        placeholder="Enter item"
        style={{
          padding: "0.7rem",
          width: "100%",
          borderRadius: "6px",
          border: "2px solid #ccc",
          outline: "none",
          fontSize: "1rem",
          marginBottom: "0.5rem",
          transition: "border-color 0.2s, box-shadow 0.2s",
          boxSizing: "border-box",
        }}
        onFocus={(e) => (e.target.style.borderColor = "#4CAF50")}
        onBlur={(e) => (e.target.style.borderColor = "#ccc")}
      />
      <div
        className="add-form-buttons"
        style={{
          display: "flex",
          gap: "10px",
          marginTop: "10px",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <button
          onClick={addEntry}
          style={{
            padding: "10px 0",
            fontSize: "16px",
            cursor: "pointer",
            backgroundColor: "#4CAF50",
            color: "white",
            borderRadius: "5px",
            border: "none",
            flex: 1,
            fontWeight: "bold",
            transition: "transform 0.1s, background 0.2s",
          }}
          onMouseDown={(e) => (e.target.style.transform = "scale(0.96)")}
          onMouseUp={(e) => (e.target.style.transform = "scale(1)")}
          onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
        >
          Add
        </button>
        <button
          onClick={() => setEntries([])}
          style={{
            padding: "10px 0",
            fontSize: "16px",
            cursor: "pointer",
            backgroundColor: "#f44336",
            color: "white",
            borderRadius: "5px",
            border: "none",
            flex: 1,
            fontWeight: "bold",
            transition: "transform 0.1s, background 0.2s",
          }}
          onMouseDown={(e) => (e.target.style.transform = "scale(0.96)")}
          onMouseUp={(e) => (e.target.style.transform = "scale(1)")}
          onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
        >
          Clear
        </button>
      </div>
      <style>
        {`
          @media (max-width: 600px) {
            .add-form-buttons {
              flex-direction: column !important;
            }
            .add-form-buttons button {
              margin-left: 0 !important;
              margin-top: 8px !important;
              width: 100%;
            }
          }
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(20px);}
            to { opacity: 1; transform: translateY(0);}
          }
        `}
      </style>
    </div>
  );
}

export default AddItemForm;
