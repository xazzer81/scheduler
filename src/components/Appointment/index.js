import React from 'react';
import Header from './Header';
import Show from './Show';
import Empty from './Empty';
import Form from "components/Appointment/Form";
import useVisualMode from "hooks/useVisualMode";

import 'components/Appointment/styles.scss';


export default function Appointment(props) {
  console.log(props);
  const EMPTY = "EMPTY";
  const SHOW = "SHOW";
  const CREATE = "CREATE";

  const { mode, transition, back } = useVisualMode(
    props.interview ? SHOW : EMPTY
  );
  
  //Save data from bookInterview function in Application
  function save(name, interviewer) {
    const interview = {
      student: name,
      interviewer
    };
    transition(SHOW);
    props.bookInterview(props.id, interview);
  }

  return (
    <article className="appointment">
      <Header time={props.time}></Header>
      {mode === EMPTY && <Empty onAdd={() => transition(CREATE)} />}
      {mode === SHOW && (
        <Show
          student={props.interview.student}
          interviewer={props.interview.interviewer}
        />
      )}  
      {mode === CREATE && <Form name={props.name} value={props.value} interviewers={props.interviewers} onCancel={back} onSave={save}/>}
    </article>
  );
} 