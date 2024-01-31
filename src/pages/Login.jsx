import { Header } from 'components/Header/Header';
import LoginForm from 'components/LoginForm/LoginForm';
// import { useSelector } from 'react-redux';
// import { selectAuthError } from '../redux/auth/auth-selectors';
// import { Report } from 'notiflix/build/notiflix-report-aio';

const Login = () => {
  // const error = useSelector(selectAuthError);

  // console.log('error', error);

  return (
    <div style={{ maxWidth: 1280, margin: '0 auto' }}>
      <Header></Header>
      <h1>LOGIN PAGE</h1>
      {/* {error && Report.failure('Invalid email or password!')} */}

      <LoginForm />
    </div>
  );
};

export default Login;
