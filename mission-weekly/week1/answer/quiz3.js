function calcTicketPrice(price, discountFn, memberName) {
  const finalPrice = (discountFn && discountFn(price)) || price;
  const name = memberName || "비회원";
  console.log(`${name} - 최종 가격 : ${finalPrice}원`);
}

calcTicketPrice(15000, (price) => price * 0.8, "김효빈");
// 출력 결과 :
// 김효빈 - 최종 가격 : 12000원

calcTicketPrice(15000, null, "이정환");
// 출력 결과 :
// 이정환 - 최종 가격 : 15000원

calcTicketPrice(15000, (price) => price - 3000);
// 출력 결과 :
// 비회원 - 최종 가격 : 12000원
