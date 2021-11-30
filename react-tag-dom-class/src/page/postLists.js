import React, { useEffect, useState } from 'react';
import HeaderSection from '../components/headerSection';
import PostListSection from '../components/postListSection';
import TagLists from '../components/tagLists';

function PostLists(props) {
  // How to pass parents value to child??
  const [allTagOn, setAllTagOn] = useState(true);
  const [javascriptTagOn, setJavascriptTagOn] = useState(false);
  const [typescriptTagOn, setTypescriptTagOn] = useState(false);
  const [nodejsTagOn, setNodejsTagOn] = useState(false);

  const onClick = (e) => {
    if (e.target.innerText === 'javascript') {
      javascriptTagOn ? setJavascriptTagOn(false) : setJavascriptTagOn(true);
    } else if (e.target.innerText === 'nodejs') {
      nodejsTagOn ? setNodejsTagOn(false) : setNodejsTagOn(true);
    } else if (e.target.innerText === 'typescript') {
      typescriptTagOn ? setTypescriptTagOn(false) : setTypescriptTagOn(true);
    }
  };
  useEffect(() => {
    [javascriptTagOn, typescriptTagOn, nodejsTagOn].includes(true)
      ? setAllTagOn(false)
      : setAllTagOn(true);
  });
  return (
    <div>
      <HeaderSection />
      <TagLists
        onClick={onClick}
        allTagOn={allTagOn}
        javascriptTagOn={javascriptTagOn}
        typescriptTagOn={typescriptTagOn}
        nodejsTagOn={nodejsTagOn}
      />
      <PostListSection
        onClick={onClick}
        allTagOn={allTagOn}
        javascriptTagOn={javascriptTagOn}
        typescriptTagOn={typescriptTagOn}
        nodejsTagOn={nodejsTagOn}
      />
    </div>
  );
}

export default PostLists;
