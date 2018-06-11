import * as React from 'react';
import { TextField } from '@shopify/polaris';

interface Props {
  readonly kind: 'login' | 'signup';
  readonly text: string;
  readonly onChange: (value: string) => void;
  readonly error?: string;
}

type FieldComponent = React.SFC<Props>;

const PasswordField: FieldComponent = ({ text, onChange, kind, error }) => {
  return (
    <TextField
      label="Password"
      name={`password-${kind}`}
      type="password"
      placeholder="At least 6 characters."
      value={text}
      onChange={onChange}
      error={error}
      min={6}
    />
  );
};

const PasswordConfField: FieldComponent = ({ text, onChange, kind, error }) => {
  return (
    <TextField
      spellCheck={false}
      label="Confirm Password"
      name={`passwordConf-${kind}`}
      type="password"
      value={text}
      placeholder="Same as your password."
      min={6}
      onChange={onChange}
      error={error}
    />
  );
};

const EmailField: FieldComponent = ({ text, onChange, kind, error }) => {
  return (
    <TextField
      autoComplete={false}
      label="Email address"
      name={`email-${kind}`}
      type="email"
      value={text}
      placeholder="e.g. name@business.com"
      onChange={onChange}
      error={error}
      spellCheck={false}
    />
  );
};

export { PasswordField, PasswordConfField, EmailField };
