import StyledHeader from './components/Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignUp from './pages/SignUp';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<StyledHeader />}
        >
          <Route
            path="sign-in"
            element={<SignUp />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
