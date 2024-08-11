import styled from "styled-components";

const Container = styled.div`
  background-color: ${(props) => props.theme.bgColor};
`;

const H1 = styled.h1`
  color: ${(props) => props.theme.textColor};
`;

interface DummyProps {
  text: string;
  active?: boolean;
}

function Dummy({ text, active = false }: DummyProps) {
  return <h1>{text}</h1>;
}

function App() {
  // 이 패턴은 오직 ReactJS를 위한 것
  // React.원하는 이벤트<HTML요소>
  const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    // event
  };

  return (
    <Container>
      <Dummy active text="hello" />
      {/* 위랑 아래랑 똑같음 */}
      <Dummy active={true} text="hello" />
      <H1>Protected</H1>
      <form>
        <button onClick={onClick}>click me</button>
      </form>
    </Container>
  );
}

export default App;
