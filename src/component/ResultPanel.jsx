import React from 'react';

function ResultPanel({ result, history }) {
  return (
    <div
      style={{
        marginTop: '2rem',
        maxWidth: 350,
        marginLeft: "auto",
        marginRight: "auto",
        background: "rgba(255,255,255,0.95)",
        borderRadius: "12px",
        boxShadow: "0 2px 12px 0 rgba(0,0,0,0.07)",
        padding: "1.2rem 1.2rem",
        animation: "fadeIn 0.7s",
      }}
    >
      {result && (
        <div
          style={{
            background: "linear-gradient(90deg, #fffbe7 0%, #ffe066 100%)",
            borderRadius: "8px",
            boxShadow: "0 2px 8px 0 rgba(255,215,0,0.13)",
            padding: "1rem",
            marginBottom: "1.2rem",
            border: "2px solid #FFD700",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            animation: "popIn 0.7s",
          }}
        >
          <span style={{ fontSize: "2rem", marginRight: "0.5rem" }}>🏆</span>
          <span style={{ fontWeight: "bold", fontSize: "1.5rem", color: "#bfa100" }}>
            Winner: {result}
          </span>
        </div>
      )}
      <h3 style={{ margin: "0 0 0.5rem 0" }}>Previous Winners:</h3>
      <ul style={{ padding: 0, margin: 0 }}>
        {history.length === 0 ? (
          <li style={{ fontStyle: "italic", color: "#888", listStyle: "none" }}>No previous winners</li>
        ) : (
          history.map((item, i) => (
            <li
              key={i}
              style={{
                listStyle: "none",
                padding: "6px 0",
                borderBottom: i !== history.length - 1 ? "1px solid #eee" : "none",
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
              }}
            >
              <span style={{
                display: "inline-block",
                width: 22,
                height: 22,
                borderRadius: "50%",
                background: "#FFD700",
                color: "#fff",
                textAlign: "center",
                fontWeight: "bold",
                fontSize: "0.95rem",
                lineHeight: "22px"
              }}>{i + 1}</span>
              <span>{item}</span>
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
          @keyframes popIn {
            from { opacity: 0; transform: scale(0.7);}
            to { opacity: 1; transform: scale(1);}
          }
        `}
      </style>
    </div>
  );
}

export default ResultPanel;