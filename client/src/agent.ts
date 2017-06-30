import axios from 'axios';

const Auth = {
  current: () => axios.get('/user'),
  login: (payload: LoginPayload) => axios.post('/auth/login', payload),
  signup: (payload: SignupPayload) => axios.post('/auth/signup', payload)
};

export default { Auth };
