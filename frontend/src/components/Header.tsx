import styled from 'styled-components';
import { Outlet, Link } from 'react-router-dom';

function Header({ className }: { className?: string }) {
  return (
    <>
      <header className={className}>
        <h1>toDo</h1>
        <Link to="/sign-in"> Criar Conta </Link>
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
