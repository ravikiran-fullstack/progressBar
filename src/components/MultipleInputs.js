import React, { useState } from "react";

const MultipleInputs = () => {
  const [person, setPerson] = useState({ name: "", email: "", age: "" });
  const [people, setPeople] = useState([
    { name: "ravikiran", email: "e@e.com", age: 29 },
  ]);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setPerson({ ...person, [name]: value });
    console.log(person);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (person.name && person.email && person.age) {
      const newPerson = { ...person, id: new Date().getTime() };
      setPeople([...people, newPerson]);
      setPerson({ name: "", email: "", age: "" });
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor='name'>Name</label>
        <input
          type='text'
          name='name'
          value={person.name}
          onChange={handleChange}
        />
        <label htmlFor='email'>Email</label>
        <input
          type='email'
          name='email'
          value={person.email}
          onChange={handleChange}
        />
        <label htmlFor='age'>Age</label>
        <input
          type='number'
          name='age'
          value={person.age}
          onChange={handleChange}
        />
        <button type='submit'>Submit</button>
      </form>

      <div>
        {people.map((p) => {
          return (
            <div key={`${p.name}+${p.age}`}>
              <span>{p.name}</span>
              <span>{p.email}</span>
              <span>{p.age}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MultipleInputs;
