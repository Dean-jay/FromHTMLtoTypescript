"use strict";
// 1. Select the div element using the id property
var app = document.getElementById('app');
// 2. Create a new <p></p> element programmatically
var div = document.createElement('div');
var itemData1 = {
    id: 'fsatwqhwha231',
    tag: ['javascript', 'nodejs', 'typescript'],
    body: "Hi, I'm Anurag Hazra, a self-taught passionate FrontEnd developer from India, currently working at Razorpay as a FrontEnd engineer. I've been building stuff on the web since when I was in 6th standard, I've made countless side projects and I also posses magical powers of using react to build delightful user interfaces.\n\n  I also love doing open source development, I actively maintain various notable open source projects with over,\n  30k+ stars on GitHub and 50m+ hits. It gives me a wonderful feeling of achievement and joy which I cannot explain in words.",
    title: 'Your choice',
    thumbnail: './image/thumbnail.jpg',
};
var itemData2 = {
    id: 'fsatwqhwha231',
    tag: ['html', 'css', 'javascript'],
    body: "Hi, I'm Anurag Hazra, a self-taught passionate FrontEnd developer from India, currently working at Razorpay as a FrontEnd engineer. I've been building stuff on the web since when I was in 6th standard, I've made countless side projects and I also posses magical powers of using react to build delightful user interfaces.\n\n      I also love doing open source development, I actively maintain various notable open source projects with over,\n      30k+ stars on GitHub and 50m+ hits. It gives me a wonderful feeling of achievement and joy which I cannot explain in words.",
    title: 'My choice',
};
var itemData3 = {
    id: 'fsatwqhwha231',
    tag: ['go', 'nextjs', 'typescript'],
    body: "Hi, I'm Anurag Hazra, a self-taught passionate FrontEnd developer from India, currently working at Razorpay as a FrontEnd engineer. I've been building stuff on the web since when I was in 6th standard, I've made countless side projects and I also posses magical powers of using react to build delightful user interfaces.\n\n      I also love doing open source development, I actively maintain various notable open source projects with over,\n      30k+ stars on GitHub and 50m+ hits. It gives me a wonderful feeling of achievement and joy which I cannot explain in words.",
    title: 'last choice',
};
var items = [itemData1, itemData2];
div.textContent = itemData1.title;
app === null || app === void 0 ? void 0 : app.appendChild(div);
//# sourceMappingURL=index.js.map