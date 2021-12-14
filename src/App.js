import './App.css';
import Form from "./components/Form.js"; 
import Member from "./components/Member.js"
import React, { useState } from 'react'; 

/**
 * 
- [ ] Render a list of team members from state.
- [ ] Build a form to add a new member to the list of members.

- [ ] Import the `useState` hook and set up state to keep your team members list.
- [ ] Give the state variable you just declared a default value. You will need to keep track of a list of team members and each team member will have several key/value pairs associated with them.
- [ ] Render your list of team members.
 */
const initialFormValues = {
  memberName: '', 
  email: '', 
  role: '',
};


export default function App() {
  const [members, setMembers] = useState([])
  const [formValues, setFormValues] = useState(initialFormValues); 
  const [error, setError] = useState(""); 
  const updateForm = (inputName, inputValue) => {
    setFormValues({ ...formValues, [inputName]: inputValue}); 
  }

  const submitForm = () => {
    const newMember = {
      memberName: formValues.memberName.trim(), 
      email: formValues.email.trim(), 
      role: formValues.role,
      }
      setMembers(members.concat(newMember)); 
      setFormValues(initialFormValues)
    } 

  return (
    <div className="App">
      <header className="App-header">
        <h1>Members of a Team</h1>
        <Form 
        values={formValues}
        update={updateForm}
        submit={submitForm}
        />
      </header>

      {
        members.map((member, idx) => {
          return (
            <Member key={member.id} details={member} />
          )
        })
      }
    </div>
  );
}


/**
 * if(!newMember.memberName || !newMember.email || !newMember.role){
        setError("All fields required")
      } else {
        setMembers ([setMembers, ...members]); 
        setFormValues(initialFormValues); 
        setError("")
      }
 */
