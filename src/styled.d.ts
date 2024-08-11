// 이 파일은 일종의 우리가 이전에 설치해 놓은 이 파일을 override(덮어쓰기) 할 파일임
// 우리는 우리 테마에 사용할 타입들을 포함시키고 싶은 거니까
import "styled-components";

// styled components를 import하고
// 내 styled components의 테마 정의를 확장하는 것
declare module "styled-components" {
  // 우리ㅏㄱ 이전에 prop들을 위해서 만들어봤던 인터페이스랑 매우 유사
  export interface DefaultTheme {
    textColor: string;
    bgColor: string;
    btnColor: string;
  }
}
