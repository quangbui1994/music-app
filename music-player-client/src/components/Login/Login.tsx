import React, { useState, ChangeEvent, FormEvent, useContext } from 'react';
import { useFormFields, useDidUpdateEffect } from '../../hooks/hooksLib';
import styles from './Login.module.css';
import { login } from '../../services/auth';
import { AuthContext } from '../../context/authContext';

interface Props {
  closeModal: () => void
};

const Login: React.FC<Props> = ({ closeModal }) => {
  const state = useContext(AuthContext);
  const [fields, setFields] = useFormFields({
    Email: '',
    Password: ''
  });
  const [error, setError] = useState({
    Email: '',
    Password: ''
  });
  const [formValid, setFormValid] = useState(false);

  useDidUpdateEffect(() => {
    // check if there is any error and empty field
    setFormValid(Object.values(error).every(error => error === '') && Object.keys(fields).every(field => fields[field]));
  }, [error]);

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setFields(e);
    const { target: { value, id } } = e;
    switch (id) {
      case 'Email':
        nameValidation(value);
        break;
      case 'Password':
        passwordValidation(value);
        break;
      default:
        return;
    }
  };

  const nameValidation = (value: string): boolean => {
    const nameValidity = /@gmail\.com$/.test(value);
    if (!nameValidity) {
      setError({...error, Email: 'Email contains only 5 to 10 words or numbers'});
    } else {
      setError({...error, Email: ''});
    }
    return nameValidity;
  }

  const passwordValidation = (value: string): boolean => {
    const passwordValidity = /^(?=.*[a-z])(?=.*\d)(?=.*[A-Z])[a-zA-Z\d]{5,}$/.test(value);
    if (!passwordValidity) {
      setError({...error, Password: 'Password must contains at least 1 uppercase letter, 1 number and no special character'});
    } else {
      setError({...error, Password: ''});
    }
    return passwordValidity;
  }

  const submitHanler = async (e: FormEvent<HTMLFormElement | HTMLButtonElement>) => {
    e.preventDefault();
    const user: User = {
      email: fields.Email,
      password: fields.Password
    }

    try {
      await login(user);
      closeModal();
      state.setAuth(true);
      localStorage.setItem('auth', 'true');
    } catch (error) {
      console.log(error);
    }
  }

  // Extract error message to error component
  const value = Object.values(error).find(key => key !== '');
  const errorMessage = (
    <div className={styles.error}>{value}</div>
  )

  return (
    <div className={styles.Login}>
      <form className={styles.form} onSubmit={submitHanler}>
        {
          Object.keys(fields).map((field, i) => (
            <React.Fragment key={i}>
              <input value={fields.field} id={field} type={field === 'Password' ? 'password' : "text"} placeholder={field} onChange={onChangeHandler}/>
              <label className={styles.label} htmlFor={field}>{field}</label>
            </React.Fragment>
          ))
        }
        <button disabled={!formValid} className={styles.submitButton} onClick={submitHanler}>Submit</button>
        {errorMessage}
      </form>
    </div>
  )
};

export default Login;