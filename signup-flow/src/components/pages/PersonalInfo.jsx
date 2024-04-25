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
            type="text" 
            name="name" 
            id="name"
            placeholder={"e.g. Stephen King"}
            autoComplete='name'
            required
         />
        </div>

        <div className='form-input'>
          <label htmlFor="email">Email Address</label>
          <input 
            type="email" 
            name="email" 
            id="email"
            placeholder="e.g. stephenking@lorem.com"
            autoComplete='email'
            required
          />
        </div>

        <div className='form-input'>
          <label htmlFor="phone">Phone Number</label>
          <input 
            type="tel" 
            name="phone"
            id="phone"
            placeholder="e.g. +1 234 567 890"
            autoComplete='tel'
            required
          />
        </div>

        
      </form>

    </div>
  )
};