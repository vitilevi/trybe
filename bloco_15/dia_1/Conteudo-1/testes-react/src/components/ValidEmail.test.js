import React from 'react';
import { getByTestId, render } from '@testing-library/react';
import ValidEmail from './ValidEmail';

test('Testando um componente, caso o email seja valido.', () => {
  const EMAIL_USER = 'email@email.com';
  const { getByText } = render(<ValidEmail email={EMAIL_USER} />);
  const isValid = getByText('Email Valido');
  expect(isValid).toBeInTheDocument();
});

test('Testando um componente, caso o email seja inválido.', () => {
  const EMAIL_USER = 'emailerrado';
  const { getByText } = render(<ValidEmail email={EMAIL_USER} />);
  const isValid = getByText('Email Inválido');
  expect(isValid).toBeInTheDocument();
});

test('Testa um componente, caso nenhum email seja inserido', () => {
  const EMAIL_USER = '';
  const { queryByTestId } = render(<ValidEmail email={EMAIL_USER} />);
  const tagH3 = queryByTestId('email-return');
  expect(tagH3).not.toBeInTheDocument();
});