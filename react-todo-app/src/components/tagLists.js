import React, { useEffect, useState } from 'react';
import './tagLists.css';

function TagLists(props) {
  const [allTagOn, setAllTagOn] = useState(true);
  const [javascriptTagOn, setJavascriptTagOn] = useState(false);
  const [typescriptTagOn, setTypescriptTagOn] = useState(false);
  const [nodejsTagOn, setNodejsTagOn] = useState(false);
  // tagArr가 내가 보내주어야될 props
  const tagArr = {
    javascript: javascriptTagOn,
    typescript: typescriptTagOn,
    nodejs: nodejsTagOn,
  };

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
    const checkTag = [tagArr.javascript, tagArr.nodejs, tagArr.typescript];
    checkTag.includes(true) ? setAllTagOn(false) : setAllTagOn(true);
  });
  return (
    <div>
      <h2>Post</h2>
      <div>
        <ul>
          <li
            className={`all ${allTagOn ? 'on' : 'off'}`}
            key='all'
            id='tag'
            onClick={onClick}
          >
            all
          </li>
          <li
            className={`javascript ${javascriptTagOn ? 'on' : 'off'}`}
            key='javascript'
            id='tag'
            onClick={onClick}
          >
            javascript
          </li>
          <li
            className={`nodejs ${nodejsTagOn ? 'on' : 'off'}`}
            key='nodejs'
            id='tag'
            onClick={onClick}
          >
            nodejs
          </li>
          <li
            className={`typescript ${typescriptTagOn ? 'on' : 'off'}`}
            key='typescript'
            id='tag'
            onClick={onClick}
          >
            typescript
          </li>
          {/* <li
            className={`html ${htmlTagOn ? 'on' : 'off'}`}
            key='html'
            id='tag'
            onClick={onClick}
          >
            html
          </li>
          <li
            className={`css ${cssTagOn ? 'on' : 'off'}`}
            key='css'
            id='tag'
            onClick={onClick}
          >
            css
          </li> */}
        </ul>
      </div>
    </div>
  );
}

export default TagLists;
