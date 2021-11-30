import React, { useState } from 'react';

const tagLists = ['all', 'javascript', 'html', 'css', 'typescript'];

function TagLists(props) {
  const [tagsOn, setTagsOn] = useState(['all']);
  const onClick = (e) => {
    console.log('start', tagsOn);
    if (tagsOn.includes(e.target.className) === true) {
      return tagsOn.splice(tagsOn.indexOf(e.target.className), 1);
    }
    setTagsOn([...tagsOn, e.target.className]);
    console.log('end', tagsOn);
    // callback 이 수행되기 전에 log가 출력되기 때문에 나오는게 없다.
  };
  const onChange = (e) => {
    console.log(e);
  };
	const 
  return (
    <div>
      <h2>Post</h2>
      <div>
        <ul>
          {tagLists.map((tag) => (
            <li className={tag} key={tag} onClick={onClick} onChange={onChange}>
              {tag}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default TagLists;
