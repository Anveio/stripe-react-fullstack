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

export { PasswordField, EmailField };
