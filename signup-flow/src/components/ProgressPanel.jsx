import "../styles/components/progresspanel.scss";

const stepNames = ["Your Info", "Select Plans", "Add Ons", "Summary"];

export function ProgressPanel({ currStep }) {

  return (
    <div id="progress-panel">
      {stepNames.map((stepName, i) => (
        <div className="step" key={i}>
          <div
            className={`step-num 
              ${currStep === i ? "curr-step" : ""}
            `}
          >
            {i + 1}
          </div>

          <div>
            <div className="step-label">Step {i + 1}</div>
            <div>{stepName}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
