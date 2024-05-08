import '../styles/components/progressbar.scss';

export function ProgressBar() {
  return (
    <div id="progress-bar">
      <div className="step-container">
        <div className="step-circ">1</div>

        <div className="step">
          <div className="step-num">Step 1</div>
          <div className="step-desc">Your Info</div>
        </div>
      </div>

      <div className="step-container">
        <div className="step-circ">2</div>

        <div className="step">
          <div className="step-num">Step 2</div>
          <div className="step-desc">Select Plan</div>
        </div>
      </div>

      <div className="step-container">
        <div className="step-circ">3</div>

        <div className="step">
          <div className="step-num">Step 3</div>
          <div className="step-desc">Add-Ons</div>
        </div>
      </div>

      <div className="step-container">
        <div className="step-circ">4</div>

        <div className="step">
          <div className="step-num">Step 4</div>
          <div className="step-desc">Summary</div>
        </div>
      </div>
    </div>
  );
}
