import React, { useEffect } from 'react';

const data = {
  items: [
    {
      id: 'fsatwqhwha231',
      tag: ['javascript', 'nodejs', 'typescript'],
      body: "Hi, I'm Anurag Hazra, a self-taught passionate FrontEnd developer from India, currently working at Razorpay as a FrontEnd engineer. I cannot explain in words.",
      title: 'Your choice',
      thumbnail: './image/thumbnail.jpg',
    },
    {
      id: 'fsatwqhwha232',
      tag: ['html', 'css', 'javascript'],
      body: "Hi, I'm Anurag Hazra, a self-taught passionate FrontEnd developer from India, currently working at Razorpay as a FrontEnd engineer. I cannot explain in words.",
      title: 'My choice',
    },
    {
      id: 'fsatwqhwha233',
      tag: ['go', 'nextjs', 'typescript'],
      body: "Hi, I'm Anurag Hazra, a self-taught passionate FrontEnd developer from India, currently working at Razorpay as a FrontEnd engineer. I cannot explain in words.",
      title: 'last choice',
    },
  ],
};
function PostListSection(props) {
  const onClick = props.onClick;
  const allTagOn = props.allTagOn;
  const javascriptTagOn = props.javascriptTagOn;
  const typescriptTagOn = props.typescriptTagOn;
  const nodejsTagOn = props.nodejsTagOn;

  useEffect(() => {
    const allItems = document.querySelectorAll('li#item');
    const onClassLi = document.querySelectorAll('#item.show');
    const javascriptLi = document.querySelectorAll('#item.javascript');
    const typescriptLi = document.querySelectorAll('#item.typescript');
    const nodejsLi = document.querySelectorAll('#item.nodejs');
    // reset
    onClassLi.forEach((list) => {
      list.classList.remove('show');
      list.classList.add('hide');
    });

    //set
    if (allTagOn === true) {
      allItems.forEach((list) => {
        list.classList.remove('hide');
        list.classList.add('show');
      });
    }
    if (javascriptTagOn === true) {
      javascriptLi.forEach((list) => {
        list.classList.add('show');
        list.classList.remove('hide');
      });
    }
    if (typescriptTagOn === true) {
      typescriptLi.forEach((list) => {
        list.classList.add('show');
        list.classList.remove('hide');
      });
    }
    if (nodejsTagOn === true) {
      nodejsLi.forEach((list) => {
        list.classList.add('show');
        list.classList.remove('hide');
      });
    }
  });
  return (
    <div>
      <ul>
        {data.items.map((item) => (
          <li key={item.id} className={`${[...item.tag].join(' ')}`} id='item'>
            <h3>{item.title}</h3>
            <ul>
              {item.tag.map((tag) => (
                <li key={tag} id='tag' className={tag} onClick={onClick}>
                  {tag}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PostListSection;
