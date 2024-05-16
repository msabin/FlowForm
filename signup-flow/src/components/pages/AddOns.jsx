import "../../styles/components/pages/addons.scss";
import { ADD_ONS } from "../../utils/constants.js";


export function AddOns({
  userData,
  onUpdateUserData,
  onGoBack,
  onNextStep,
}) {
  const handleSubmit = (e) => {
    e.preventDefault();

    onNextStep();
  };

  return (
    <form className="page-container" onSubmit={handleSubmit}>
      <div className="content-container">
        <header>
          <h1>Pick add-ons</h1>
          <p className="page-desc">
            Add-ons help enhance your gaming experience.
          </p>
        </header>

        <div className="add-ons-container">
          {ADD_ONS.map((addOn, i) => (
            <label className="add-on" key={i}>
              <input
                type="checkbox"
                onClick={() => onUpdateUserData({ addOns: addOn })}
                defaultChecked={userData.addOn === addOn}
              />

              <span className="add-on-type">
                <span className="add-on-title">{addOn.type}</span>
                <span className="add-on-descr">{addOn.descr}</span>
              </span>

              <span className="add-on-price">+${addOn.monthlyPrice}/mo</span>
            </label>
          ))}
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
