import React from 'react';
function HeaderSection(props) {
  return (
    <div className='headerForm'>
      <div className='headerLogo'>
        <a href='/'>
          <h1>DeanJay</h1>
        </a>
      </div>
      <div className='headerSocialLink'>
        <a href='#'>Git</a>
        <a href='#'>Redit</a>
        <a href='#'>Twitter</a>
        <a href='#'>LinkedIn</a>
      </div>
    </div>
  );
}

export default HeaderSection;
