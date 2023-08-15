import { useCallback, useLayoutEffect, useState } from 'react';

function useTheme() {
  const [dataTheme, setTheme] = useState('light');

  const onChangeDataTheme = useCallback(() => {
    const updatedTheme = dataTheme === 'light' ? 'dark' : 'light';
    setTheme(updatedTheme);
    localStorage.setItem('dataTheme', updatedTheme);
    document.documentElement.setAttribute('data-theme', updatedTheme);
  }, [dataTheme]);

  useLayoutEffect(() => {
    const savedTheme = localStorage.getItem('dataTheme');
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.setAttribute('data-theme', savedTheme);
    }
  }, []);

  return {
    dataTheme,
    onChangeDataTheme,
  };
}

export default useTheme;
