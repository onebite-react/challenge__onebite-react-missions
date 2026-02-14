function mergeActors(...movies) {
  const allActors = movies.reduce((acc, cur) => [...acc, ...cur.actors], []);
  const uniqueActors = [...new Set(allActors)];
  console.log("전체 출연진:", uniqueActors);
}

mergeActors(
  { title: "하얼빈", actors: ["현빈", "박정민", "전여빈"] },
  { title: "소방관", actors: ["현빈", "유아인", "공효진"] },
  { title: "서울의 봄", actors: ["황정민", "정우성", "박정민"] },
);

// 출력 결과 :
// 전체 출연진: ["현빈", "박정민", "전여빈", "유아인", "공효진", "황정민", "정우성"]
