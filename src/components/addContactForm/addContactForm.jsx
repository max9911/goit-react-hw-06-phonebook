import { useState } from 'react';
import css from './addContactForm.module.css';

const AddForm = ({ addContact }) => {
  const [username, setUsername] = useState('');
  const [number, setNumber] = useState('+380');

  const inputHandler = ({ target: { name, value } }) => {
    name === 'name' && setUsername(value);
    name === 'number' && setNumber(value);
  };
  const submitHandler = evt => {
    evt.preventDefault();
    addContact(username, number);
    setUsername('');
    setNumber('+380');
  };

  return (
    <form className={css.form} onSubmit={submitHandler}>
      <div className={css.container}>
        <label htmlFor="name" className={css.inputnames}>
          Name
        </label>
        <input
          value={username}
          onChange={inputHandler}
          placeholder="Jonh Jackson"
          id="name"
          className={css.input}
          type="text"
          name="name"
          required
        />
      </div>
      <div className={css.container}>
        <label htmlFor="number" className={css.inputnames}>
          Phone Number
        </label>
        <input
          value={number}
          onChange={inputHandler}
          placeholder="+380XXXXXXXXX"
          id="number"
          className={css.input}
          type="tel"
          name="number"
          required
        />
      </div>
      <button type="submit" className={css.btn}>
        Add contact
      </button>
    </form>
  );
};

export default AddForm;
