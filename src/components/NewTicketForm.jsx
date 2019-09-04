import React from 'react';

function NewTicketForm(){
  return (
    <div className="new-form">
      <form>
        <input
          type='text'
          id='names'
          placeholder='Pair Names'/>
        <input
          type='text'
          id='location'
          placeholder='Location'/>
        <textarea
          id='issue'
          placeholder='Describe your issue.'/>
        <button type='submit'>Help!</button>
      </form>
      <style jsx>{`
        .new-form {
          padding-top:100px;
        }
        `}</style>
    </div>
  );
}

export default NewTicketForm;
