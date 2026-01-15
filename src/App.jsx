import { useState } from "react";
import "./App.css";
const data = [
  {
    id: 1,
    tags: ["Basics", "JavaScript", "Variables"],
    question: "What is the difference between 'null' and 'undefined'?",
    answer:
      "'undefined' means a variable has been declared but has not yet been assigned a value, whereas 'null' is an assignment value that represents 'no value' or an empty object.",
    difficulty: "Beginner",
  },
  {
    id: 2,
    tags: ["Data Structures", "Basics"],
    question: "What is a 'String' in programming?",
    answer:
      "A sequence of characters used to represent text, usually enclosed in single or double quotes.",
    difficulty: "Beginner",
  },
  {
    id: 3,
    tags: ["Logic", "JavaScript", "Advanced"],
    question: "What is a 'Closure'?",
    answer:
      "A closure is the combination of a function bundled together with references to its surrounding state (the lexical environment).",
    difficulty: "Advanced",
  },
  {
    id: 4,
    tags: ["Algorithms", "Logic"],
    question: "What is the purpose of a 'Base Case' in recursion?",
    answer:
      "A base case is a condition that stops the recursion from continuing forever, preventing a stack overflow.",
    difficulty: "Intermediate",
  },
  {
    id: 5,
    tags: ["Data Structures", "Intermediate"],
    question: "What is the difference between a Stack and a Queue?",
    answer:
      "A Stack follows LIFO (Last In, First Out), while a Queue follows FIFO (First In, First Out).",
    difficulty: "Intermediate",
  },
];

function App() {
  const [cureOpen, setCureOpen] = useState(null);
  return (
    <>
      <div
        style={{
          backgroundColor: "#a5afac",
          width: "100%",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          overflow: "scroll",
        }}
      >
        <div
          className="container"
          style={{
            backgroundColor: "#f4f7f6",
            width: "50%",
            marginTop: "150px",

            padding: "40px 20px",
            minHeight: "100vh",
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          {data.map((el, i) => {
            return (
              <div style={{}} key={el.id}>
                <Item
                  question={el.question}
                  number={i}
                  cureOpen={cureOpen}
                  setCureOpen={setCureOpen}
                >
                  {el.answer}
                </Item>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

function Item({ question, children, number, cureOpen, setCureOpen }) {
  let isOpen = number == cureOpen;
  function handleToggle() {
    setCureOpen(isOpen ? null : number);
  }
  return (
    <div
      className={`item ${isOpen ? "open" : ""}`}
      style={{
        width:'90%',
        maxWidth: "630px",
        textWrap: "wrap",
        backgroundColor: "white",
        marginBottom: "15px",
        borderRadius: "12px",
        boxShadow: "0px 4px 50px rgba(0,0,0,0.05)",
        border: "1px solid #e0e0e0",
        padding: "20px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        transition: "transform 0.2s ease",
      }}
      onClick={handleToggle}
    >
      <div
        className="top"
        style={{
          display: "flex",
          margin: "5px",
          padding: "20px",
          justifyContent: "space-between",
          width: "100%",
          fontWeight: "bold",
          fontSize: "20px",
          alignItems: "center",
        }}
      >
        <span className="number" style={{ color: "#5d6d7e90",marginRight:'15px'}}>
          {number < 9 ? `0${number + 1}` : number + 1}
        </span>
        <p
          className="title"
          style={{ color: "#2c3e5", fontSize: "1.1rem", marginBottom: "10px" }}
        >
          {question}
        </p>
        <span className="simple" style={{ fontSize: "30px" }}>
          {isOpen ? "-" : "+"}
        </span>
      </div>
      {isOpen && (
        <div
          className="bottom"
          style={{
            fontWeight: "bold",
            fontSize: "20px",
          }}
        >
          <p
            className="text"
            style={{
              color: "#5d6d7e",
              fontSize: "0.95rem",
              borderTop: "1px solid #eee",
              paddingTop: "10px",
            }}
          >
            {children}
          </p>
        </div>
      )}
    </div>
  );
}

export default App;
