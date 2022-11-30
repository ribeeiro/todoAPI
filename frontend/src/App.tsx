import StyledHeader from './components/Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
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
            path="sign-in"
            element={<SignIn />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
