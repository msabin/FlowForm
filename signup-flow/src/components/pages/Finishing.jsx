export function Finishing({onGoBack, onConfirm}) {
  return (
    <div className="page-container">
      <div className="content-container">
        <h2>Finishing up</h2>
        <p>Double-check everything looks OK before confirming.</p>

        <div className="addon-options">
          
        </div>
      </div>

      <div className="button-container">
        <button className="back-button" onClick={() => onGoBack()}>
          Go Back
        </button>

        <button
          id="confirm-button"
          onClick={() => onNextStep()}
        >
          Confirm
        </button>
      </div>
    </div>
  );
}
