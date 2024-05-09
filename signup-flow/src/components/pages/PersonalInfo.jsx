import "../../styles/components/pages/personalinfo.scss";

export function PersonalInfo({ userData, onUpdateUserData, onNextStep }) {
  const handleSubmit = (e) => {
    e.preventDefault();

    const form = new FormData(e.target);
    const newData = Object.fromEntries(form.entries());

    onUpdateUserData(newData);
    onNextStep();
  };

  return (
    <form className="page-container" onSubmit={handleSubmit}>
      <div className="content-container">
        <header>
          <h1>Personal Info</h1>
          <p className="page-desc">
            Please provide your name, email address, and phone number.
          </p>
        </header>

        <div className="form-input">
          <label htmlFor="name">Name</label>
          <input
            id="name"
            name="name"
            placeholder="e.g. Stephen Hawking"
            defaultValue={userData.name}
            required
          ></input>
        </div>

        <div className="form-input">
          <label htmlFor="email">Email Address</label>
          <input
            id="email"
            name="email"
            placeholder="e.g. stephenking@lorem.com"
            defaultValue={userData.email}
          ></input>
        </div>

        <div className="form-input">
          <label htmlFor="tel">Phone Number</label>
          <input
            id="tel"
            name="tel"
            placeholder="e.g. +1 234 567 890"
            defaultValue={userData.tel}
          ></input>
        </div>
      </div>

      <div className="button-container">
        <button className="next-step" type="submit">
          Next Step
        </button>
      </div>
    </form>
  );
}
