# todolist 만들기 with Redux

Redux,react-router-dom,styled-components를 활용하여 간단한 todolist를 만들었습니다.
<br />
<br />

### **이미지 클릭시 링크로 이동!**

[![image](./src/assets/thumb.PNG)](https://redux-to-do-ver2-0-8rdb6csad-suwoncityboy.vercel.app/ "todolist로이동")
<br />
<br />

# 폴더구조

- src

  - assets
  - components
    - Form.jsx
    - Header.jsx
    - Layout.jsx
    - List.jsx
  - pages
    - Details.jsx
    - Home.jsx
  - redux
    - config
      - configstore.js
    - modules
      - todos.js
  - shared
    - Router.jsx
  - App.js
  - index. js

  <br />

# features : 구현 기능

- Create Todo : 투두 만들기
- Read Todos, Todo : 투두 목록, 상세페이지 읽기
- Update Todo : 투두 업데이트(완료, 취소)
- Delete Todo : 투두 삭제

# 느낀점

- redux를 통해서 전역으로 상태를 관리를 해서 기존 리액트로만 했을때의 문제점인 `props drilling`을 해결할 수 있어서 좋았다.
- 이번프로젝트를 통해서 useState()훅 사용보다 redux로 state를 관리하는게 훨씬 편하다는것을 느꼈다.
- map메서드 사용할때 key 넣는 것을 생활화 하자.
- console.log를 통해서 코드의 흐름을 잘 파악하자.
- detail 컴포넌트에 id값에 맞게 title과 body가 잘 나와야 하는데 나오지 않았다. useRef() 훅 말고 nextId라이브러리를 사용한 후 코드를 리팩토링 해서 문제를 해결했다.
