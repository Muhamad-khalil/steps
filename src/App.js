import { useState } from "react";
const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

export default function App() {
  return (
    <>
      <Steps />
    </>
  );
}

function Steps() {
  const [step, setStep] = useState(0);
  const [isOpen, setIsOpen] = useState(true);

  function handleNext() {
    if (step < 2) setStep((s) => s + 1);
  }
  function handlePrevious() {
    if (step > 0) setStep((s) => s - 1);
  }
  // function handleChange() {
  //   if (isOpen === true) {
  //     setIsOpen(false);
  //   } else if (isOpen === false) {
  //     setIsOpen(true);
  //   }
  //  setIsOpen(!isOpen)
  // }
  return (
    <>
      <button
        onClick={() => {
          setIsOpen((is) => !is);
        }}
        className="close"
      >
        &times;
      </button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 0 ? "active" : ""}>1</div>
            <div className={step >= 1 ? "active" : ""}>2</div>
            <div className={step >= 2 ? "active" : ""}>3</div>
          </div>
          <p className="message">
            step : {step + 1} {messages[step]}
          </p>
          <div className="buttons">
            <button
              onClick={handlePrevious}
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
            >
              Previous
            </button>
            <button
              onClick={handleNext}
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
            >
              Next
            </button>
          </div>
        </div>
      )}
    </>
  );
}
