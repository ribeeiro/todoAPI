import styled from 'styled-components';
import { Outlet, Link, useLocation } from 'react-router-dom';

function Header({ className }: { className?: string }) {
  const { pathname } = useLocation();

  return (
    <>
      <header className={className}>
        <h1>toDo</h1>
        {/* eslint-disable */
          pathname == '/sign-in' ? (
          <Link to="/sign-up"> Criar Conta </Link>
          ) : (
            <Link to="/sign-in"> Login </Link>
            )
            /* eslint-enable */}
      </header>
      <Outlet />
    </>
  );
}

const StyledHeader = styled(Header)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  & ul {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

export default StyledHeader;
