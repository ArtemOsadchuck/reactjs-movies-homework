import React from 'react';

const Form: React.FC<any> = ({ children, ...props }) => {
  return (
    <form noValidate {...props}>
      {children}
    </form>
  );
};
export default Form;
