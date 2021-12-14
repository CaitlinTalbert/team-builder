import React, { useState } from 'react'

const Form = (props) => {
    const { submitPerson, initialPerson, buttonText, history } = props; 
    const [person, setPerson ] = useState(initialPerson || {name: "", email:"", role:""}); 
    const handleChange = event => {
        setPerson({ ...person, [event.target.name]: event.target.value}); 
    }; 
    const handleSubmit = event => {
        event.preventDefault(); 
        submitPerson(person); 
        setPerson({name:"", email:"", role:""}); 
    }; 
    return (
        <form onSubmit={handleSubmit}>
            <input placeholder="name"
            value={person.name}
            name="name"
            onChange={handleChange} />

            <input placeholder="email"
            value={person.email}
            name="email"
            onChange={handleChange} />

            <input placeholder="role"
            value={person.role}
            name="role"
            onChange={handleChange} />

            <button type="submit">{buttonText}</button>
        </form>
    );
}; 
export default Form; 










/**
- [x] Create a `Form.js` file and build out your form markup.
- [x] Build inputs for `name`, `email` and `role` (backend engineer, frontend engineer, designer, etc. Use your imagination).
- [ ] You will have to decide which component is responsible for maintaining the _state_ of the form (`Form` itself, or its parent `App`). Each approach has advantages and disadvantages.
- [ ] Render your `Form` component in `App`. The `App` component should hand down through props any callback(s) needed for `Form` to do its job (adding new members to your team members state on submit).
*/