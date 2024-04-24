import '../../stylings/PersonalInfo.scss';

export function PersonalInfo() {

  return(
    <div id="personal-info">
      <h2>Personal Info</h2>
      <p>Please provide your name, email address, and phone number.</p>

      <form>
        <div className='form-input'>
          <label htmlFor="name">Name</label>
          <input 
            required type="text" 
            name="name" 
            placeholder={"e.g. Stephen King"}
         />
        </div>

        <div className='form-input'>
          <label htmlFor="email">Email Address</label>
          <input type="email" name="email" placeholder="e.g. stephenking@lorem.com"></input>
        </div>

        <div className='form-input'>
          <label htmlFor="phone">Phone Number</label>
          <input type="tel" name="phone" placeholder="e.g. +1 234 567 890"></input>
        </div>

        <input type="submit" value="button" onClick={() => onSubmitForm}/>

      </form>

    </div>
  )
};