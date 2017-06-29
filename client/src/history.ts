import { createBrowserHistory } from 'history';
/*
This is the base history that will be used to start the app and we will refer 
to it throughout the application with 'import history from '../history' and 
history.push('/somepath'); See:
https://stackoverflow.com/questions/42672842/how-to-get-history-on-react-router-v4
*/
export default createBrowserHistory();
