import '../../styles/components/selectplan.scss';
import arcadeSVG from '/src/assets/images/icon-arcade.svg';
import advancedSVG from '/src/assets/images/icon-advanced.svg';
import proSVG from '/src/assets/images/icon-pro.svg';

export function SelectPlan({ onGoBack, onUpdateUserData }) {

  return(
    <div>
      <h2>Select Your Plan</h2>
      
        
      <p>You have the option of monthly or yearly billing.</p>

      <div id='plans'>
        <div className="plan-option">
          <img src={arcadeSVG}/>
          <h3>Arcade</h3>
          $9/mo
        </div>
        
        <div className="plan-option">
          <img src={advancedSVG}/>
          <h3>Advanced</h3>
          $12/mo
        </div>

        
        <div className="plan-option">
          <img src={proSVG}/>
          <h3>Pro</h3>
          $15/mo
        </div>
      </div>

      <div>Monthly Yearly </div>

       

      <button
        onClick={()=>onGoBack()}
      >
        Go Back
      </button>

      <button 
        onClick={()=>onUpdateUserData({})}
      >
        Next Step
      </button>
    </div>
  )
};