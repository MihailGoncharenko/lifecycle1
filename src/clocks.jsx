import React, { useState } from 'react';
import WatchesForm from './form';
import WatchesList from './list';

function Watches() {
  const [clocks, setClocks] = useState([]);

  function onDelete(id) {
    const copy = clocks.filter((e) => e.id !== id);
    setClocks(copy);
  }

  function submitForm(form) {
    if (form.name === '' || form.timeZone === '') return;
    const copy = [...clocks, {name: form.name, timeZone: form.timeZone}];
    setClocks(copy);
  } 

  return (
    <>
      <WatchesForm submitForm={submitForm}/>
      <WatchesList clocks={clocks} onDelete={onDelete}/>
    </>
  )
}

export default Watches