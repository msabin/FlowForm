import "../../styles/components/selectplan.scss";
import { planOptions } from "../../utils/constants";

export function SelectPlan({ userData, onGoBack, onNextStep, onUpdateUserData }) {

  const handleToggle = (e) => {
    let pressed = e.target.getAttribute("aria-pressed") === "true";
    e.target.setAttribute("aria-pressed", !pressed);
    onUpdateUserData({monthly: !userData.monthly})
  };

  return (
    <div className="page-container">
      <div className="content-container">
        <h2>Select Your Plan</h2>

        <p>You have the option of monthly or yearly billing.</p>

        <div id="plans">
          {planOptions.map((plan, i) => 
            <label className="plan-option" key={i}>
              <input 
                type="radio" 
                name="plan-option" 
                className="visually-hidden"
                onClick={()=>onUpdateUserData({plan: i})}
                defaultChecked={userData.plan === i}
              />
              <img src={plan.picture} />
              <h3>{plan.name}</h3>${plan.price}/mo
            </label>
          )}
        </div>

        <div id="monthly-toggle">
          Monthly
          <button
            type="button"
            className="toggle"
            aria-pressed={userData.monthly}
            onClick={handleToggle}
          />
          Yearly
        </div>
      </div>

      <div className="button-container">
        <button className="back-button" onClick={() => onGoBack()}>Go Back</button>

        <button className="forward-button" onClick={() => onNextStep({})}>Next Step</button>
      </div>
    </div>
  );
}
