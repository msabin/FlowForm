import "../../styles/components/personalinfo.scss";
import { useState } from "react";

export function PersonalInfo({ userData, onNextStep }) {
  const [nameClicked, setNameClicked] = useState(false);
  const [emailClicked, setEmailClicked] = useState(false);
  const [phoneClicked, setPhoneClicked] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const userData = Object.fromEntries(formData.entries());
    onNextStep(userData);
  };

  return (
    <form onSubmit={handleSubmit} className="page-container">
      <div className="content-container">
        <h2>Personal Info</h2>
        <p>Please provide your name, email address, and phone number.</p>

        <div className="form-input">
          <label htmlFor="name">Name</label>
          <input
            className={nameClicked ? "not-filled" : ""}
            type="text"
            name="name"
            id="name"
            placeholder={"e.g. Stephen King"}
            defaultValue={userData.name}
            autoComplete="name"
            onClick={() => setNameClicked(true)}
            //required
          />
        </div>

        <div className="form-input">
          <label htmlFor="email">Email Address</label>
          <input
            className={emailClicked ? "not-filled" : ""}
            type="email"
            name="email"
            id="email"
            placeholder="e.g. stephenking@lorem.com"
            defaultValue={userData.email}
            autoComplete="email"
            onClick={() => setEmailClicked(true)}
            //required
          />
        </div>

        <div className="form-input">
          <label htmlFor="phone">Phone Number</label>
          <input
            className={phoneClicked ? "not-filled" : ""}
            type="tel"
            name="phone"
            id="phone"
            placeholder="e.g. +1 234 567 890"
            defaultValue={userData.phone}
            autoComplete="tel"
            onClick={() => setPhoneClicked(true)}
            //required
          />
        </div>
      </div>

      <div className="button-container-right">
        <input className="forward-button" type="submit" value="Next Step" />
      </div>
    </form>
  );
}
