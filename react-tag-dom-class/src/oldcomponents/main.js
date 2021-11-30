import React from 'react';
import './comp.css';

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

function Main() {
  return (
    <div>
      <ul id='item__lists'>
        {data.items.map((item) => {
          return (
            <li className={['item', ...item.tag].join(' ')} key={item.title}>
              <p className='task__title'>{item.title}</p>
              <ul className='tag__lists item__tag'>
                {item.tag.map((tag) => {
                  return (
                    <li className={['tag', tag].join(' ')} key={tag}>
                      #{tag}
                    </li>
                  );
                })}
              </ul>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
export default Main;
