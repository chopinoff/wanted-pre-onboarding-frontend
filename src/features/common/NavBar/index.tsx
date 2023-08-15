import React, { useContext, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ThemeContext } from 'App';

function NavBar() {
  const navigate = useNavigate();
  const [accessToken, setAccessToken] = useState<string | null>(window.localStorage.getItem('accessToken'));
  const { dataTheme, onChangeDataTheme } = useContext(ThemeContext);

  function handleClickLogout() {
    window.localStorage.removeItem('accessToken');
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
        <button onClick={onChangeDataTheme}>gg</button>
        {dataTheme}
      </nav>
    </header>
  );
}

export default NavBar;
