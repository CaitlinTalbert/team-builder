import React from 'react'

export default function Form(props) {
    const { values, update, submit } = props
  
    const onChange = evt => {
      const name = evt.target.name; 
      const { value } = evt.target; 
      update(name, value ); 
    }
  
    const onSubmit = evt => {
      evt.preventDefault();
      submit(); 
    }
  
    return (
      <form className='form container' onSubmit={onSubmit}>
        <div className='form-group inputs'>
          <label>Username
                <input 
                  name="username"
                  type="text"
                  placeholder="Type your username here"
                  maxLength="30"
                  value={values.username}
                  onChange={onChange}
                />
          </label>
  
          <label>Email
            <input 
            name="email"
            type="email"
            placeholder="Type your email here"
            value={values.email}
            onChange={onChange}
            />
          </label>
  
     
          <label>Role
            <select value={values.role} name="role" onChange={onChange}>
                <option value="">-- Select a Role --</option>
                <option value="Software Engineer">Software Engineer</option>
                <option value="Front End Web Developer">Front End Web Developer</option>
                <option value="Back End Web Developer">Back End Web Developer</option>
            </select>
          </label>
  
          <div className='submit'>
            <button>submit</button>
          </div>
        </div>
      </form>
    )
  }











/**
- [x] Create a `Form.js` file and build out your form markup.
- [x] Build inputs for `name`, `email` and `role` (backend engineer, frontend engineer, designer, etc. Use your imagination).
- [ ] You will have to decide which component is responsible for maintaining the _state_ of the form (`Form` itself, or its parent `App`). Each approach has advantages and disadvantages.
- [ ] Render your `Form` component in `App`. The `App` component should hand down through props any callback(s) needed for `Form` to do its job (adding new members to your team members state on submit).
*/