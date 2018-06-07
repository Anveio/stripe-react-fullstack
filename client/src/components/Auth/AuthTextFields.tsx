import * as React from 'react';
import { TextField } from '@shopify/polaris';
import { AuthTextField } from 'types';

interface Props {
  readonly kind: 'login' | 'signup';
  readonly field: AuthTextField;
  readonly onChange: (value: string) => void;
}

const PasswordField = ({ field, onChange, kind }: Props) => {
  return (
    <TextField
      label="Password"
      name={`password-${kind}`}
      type="password"
      placeholder="At least 6 characters."
      value={field.text}
      onChange={onChange}
      error={field.error || undefined}
      min={6}
    />
  );
};

const PasswordConfField = ({ field, onChange, kind }: Props) => {
  return (
    <TextField
      spellCheck={false}
      label="Confirm Password"
      name={`passwordConf-${kind}`}
      type="password"
      value={field.text}
      placeholder="Same as your password."
      min={6}
      onChange={onChange}
      error={field.error || undefined}
    />
  );
};

const EmailField = ({ field, onChange, kind }: Props) => {
  return (
    <TextField
      autoComplete={false}
      label="Email address"
      name={`email-${kind}`}
      type="email"
      value={field.text}
      placeholder="e.g. name@business.com"
      onChange={onChange}
      error={field.error || undefined}
      spellCheck={false}
    />
  );
};

export { PasswordField, PasswordConfField, EmailField };
