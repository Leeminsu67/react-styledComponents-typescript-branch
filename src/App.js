import styled, { keyframes } from "styled-components";

// const Father = styled.div`
//   display: flex;
// `;

// const BoxOne = styled.div`
//   width: 100px;
//   height: 100px;
//   background-color: teal;
// `;

// const BoxTwo = styled.div`
//   width: 100px;
//   height: 100px;
//   background-color: tomato;
// `;

// props를 활용하는 방법
// const Box = styled.div`
//   width: 100px;
//   height: 100px;
//   background-color: ${(props) => props.bgColor};
// `;

// // 기존 만들었던 스타일 컴포넌트에 모든 속성들을 들고와서 다른 속성을 더해준다.
// const Circle = styled(Box)`
//   border-radius: 50%;
// `;

// // 백틱 안에 들어가는 것은 CSS 코드로 작성
// // Box로 부터 확장
// const Text = styled.span`
//   color: white;
// `;

// 컴포넌트의 태그를 바꾸고 싶은데 스타일은 바꾸고 싶지 않을 때 어떤 일이 일어날까
// const Father = styled.div`
//   display: flex;
// `;

// // 우리는 버튼 요소를 사용하고 싶지 않다.
// // 요소를 바꿀려면 어떻게 해야하는가?
// const Btn = styled.button`
//   color: white;
//   background-color: tomato;
//   border: 0;
//   border-radius: 15px;
// `;

// 여러개의 속성에 한번에 다 줄때
const Input = styled.input.attrs({ required: true, minLength: 10 })`
  background-color: tomato;
`;

// const Link = styled(Btn)``

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

// styled component 애니메이션
const rotationAnimation = keyframes`
  0% {
    transform: rotate(0deg);
    border-radius: 0px;
  }
  50%{
    border-radius: 100px;
  }
  100%{
    transform: rotate(360deg);
    border-radius: 0px;
  }
`;

const Emoji = styled.span`
  font-size: 36px;
`;

const Box = styled.div`
  height: 200px;
  width: 200px;
  background-color: tomato;
  animation: ${rotationAnimation} 1s linear infinite;
  display: flex;
  justify-content: center;
  align-items: center;
  /* span {
    font-size: 36px;
    &:hover {
      font-size: 48px;
    }
    &:active {
      opacity: 0;
    }
  } */

  /* pseudo selector */
  ${Emoji} {
    &:hover {
      font-size: 98px;
    }
  }

  /* 똑같음 */
  /* span:hover {
    font-size: 40px;
  }
  span:active {
    opacity: 0;
  } */
`;

function App() {
  return (
    // <Father>
    //   <BoxOne>
    //     <Text>Hello</Text>
    //   </BoxOne>
    //   <BoxTwo />
    //   <Box bgColor={"teal"}>
    //     <Text>Hello</Text>
    //   </Box>
    //   <Circle bgColor={"tomato"} />
    //   <Btn>Log in</Btn>
    //   styled 컴포넌트로 button으로 했지만 as를 props로 내려준다면 태그 이름이 바뀐다.
    //   <Btn as="a" href="/">
    //     Log in
    //   </Btn>
    // <Input />
    // <Input />
    // <Input />
    // <Input />
    // <Input />
    // </Father>
    <Wrapper>
      <Box>
        {/* <span>😀</span> */}
        {/* <p>😀</p> */}
        <Emoji>😀</Emoji>
      </Box>
      <Emoji>😀</Emoji>
    </Wrapper>
  );
}

export default App;
