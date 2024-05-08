import "../../styles/components/pages/selectplan.scss";

export function SelectPlan() {
  return (
    <form className="page-container">
      <div className="content-container">
        <header>
          <h1>Select Plan</h1>
          <p className="page-desc">
            Words
          </p>
        </header>

        
      </div>
      
      <div className="button-container">
        <button className="go-back" type="submit">
          Go Back
        </button>

        <button className="next-step" type="submit">
          Next Step
        </button>
      </div>
    </form>
  );
}
