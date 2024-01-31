import { CiLogin } from 'react-icons/ci';
import css from './LoginButton.module.css';

function LoginButton({ text, onClick, user }) {
  return (
    <button onClick={onClick} className={css.loginContainer}>
      <p>{text}</p>
      <h4>{user}</h4>
      <CiLogin style={{ display: 'block' }} />
    </button>
  );
}

export default LoginButton;
