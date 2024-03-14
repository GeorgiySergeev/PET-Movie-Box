import { useSelector } from 'react-redux';
import { selectIsLogedIn } from '../../redux/auth/auth-selectors';

import { CiLogin } from 'react-icons/ci';
import css from './LoginButton.module.css';

function LoginButton({ text, onClick, user }) {
  const isLoggedIn = useSelector(selectIsLogedIn);

  return (
    <button onClick={onClick} className={css.loginContainer}>
      <p style={{ color: 'rgb(49, 208, 170)', fontSize: 24 }}>{text}</p>
      <h4 style={{ color: 'white' }}>{user}</h4>
      {isLoggedIn ? (
        <CiLogin style={{ display: 'block', width: 28, color: '#f33f3f' }} />
      ) : (
        ''
      )}
    </button>
  );
}

export default LoginButton;
