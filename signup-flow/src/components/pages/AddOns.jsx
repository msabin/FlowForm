

export function AddOns({ onGoBack, onUpdateUserData }) {

  return(
    <div>
      <h2>Pick add-ons</h2>
      <p>Add-ons help enhance your gaming experience.</p>

      {/* Online service
      Access to multiplayer games
      +$1/mo

      Larger storage
      Extra 1TB of cloud save
      +$2/mo

      Customizable Profile
      Custom theme on your profile
      +$2/mo */}

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