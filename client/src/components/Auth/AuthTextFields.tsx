import * as React from 'react';
import { TextField } from '@shopify/polaris';

interface Props {
  readonly field: AuthTextField;
  readonly onChange: (value: string) => void;
}

const PasswordField = ({ field, onChange }: Props) => {
  return (
    <TextField
      label="Password"
      type="password"
      placeholder="At least 6 characters."
      value={field.text}
      onChange={onChange}
      error={field.error || false}
      min={6}
    />
  );
};

const PasswordConfField = ({ field, onChange }: Props) => {
  return (
    <TextField
      label="Confirm Password"
      type="password"
      value={field.text}
      placeholder="Same as your password."
      min={6}
      onChange={onChange}
      error={field.error || false}
    />
  );
};

const EmailField = ({ field, onChange }: Props) => {
  return (
    <TextField
      label="Email address"
      type="email"
      value={field.text}
      placeholder="e.g. name@business.com"
      onChange={onChange}
      error={field.error || false}
      spellCheck={false}
      autoFocus
    />
  );
};
const UsernameField = ({ field, onChange }: Props) => {
  return (
    <TextField
      label="Username"
      type="text"
      value={field.text}
      placeholder="No spaces or numbers."
      onChange={onChange}
      error={field.error || false}
      spellCheck={false}
    />
  );
};

export { PasswordField, PasswordConfField, EmailField, UsernameField };
