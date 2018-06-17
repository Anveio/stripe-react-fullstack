import { ExpressValidatorError } from 'server-response-types';
import { SignupPayload, FormErrorMap } from 'types';
import { AxiosError } from 'axios';

export const resolveSignupErrors = (
  e: undefined | AxiosError
): Partial<FormErrorMap<SignupPayload>> => {
  /**
   * If the error doesn't contain response.data, the server hasn't sent back any
   * actionable error information.
   */
  if (!(e && e.response && e.response.data)) {
    return {};
  }

  const errors = e.response.data;

  /**
   * If the error is a string, it was caught by the User model validator.
   */
  if (typeof errors === 'string') {
    return {
      email: e.response.data
    };

    /**
     * Otherwise, the error is an array of ExpressValidatorErrors.
     */
  } else if (errors instanceof Array) {
    const expressValidatorErrors = e.response.data as ExpressValidatorError[];
    return expressValidatorErrors.reduce(
      (acc: Partial<FormErrorMap<SignupPayload>>, cur) => ({
        ...acc,
        [cur.param]: cur.msg
      }),
      {}
    );
  } else {
    return {};
  }
};
