import { Route, Routes } from 'react-router-dom';
import PageHome from 'pages/PageHome';
import PageSignUp from 'pages/PageSignUp';
import PageSignIn from 'pages/PageSignIn';
import PageTodo from 'pages/PageTodo';

const CustomRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<PageHome />} />
      <Route path="/signup" element={<PageSignUp />} />
      <Route path="/signin" element={<PageSignIn />} />
      <Route path="/todo" element={<PageTodo />} />
    </Routes>
  );
};

export default CustomRoutes;
