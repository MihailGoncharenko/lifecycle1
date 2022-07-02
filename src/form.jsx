import React, { useState } from 'react'

function Form({ submitForm }) {
  const [form, setForm] = useState({id: '', name: '', timeZone: ''});

  function inputForm({ target }) {
    setForm((prev) => {
      if (target.name === 'name') {
        return { ...prev, name: target.value };
      }
      if (target.name === 'timezone') {
        return { ...prev, timeZone: target.value };
      }
    })
  } 

  function submit(e) {
    e.preventDefault();
    submitForm(form);
    setForm({id: '', name: '', timeZone: ''});
  }


  return (
    <form>
      <div>
        <label htmlFor="Name">Название</label>
        <input name='name' value={form.name} type='text' onChange={inputForm} required />
      </div>
      <div>
        <label htmlFor="Time zone">Зона</label>
        <input name='timezone' value={form.timeZone} type='number' onChange={inputForm} required />
      </div>
      <button onClick={submit}>Добавить</button>
    </form>
  )
}


export default Form