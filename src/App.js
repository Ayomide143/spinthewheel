import React, { useState } from 'react';
import Wheel from './component/Wheel';
import AddItemForm from './component/AddItemForm';
import EntryList from './component/EntryList';
import ResultPanel from './component/ResultPanel';
import Confetti from "react-confetti";
import './App.css';

function App() {
  const [entries, setEntries] = useState([]);
  const [result, setResult] = useState(null);
  const [history, setHistory] = useState([]);
  const [showConfetti, setShowConfetti] = useState(false);

  const handleSpinResult = (winner) => {
    setResult(winner);
    setHistory([winner, ...history]);
    setShowConfetti(true);
    setTimeout(() => setShowConfetti(false), 3500); // Confetti for 3.5 seconds
  };

  return (
    <div className="App" style={{ textAlign: 'center', padding: '2rem', position: 'relative' }}>
      <h1>🎡 Spin the Wheel</h1>
      <Wheel entries={entries} onResult={handleSpinResult} />
      <AddItemForm entries={entries} setEntries={setEntries} />
      <EntryList entries={entries} setEntries={setEntries} />
      <ResultPanel result={result} history={history} />
      {showConfetti && (
        <>
          <Confetti />
          <div
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100vw",
              height: "100vh",
              background: "rgba(0,0,0,0.5)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              zIndex: 9999,
              flexDirection: "column",
            }}
          >
            <h1 style={{ color: "#fff", fontSize: "3rem", marginBottom: "1rem" }}>
              🎉 Winner! 🎉
            </h1>
            <h2 style={{ color: "#FFD700", fontSize: "2.5rem" }}>{result}</h2>
          </div>
        </>
      )}
    </div>
  );
}

export default App;