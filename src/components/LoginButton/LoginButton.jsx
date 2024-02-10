import { CiLogin } from 'react-icons/ci';
import css from './LoginButton.module.css';

function LoginButton({ text, onClick, user }) {
  return (
    <button onClick={onClick} className={css.loginContainer}>
      <p style={{ color: 'rgb(49, 208, 170)', fontSize: 24 }}>{text}</p>
      <h4>{user}</h4>
      <CiLogin style={{ display: 'block', width: 28 }} />
    </button>
  );
}

export default LoginButton;
