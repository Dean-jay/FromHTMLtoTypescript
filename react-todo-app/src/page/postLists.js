import React from 'react';
import HeaderSection from '../components/headerSection';
import PostListSection from '../components/postListSection';
import TagLists from '../components/tagLists';

function PostLists(props) {
  const tagArrCon = () => {};
  return (
    <div>
      <HeaderSection />
      <TagLists />
      <PostListSection tagArr={tagArrCon} />
    </div>
  );
}

export default PostLists;
