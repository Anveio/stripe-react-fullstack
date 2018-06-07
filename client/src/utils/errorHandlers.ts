import { ExpressValidatorError } from 'server-response-types';

// tslint:disable-next-line:no-any
export const resolveSignupErrors = (e: any): ExpressValidatorError[] => {
  /**
   * If the error doesn't contain response.data, the server hasn't sent back any
   * actionable error information.
   */
  if (!(e && e.response && e.response.data)) {
    return [];
  }

  const errors = e.response.data;

  /**
   * If the error is a string, it was caught by the User model validator.
   */
  if (typeof errors === 'string') {
    return [
      {
        param: 'email',
        msg: e.response.data
      }
    ];
    /**
     * Otherwise, the error is an array of ExpressValidatorErrors.
     */
  } else {
    return e.response.data;
  }
};
