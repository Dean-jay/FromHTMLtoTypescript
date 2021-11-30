class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isToggleOn: true };

    // 콜백에서 `this`가 작동하려면 아래와 같이 바인딩 해주어야 합니다.
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState((prevState) => ({
      isToggleOn: !prevState.isToggleOn,
    }));
  }

  render() {
    return (
      <button onClick={this.handleClick}>
        {this.state.isToggleOn ? 'ON' : 'OFF'}
      </button>
    );
  }
}
const tagLists = [
  { name: 'all', key: '0' },
  { name: 'javascript', key: '1' },
  { name: 'nodejs', key: '2' },
  { name: 'typescript', key: '3' },
  { name: 'html', key: '4' },
  { name: 'go', key: '5' },
  { name: 'css', key: '6' },
  { name: 'reactjs', key: '7' },
  { name: 'vscode', key: '8' },
];
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

function Header(props) {
  function handleSubmit(e) {
    e.preventDefault();
    console.log(e.target);
  }
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
        <ul className='tag__lists' key='32' id='search__tag'>
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

function App() {
  return (
    <div>
      <Header name='Jay' />
      <Main />
      <Toggle />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
