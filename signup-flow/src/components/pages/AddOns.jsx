import "/src/styles/components/addons.scss";
import { addOns } from "/src/utils/constants";
import { useState } from "react";

export function AddOns({ userData, onGoBack, onNextStep, onUpdateUserData }) {
  const [chosenAddOns, setChosenAddOns] = useState(
    new Set(userData["Add-Ons"])
  );

  return (
    <div className="page-container">
      <div className="content-container">
        <h2>Pick add-ons</h2>
        <p>Add-ons help enhance your gaming experience.</p>

        <div className="addon-options">
          {addOns.map((addOn, i) => (
            <label className="addon-option" key={i}>
              <span className="addon-check">
                <input
                  type="checkbox"
                  name={addOn.name}
                  defaultChecked={chosenAddOns.has(addOn.name)}
                  onChange={(e) => {
                    if (e.target.checked) {
                      setChosenAddOns(chosenAddOns.add(addOn.name));
                    } else {
                      chosenAddOns.delete(addOn.name);
                      setChosenAddOns(chosenAddOns);
                    }

                    onUpdateUserData({ "Add-Ons": chosenAddOns });
                  }}
                />
                <span className="addon-descr">
                  <div>{addOn.name}</div>
                  <div>{addOn.description}</div>
                </span>
              </span>
              <span>${addOn.price}/mo</span>
            </label>
          ))}
        </div>
      </div>

      <div className="button-container">
        <button className="back-button" onClick={() => onGoBack()}>
          Go Back
        </button>

        <button
          className="forward-button"
          onClick={() => onNextStep({ "Add-Ons": chosenAddOns })}
        >
          Next Step
        </button>
      </div>
    </div>
  );
}
