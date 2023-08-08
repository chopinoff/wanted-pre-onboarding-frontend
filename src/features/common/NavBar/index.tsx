import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function NavBar() {
  const navigate = useNavigate();
  const [accessToken, setAccessToken] = useState<string | null>(window.localStorage.getItem('accessToken'));

  function handleClickLogout() {
    window.localStorage.clear();
  }

  useEffect(() => {
    setAccessToken(window.localStorage.getItem('accessToken'));
  }, [navigate]);

  return (
    <header>
      <nav>
        <h1>Wanted ToDo</h1>
        <Link to="/todo">Todo</Link>
        {accessToken ? (
          <Link to="/" onClick={handleClickLogout}>
            Logout
          </Link>
        ) : (
          <Link to="/signin">Login</Link>
        )}
      </nav>
    </header>
  );
}

export default NavBar;
