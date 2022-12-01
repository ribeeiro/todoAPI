import StyledHeader from './components/Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<StyledHeader />}
        >
          <Route
            path="sign-up"
            element={<SignUp />}
          />
          <Route
            path="sign-in"
            element={<SignIn />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
