import React from 'react';
import classNames from 'classnames/bind';

import 'components/InterviewerListItem.scss'

export default function InterviewerListItem(props){
  console.log(props);
  const itemClass = classNames('interviewers__item', {
    'interviewers__item--selected': props.selected,
  });

  return (
    <li 
      className={itemClass}
      onClick={props.setInterviewer}
    >
      <img 
        className='interviewers__item-image'
        src={props.avatar}
        alt={props.name}
      />
      {props.name}
    </li>
  );
}