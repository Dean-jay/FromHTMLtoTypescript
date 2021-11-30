import React from 'react';

function TagLists(params) {
  return (
    <div>
      <h2>Post</h2>
      <div>
        <ul>
          <li
            className={`all ${params.allTagOn ? 'on' : 'off'}`}
            key='all'
            id='tag'
            onClick={params.onClick}
          >
            all
          </li>
          <li
            className={`javascript ${params.javascriptTagOn ? 'on' : 'off'}`}
            key='javascript'
            id='tag'
            onClick={params.onClick}
          >
            javascript
          </li>
          <li
            className={`nodejs ${params.nodejsTagOn ? 'on' : 'off'}`}
            key='nodejs'
            id='tag'
            onClick={params.onClick}
          >
            nodejs
          </li>
          <li
            className={`typescript ${params.typescriptTagOn ? 'on' : 'off'}`}
            key='typescript'
            id='tag'
            onClick={params.onClick}
          >
            typescript
          </li>
        </ul>
      </div>
    </div>
  );
}

export default TagLists;
