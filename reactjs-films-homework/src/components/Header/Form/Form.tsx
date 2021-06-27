import React, { useRef } from 'react';
import search from './assets/search.png';
import styles from './Form.module.scss';

type IFormProps = {
  placeholder: any;
};

const Form: React.FC<IFormProps> = ({ placeholder }) => {
  const ref: any = useRef();
  const loc = () => {
    let inputValue = ref.current.value;
    inputValue ? console.log(inputValue) : console.log('No matches');
    inputValue = '';
  };

  return (
    <div className={styles.formWrapper}>
      <form className={styles.form}>
        <input
          defaultValue=""
          ref={ref}
          type="search"
          className={styles.input}
          placeholder={placeholder}
          id="input_search"
          autoComplete="off"
        />
        <div className={styles.search}>
          <img src={search} alt="" width="16px" onClick={() => loc()} />
        </div>
      </form>
    </div>
  );
};

export default Form;
