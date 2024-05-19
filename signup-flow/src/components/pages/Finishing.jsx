import "../../styles/components/pages/finishing.scss";
import { ADD_ONS, MONTHS_FREE } from "../../utils/constants.js";

export function Finishing({ userData, onChangePlan, onGoBack, onNextStep }) {
  const currAddOns = userData.addOns;

  const calcMonthlyCost = () => {
    const addOnsPrice = [...userData.addOns].reduce(
      (partialSum, elt) => partialSum + elt.monthlyPrice,
      0
    );

    return userData.plan.monthlyPrice + addOnsPrice;
  };

  return (
    <div className="page-container">
      <div className="content-container">
        <header>
          <h1>Finishing up</h1>
          <p className="page-desc">
            Double-check everything looks OK before confirming.
          </p>
        </header>

        <div className="receipt-container">
          <div className="plan-container receipt-item">
            <span className="plan">
              <div>
                {userData.plan.type} ({userData.monthly ? "Monthly" : "Yearly"})
              </div>

              <button className="change-plan" onClick={onChangePlan}>
                Change
              </button>
            </span>

            <span className="price">
              $
              {userData.monthly
                ? userData.plan.monthlyPrice + "/mo"
                : userData.plan.monthlyPrice * (12 - MONTHS_FREE) + "/yr"}
            </span>
          </div>

          <ul className="add-ons-container">
            {[...userData.addOns].map((addOn, i) => (
              <li className="add-on receipt-item" key={i}>
                <span className="add-on-type">{addOn.type}</span>

                <span className="add-on-price">
                  {userData.monthly
                    ? `+$${addOn.monthlyPrice}/mo`
                    : `+$${addOn.monthlyPrice * (12 - MONTHS_FREE)}/yr`}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className="total-container receipt-item">
          <span className="total-per">
            Total ({userData.monthly ? "per month" : "per year"})
          </span>
          <span className="total-price">
            {userData.monthly
              ? `$${calcMonthlyCost()}/mo`
              : `$${calcMonthlyCost() * (12 - MONTHS_FREE)}/yr`}
          </span>
        </div>
      </div>

      <div className="button-container">
        <button className="go-back" onClick={onGoBack}>
          Go Back
        </button>

        <button className="next-step" onClick={onNextStep}>
          Confirm
        </button>
      </div>
    </div>
  );
}
