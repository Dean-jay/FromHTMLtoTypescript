import React from 'react';
import './postListSection.css';

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
  return (
    <div>
      <ul>
        {data.items.map((item) => (
          <li key={item.id} className={[...item.tag].join(' ')}>
            <h3>{item.title}</h3>
            <ul>
              {item.tag.map((tag) => (
                <li key={tag} id='tag' className={tag}>
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
