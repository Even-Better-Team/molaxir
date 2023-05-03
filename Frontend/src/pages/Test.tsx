import React, { useEffect, FC } from 'react';
import { useAppSelector, useAppDispatch } from '../hooks/useTypedSelector';
import { increment, decrement } from '../features/counters/counterSlice';
import { getPosts } from '../features/posts/postSlice';
import TestCard from './TestCard';

const Test: FC = () => {
  const dispatch = useAppDispatch();

  //postSlice.ts에 저장한 'getPosts' action을 사용 (line 12~14)

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  // 아래 state.posts 는 store.ts에 정의된 postSlice (postSlice.ts)

  const { data, error, loading } = useAppSelector((state) => state.posts);

  // 아래 state.counter.count 는 store.ts에 정의된 counterSlice의 count (counterSlice.ts)

  const count = useAppSelector((state) => state.counter.count);

  // 아래는 counterSlice.ts에 저장된 increment와 decrement의 ''전역''에서 사용 예시

  const handleIncrement = () => {
    dispatch(increment());
  };

  const handleDecrement = () => {
    dispatch(decrement());
  };

  return (
    <div className="bg-yellow-100">
      <div className="grid grid-cols-4 md:grid-cols-6">
        {loading ? (
          <div> loading ....</div>
        ) : (
          data &&
          data.map((post) => (
            <div className=" border " key={post.id}>
              <TestCard post={post} />
            </div>
          ))
        )}
      </div>
      <div className="flex flex-col items-center">
        <p className=" text-xl">Count: {count}</p>
        <div>
          <button className="pr-3" onClick={handleIncrement}>
            UP
          </button>
          <button onClick={handleDecrement}>DOWN</button>
        </div>
      </div>
    </div>
  );
};

export default Test;

//참고 문헌
// 리덕스 툴킷   https://redux-toolkit.js.org/introduction/getting-started,
// 테일윈드 css https://tailwindcss.com/docs/installation

// className의 bg-yellow-100 은 css의 'background-color: yellow' yellow 뒤의 숫자는 50~950까지 가능하며 클수록 색이 진함 (line 35)
// grid 관련 문서 https://tailwindcss.com/docs/display#grid (line 36)
// md:grid-cols-6 의 'md' 는  브라우저의 중간사이즈이상에서 gird-cols-6 적용, 사이즈를 중간 이하로 줄이면 gird-cols-4 가 적용됨 확인요망!! (line 36)
