import "../styles/components/progressbar.scss";

export function ProgressBar({ page }) {
  const steps = ["Your Info", "Select Plan", "Add-Ons", "Summary"];

  return (
    <div id="progress-bar">
      {steps.map((descr, step) => (
        <div className="step-container" key={step}>
          <div className={`step-circ${page === step ? " curr-page" : ""}`}>
            {step + 1}
          </div>

          <div className="step">
            <div className="step-num">Step {step + 1}</div>
            <div className="step-desc">{descr}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
