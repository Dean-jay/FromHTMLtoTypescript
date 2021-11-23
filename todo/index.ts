interface ItemThumb {
  id: string;
  title: string;
  tag: string[];
  thumnail?: string;
}
type ItemData = {
  id: string;
  tag: string[];
  body: string;
  title: string;
  thumbnail?: string;
};
const itemData1: ItemData = {
  id: 'fsatwqhwha231',
  tag: ['javascript', 'nodejs', 'typescript'],
  body: `Hi, I'm Anurag Hazra, a self-taught passionate FrontEnd developer from India, currently working at Razorpay as a FrontEnd engineer. I've been building stuff on the web since when I was in 6th standard, I've made countless side projects and I also posses magical powers of using react to build delightful user interfaces.

  I also love doing open source development, I actively maintain various notable open source projects with over,
  30k+ stars on GitHub and 50m+ hits. It gives me a wonderful feeling of achievement and joy which I cannot explain in words.`,
  title: 'Your choice',
  thumbnail: './image/thumbnail.jpg',
};
const itemData2: ItemData = {
  id: 'fsatwqhwha231',
  tag: ['html', 'css', 'javascript'],
  body: `Hi, I'm Anurag Hazra, a self-taught passionate FrontEnd developer from India, currently working at Razorpay as a FrontEnd engineer. I've been building stuff on the web since when I was in 6th standard, I've made countless side projects and I also posses magical powers of using react to build delightful user interfaces.

      I also love doing open source development, I actively maintain various notable open source projects with over,
      30k+ stars on GitHub and 50m+ hits. It gives me a wonderful feeling of achievement and joy which I cannot explain in words.`,
  title: 'My choice',
};
const itemData3: ItemData = {
  id: 'fsatwqhwha231',
  tag: ['go', 'nextjs', 'typescript'],
  body: `Hi, I'm Anurag Hazra, a self-taught passionate FrontEnd developer from India, currently working at Razorpay as a FrontEnd engineer. I've been building stuff on the web since when I was in 6th standard, I've made countless side projects and I also posses magical powers of using react to build delightful user interfaces.

      I also love doing open source development, I actively maintain various notable open source projects with over,
      30k+ stars on GitHub and 50m+ hits. It gives me a wonderful feeling of achievement and joy which I cannot explain in words.`,
  title: 'last choice',
};

const items: object[] = [itemData1, itemData2, itemData3];

// 1. Select the div element using the id property
const itemLists = document.getElementById('item__lists');
// 2. Create a new <p></p> element programmatically
const li = document.createElement('li');
(function makeTag() {
  const item = document.createElement('li');
  const items = document.createElement('ul');
  let itemTagInnerText: string;

  itemTagInnerText = itemData1.tag
    .map(el => {
      `${el}`;
    })
    .join();
  console.log(itemTagInnerText);
});
// 3. Add the text content
// p.textContent = 'Hello, World!';
// 4. Append the p element to the div element
// app?.appendChild(div);

li.className = 'item ' + itemData1.tag.join(' ');
li.textContent = itemData1.title;
itemLists?.appendChild(li);
