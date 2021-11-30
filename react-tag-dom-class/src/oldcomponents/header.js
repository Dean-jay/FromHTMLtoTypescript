import React, { useEffect, useState } from 'react';
import './comp.css';

const tagLists = [
  { name: 'all', key: '0', isOn: 'on' },
  { name: 'javascript', key: '1', isOn: 'off' },
  { name: 'nodejs', key: '2', isOn: 'off' },
  { name: 'typescript', key: '3', isOn: 'off' },
  { name: 'html', key: '4', isOn: 'off' },
  { name: 'go', key: '5', isOn: 'off' },
  { name: 'css', key: '6', isOn: 'off' },
  { name: 'reactjs', key: '7', isOn: 'off' },
  { name: 'vscode', key: '8', isOn: 'off' },
];

function Header(props) {
  // tagArr에 on/off 기능을 넣어준다.
  // const tagArr = ['all'];
  const [tagging, setTagging] = useState(tagLists);
  function handleSubmit(e) {
    e.preventDefault();
    console.log(e.target);
    if (e.target.className === 'tag__btn') {
      setTagging(
        tagging.map((tagObj) => {
          if (tagObj.name === e.target.id && tagObj.isOn === 'on') {
            return (tagObj.isOn = 'off');
          } else if (tagObj.name === e.target.id && tagObj.isOn === 'off') {
            return (tagObj.isOn = 'on');
          }
        })
      );
      tagging.map((tag) => {
        console.log(tag.name, tag.isOn);
      });
    }
  }
  useEffect(() => {
    tagging.map((tagObj) => {
      if (tagObj.isOn === 'on') {
        document.getElementById(tagObj.name).style.background = '#212121';
      } else return;
    });
  });

  const tagStyle = {
    cursor: 'pointer',
  };
  return (
    <div>
      <div>
        <div className='input__task'>
          <h1>Hello, {props.name}</h1>
          <input type='text' id='input__title' placeholder='title' />
          <input type='text' id='input__task' placeholder='task' />
          <input type='text' id='input__tag' placeholder='#tag' />
          <button className='add__button'>Add</button>
        </div>
        {/* tag */}
        <ul className='tag__lists' id='search__tag'>
          {tagLists.map((tag) => {
            return (
              <li className='tag' key={tag.key} onClick={handleSubmit}>
                <p className='tag__btn' style={tagStyle} id={tag.name}>
                  #{tag.name}
                </p>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default Header;
