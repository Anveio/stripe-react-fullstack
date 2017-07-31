// import { LoginAction } from '../actions/login';
// import { LOGIN_FAILURE, LOGIN_SUCCESS } from '../constants';

// const emptyAuthForm: AuthTextField = { text: '', error: null };

// const initialState: LoginForm = {
//   email: emptyAuthForm,
//   password: emptyAuthForm,
//   loading: false
// };

// export default (state = initialState, action: LoginAction): LoginForm => {
//   let partialState: Partial<LoginForm> | undefined;

//   switch (action.type) {
//     case LOGIN_FAILURE:
//       partialState = {
//         email: { text: '', error: action.error.message },
//         password: { text: '', error: action.error.message },
//         loading: false
//       };
//       break;
//     case LOGIN_SUCCESS:
//       partialState = {
//         loading: false
//       };
//       break;
//     default:
//       return state;
//   }
//   return { ...state, ...partialState };
// };
