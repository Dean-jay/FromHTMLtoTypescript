import React from 'react';
import cx from 'classnames';

function toggleClassStandard(props) {
  const [toggleClass, setToggleClass] = useState(false);

  return <div className={toggleClass ? 'some-class' : ''} />;
}

function toggleClassLiterals(props) {
  const [toggleClass, setToggleClass] = useState(false);

  return <div className={`some-class ${toggleClass ? 'some-class' : ''}`} />;
}

const Component = () => {
  const [toggleClass, setToggleClass] = useState(false);

  return (
    <button
      className={cx('btn', {
        'btn--primary': toggleClass,
      })}
    >
      Submit
    </button>
  );
};

export default toggleClass;
