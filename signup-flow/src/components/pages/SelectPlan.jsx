import "../../styles/components/pages/selectplan.scss";
import { plans } from "../../utils/constants.js";
// import arcadeSVG from "../../assets/images/icon-arcade.svg";

export function SelectPlan({
  userData,
  onUpdateUserData,
  onGoBack,
  onNextStep,
}) {
  const handleSubmit = (e) => {
    e.preventDefault();

    onNextStep();
  };

  const handleToggle = (e) => {
    e.preventDefault();
    const pressed = e.target.getAttribute("aria-pressed") === "true";
    e.target.setAttribute("aria-pressed", !pressed);

    onUpdateUserData({ monthly: !userData.monthly });
  };

  return (
    <form className="page-container" onSubmit={handleSubmit}>
      <div className="content-container">
        <header>
          <h1>Select your plan</h1>
          <p className="page-desc">
            You have the option of monthly or yearly billing.
          </p>
        </header>

        <div className="cards-container">
          {plans.map((plan, i) => (
            <label className="plan-card" key={i}>
              <input
                type="radio"
                name="plan-radio"
                className="visually-hidden"
                onClick={() => onUpdateUserData({ plan: plan })}
                defaultChecked={userData.plan === plan}
              />
              <img src={plan.svg} />

              <span className="plan-container">
                <span className="plan-title">{plan.type}</span>
                <span className="plan-price">${plan.monthlyPrice}/mo</span>
              </span>
            </label>
          ))}
        </div>

        <div className="toggle-container">
          <span>Monthly</span>
          <button
            className="toggle"
            onClick={handleToggle}
            aria-pressed={userData.monthly}
            aria-label="monthly"
          />
          <span>Yearly</span>
        </div>
      </div>

      <div className="button-container">
        <button className="go-back" onClick={onGoBack}>
          Go Back
        </button>

        <button className="next-step" type="submit">
          Next Step
        </button>
      </div>
    </form>
  );
}
