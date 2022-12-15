import styled from "styled-components";

function Header() {
  return (
    <StHeader>
      <div>ToDoList ver2.0</div>
      <div>이학경</div>
    </StHeader>
  );
}

const StHeader = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 25px;
`;

export default Header;
