## 과제) 한입 가계부 앱 생성하기

## 미션 제출방법 안내

미션을 다 수행했다면

아래 2가지 방법 중 편한 방법으로 제출 해 주세요 😀

가능하면 둘 다 해주시면 더 좋을 것 같습니다 ...!

1. 실행 결과 화면 캡쳐 (코드 리뷰는 불가능합니다)
2. GitHub에 프로젝트 업로드 후 링크로 공유

## 미션 소개

오늘의 미션은 "한입 가계부" 프로젝트를 위한 리액트 앱을 생성하고, 요구사항에 맞도록 페이지 라우팅을 설정하는 것 입니다.

"한입 가계부"는 아래 그림처럼 자신의 지출/수입 내역을 기록하고 확인할 수 있는 간단한 웹 서비스입니다. 앞으로 강의에서 만들어 나갈 "감정 일기장"과 거의 동일한 기능들을 제공하므로 복습하시기에 아주 좋은 프로젝트입니다.

![](https://i.imgur.com/O4PuFka.png)
![](https://i.imgur.com/OK2Rbm5.png)
![](https://i.imgur.com/hjJ1rTq.png)

아래에 소개해드리는 요구사항대로 한입 가계부를 위한 리액트 앱을 생성하고 라우팅을 설정해 주세요

### 요구사항 1. 리액트 앱 생성하기

강의에서 안내드린 방식대로 새로운 리액트 앱을 생성하고 불필요한 파일 및 코드를 제거합니다.

이때 프로젝트 이름은 onebite-account-book 혹은 자유롭게 설정합니다.

### 요구사항 2. 페이지 라우팅 설정하기

React Router 라이브러리를 이용해 아래의 요구사항에 맞도록 페이지 라우팅을 설정합니다.

- "/" -> src/pages/Home.jsx
- "/new-transaction" -> src/pages/NewTransaction.jsx
- "/edit-transaction/:id" -> src/pages/EditTransaction.jsx

페이지 컴포넌트에는 페이지 이름만 텍스트로 렌더링 하면 됩니다.

ex) Home 페이지에는 \<h1>Home\</h1>만 렌더링 하면 됩니다.

> [정답 보기](https://github.com/winterlood/onebite-react-challenge/blob/main/missions/day18/answer)
