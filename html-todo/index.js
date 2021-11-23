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

/**
 * 3가지를 받아온다. title, body, tag
 * function : <tag to class>, <class to list>
 */
// <tag to class> : 빈공간을 가진 태그나 2글자 이하는 받지 않는다.
function tagToClass(tag) {
  const tagSortClasses = tag
    .split('#')
    .map((el) => {
      if (el.length < 2) {
        return 'falseTheTagYOURtask';
      } else if (el.trim().split(' ').length > 1) {
        return 'falseTheTagYOURtask';
      }
      return el.trim();
    })
    .filter((word) => word != 'falseTheTagYOURtask');
  return tagSortClasses;
}
// <class to list>
function classToList(classArr) {
  const tagToList = classArr.map((tag) => {
    return `<li class="tag"><p class="tag__btn" id="${tag}">#${tag}</p></li>`;
  });
  return tagToList;
}

// Add 버튼을 눌렀을 때 "둘 다" 동작 해야 한다.
function addItem(title, body, tagArr) {
  const li = document.createElement('li');

  // < mkae tag lists 함수화>
  const itemTagLists = classToList(tagArr);

  li.className = ['item', ...tagArr].join(' ');
  li.innerHTML = `
		<p class="task__title">${title}</p>
		<ul class="tag__lists item__tag">
			${itemTagLists.join('')}
		</ul>
	`;

  const ul = document.getElementById('item__lists');
  ul.appendChild(li);
}
function registData(title, body, tagArr) {
  // id generate...
  const id = 'uuid' + `${Math.trunc(Math.random() * 1000)}`;
  data.items.push({
    id: id,
    tag: tagArr,
    body: body,
    title: title,
  });
}

/**
 * Add button
 */
const addBtn = document.querySelector('.add__button');
addBtn.addEventListener('click', (e) => {
  // bring value
  const title = document.querySelector('#input__title').value;
  const body = document.querySelector('#input__task').value;
  const tag = document.querySelector('#input__tag').value;
  const tagArr = tagToClass(tag);
  console.log(e);
  console.log(title, body, tagArr);
  addItem(title, body, tagArr);
  registData(title, body, tagArr);

  // reset
  document.querySelector('#input__title').value = '';
  document.querySelector('#input__task').value = '';
  document.querySelector('#input__tag').value = '';
  return;
});

/**
 * Add data
 */
function addingData() {
  data.items.map((item) => {
    const title = item.title;
    const body = item.body;
    const tagArr = item.tag;
    addItem(title, body, tagArr);
    return;
  });
}
addingData();

/**
 * sorting with your tag
 * 내가 몇개를 선택했는지 확인해주는게 더 중요하다. 두번 누르면 리셋.
 * P1. 매 클릭 마다 CSS가 깨지는 현상.
 * A1. event.target 설정 구체적으로
 * P2. chooseTagArr 가 empty가 되면 error.
 */
const chooseTagArr = [];
document.addEventListener('click', (e) => {
  console.log(e.target.className);
  if (e.target.className.includes('tag__btn') === false) {
    return;
  }
  // 원본 배열 안에서 off 하기. unmount
  if (chooseTagArr.includes(e.target.id) === true) {
    console.log(e.target.id);
    chooseTagArr.splice(chooseTagArr.indexOf(e.target.id), 1);
    console.log('Tag off');
  } else if (chooseTagArr.includes(e.target.id) === false) {
    chooseTagArr.push(e.target.id);
    console.log('push');
  }

  console.log(chooseTagArr);
  // reset
  classNameReset('high__light');
  // set
  changeTagOn(chooseTagArr);
  return;
});

// reset
function classNameReset(cn) {
  console.log(cn);
  const classNameforReset = document.querySelectorAll(`.${cn}`);
  classNameforReset.forEach((el) => {
    el.classList.remove(cn);
  });
  return;
}

// set : 색이 바뀌는 것 연출
function changeTagOn(tagArr) {
  const itemLi = document.querySelectorAll('.javascript');
  const tags = document.querySelectorAll(tagArr.map((item) => `#${item}`));
  console.log(itemLi);
  console.log(tags);
  // Node list => foreach 사용
  tags.forEach((item) => item.classList.add('high__light'));
  return;
}
