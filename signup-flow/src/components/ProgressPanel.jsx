import '../styles/components/progresspanel.scss';

export function ProgressPanel( {currStep} ) {

  return(
    <div id='progress-panel'>
      <div className="step">
        <div className="step-num">1</div>
        <div>
          <div>Step 1</div>
          <div>Your Info</div>
        </div>
      </div>
    </div>
  )

}