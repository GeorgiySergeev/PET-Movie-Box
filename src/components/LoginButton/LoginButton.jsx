import { CiLogin } from 'react-icons/ci';
import css from './LoginButton.module.css';

function LoginButton() {
  return (
    <button className={css.loginContainer}>
      <p>Login</p>
      <CiLogin style={{ display: 'block' }} />
    </button>
  );
}

export default LoginButton;
