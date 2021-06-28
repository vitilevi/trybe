import React from 'react';

const verifyEmail = (email) => {
  const emailRegex = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/;
  return emailRegex.test(email);
};

const ValidEmail = (props) => {
  const { email } = props;
  const checkEmail = verifyEmail(email);
  const check = checkEmail ? <h3 data-testid="email-return">Email Valido</h3> : <h3 data-testid="email-return">Email Inválido</h3>
  return (
    <div>
      <h2 data-testid="id-email-user">{`Valor: ${email}`}</h2>
      {email===''? '' : check}
    </div>
  );
};

export default ValidEmail;