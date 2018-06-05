import * as React from 'react';
import { TextField } from '@shopify/polaris';
import { AuthTextField } from 'types';

interface Props {
  readonly field: AuthTextField;
  readonly onChange: (value: string) => void;
}

const PasswordField = ({ field, onChange }: Props) => {
  return (
    <TextField
      label="Password"
      name="password"
      type="password"
      placeholder="At least 6 characters."
      value={field.text}
      onChange={onChange}
      error={field.error || undefined}
      min={6}
    />
  );
};

const PasswordConfField = ({ field, onChange }: Props) => {
  return (
    <TextField
      spellCheck={false}
      label="Confirm Password"
      name="passwordConf"
      type="password"
      value={field.text}
      placeholder="Same as your password."
      min={6}
      onChange={onChange}
      error={field.error || undefined}
    />
  );
};

const EmailField = ({ field, onChange }: Props) => {
  return (
    <TextField
      autoComplete={false}
      label="Email address"
      name="email"
      id="email"
      type="email"
      value={field.text}
      placeholder="e.g. name@business.com"
      onChange={onChange}
      error={field.error || undefined}
      spellCheck={false}
      autoFocus
    />
  );
};

export { PasswordField, PasswordConfField, EmailField };
