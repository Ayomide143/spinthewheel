import React from 'react';

function EntryList({ entries, setEntries }) {
  const removeEntry = (index) => {
    setEntries(entries.filter((_, i) => i !== index));
  };

  return (
    <div
      style={{
        background: "rgba(255,255,255,0.95)",
        borderRadius: "12px",
        boxShadow: "0 2px 12px 0 rgba(0,0,0,0.07)",
        maxWidth: "350px",
        margin: "1rem auto",
        padding: "1rem 1.2rem",
        animation: "fadeIn 0.7s",
      }}
    >
      <h3 style={{ marginTop: 0, marginBottom: "0.7rem" }}>Added Entries</h3>
      <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
        {entries.length === 0 ? (
          <li style={{ fontStyle: "italic", color: "#888" }}>No added entries</li>
        ) : (
          entries.map((entry, index) => (
            <li
              key={index}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "0.5rem 0",
                borderBottom: index !== entries.length - 1 ? "1px solid #eee" : "none",
                transition: "background 0.2s",
              }}
              onMouseEnter={e => e.currentTarget.style.background = "#f9f9f9"}
              onMouseLeave={e => e.currentTarget.style.background = "transparent"}
            >
              <span>
                <span style={{
                  display: "inline-block",
                  width: 22,
                  height: 22,
                  borderRadius: "50%",
                  background: "#4CAF50",
                  color: "#fff",
                  textAlign: "center",
                  fontWeight: "bold",
                  marginRight: 10,
                  fontSize: "0.95rem",
                  lineHeight: "22px"
                }}>{index + 1}</span>
                {entry}
              </span>
              <button
                onClick={() => removeEntry(index)}
                style={{
                  marginLeft: "10px",
                  padding: "0",
                  width: "28px",
                  height: "28px",
                  borderRadius: "50%",
                  border: "none",
                  background: "#f44336",
                  color: "#fff",
                  fontSize: "1.1rem",
                  cursor: "pointer",
                  transition: "background 0.2s, transform 0.1s",
                }}
                onMouseDown={e => e.target.style.transform = "scale(0.92)"}
                onMouseUp={e => e.target.style.transform = "scale(1)"}
                onMouseLeave={e => e.target.style.transform = "scale(1)"}
                title="Remove"
              >❌</button>
            </li>
          ))
        )}
      </ul>
      <style>
        {`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(20px);}
            to { opacity: 1; transform: translateY(0);}
          }
        `}
      </style>
    </div>
  );
}

export default EntryList;