import { useState } from 'react';

// ./src/ContactUs.js
function ContactUs() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [phoneType, setPhoneType] = useState('');
    const [staffType, setStaffType] = useState('');
    const [bio, setBio] = useState('');
    const [signup, setSignup] = useState(false);

    const onSubmit = e => {
        e.preventDefault();

        const contactUsInformation = {
            name,
            email,
            phone,
            phoneType,
            staffType,
            bio,
            signup,
            submittedOn: new Date()
        };

        console.log(contactUsInformation);

        setName('');
        setEmail('');
        setPhone('');
        setPhoneType('');
        setStaffType('');
        setBio('');
        setSignup(false);
    };

  return (
    <div>
      <h2>Contact Us</h2>
      <form onSubmit={onSubmit}>
        <div>
          <label htmlFor='name'>Name:</label>
          <input
          id='name'
          type='text'
          onChange={e => setName(e.target.value)}
          value={name} />
        </div>
        <div>
          <label htmlFor='email'>Email:</label>
          <input
          id='email'
          type='text'
          onChange={e => setEmail(e.target.value)}
          value={email} />
        </div>
        <div>
          <label htmlFor='phone'>Phone:</label>
          <input
          id='phone'
          type='text'
          onChange={e => setPhone(e.target.value)}
          value={phone} />
          <select
            name='phoneType'
            onChange={e => setPhoneType(e.target.value)}
            value={phoneType}
          >
            <option value='' disabled>
              Select a phone type...
            </option>
            <option>Home</option>
            <option>Work</option>
            <option>Mobile</option>
          </select>
        </div>
        <div>
          <fieldset>
            <legend>Select a Staff Type:</legend>

            <div>
              <label htmlFor='student'>Student</label>
              <input
                id='student'
                type='radio'
                name='staffType'
                onClick={e => setStaffType('student')}
                value={staffType} />
            </div>

            <div>
              <label htmlFor='instructor'>Instructor</label>
              <input
                id='instructor'
                type='radio'
                name='staffType'
                onClick={e => setStaffType('instructor')}
                value={staffType} />
            </div>

          </fieldset>
        </div>
        <div>
          <label htmlFor='bio'>Bio:</label>
          <textarea
            id='bio'
            name='bio'
            onChange={e => setBio(e.target.value)}
            value={bio}
          />
        </div>
        <div>
          <label htmlFor='signup'>Sign up for email notifications</label>
          <input
            type='checkbox'
            id='signup'
            name='signup'
            onClick={e => setSignup(!signup)}
            value={signup}
          />
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
}

export default ContactUs;
