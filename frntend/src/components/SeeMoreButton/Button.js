import React from 'react';
import './button.css'


const Button = (props) => {
    return (
      <div>
        <button className='myButton'>{props.text}</button>
      </div>
    );
  };


export default Button;