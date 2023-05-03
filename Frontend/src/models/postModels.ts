type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

export default Post;

// features/posts/postSlice.ts 파일에 JSON_PLACEHOLDER_API (line 5) 에서 받아온 데이터의 키값들의 타입을 지정해줌
// 추후에 상세 페이지에서 상품정보등등의 데이터를 받아야할때 아마도 models폴더 하위에 itemModels.ts 등의 파일을 만들어 백엔드에서 보내주는 키값의 타입을 지정해주면될듯
