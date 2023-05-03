import React, { FC } from 'react';
import Post from '../models/postModels';

interface TestCardProps {
  post: Post;
}

const TestCard: FC<TestCardProps> = ({ post }) => {
  return (
    <div>
      <div className="text-sm font-medium text-red-500 pb-3">{post.title}</div>
      <div className="text-xs">{post.body}</div>
    </div>
  );
};

export default TestCard;

// 테일윈드 font 관련 문서 https://tailwindcss.com/docs/font-weight

// className 의 text-sm,xs는 css의 'font-size: 12px, 14px' font-medium은 'font-weight: 500' text-red-500은 'color: red' pb-3은 'padding-bottom: ##px' (line 11~12)
