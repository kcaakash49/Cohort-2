import { useState } from "react";


function MyForm() {
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    console.log("Event",event)
    const name = event.target.name;
    // console.log(name)
    const value = event.target.value;
    
    setInputs(values => ({...values, [name]: value}))
    console.log(inputs)
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputs);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>Name:
      <input 
        type="text" 
        name="name" 
        value={inputs.name || ""} 
        onChange={handleChange}
      />
      </label>
      <label>Description:
        <input 
          type="text" 
          name="description" 
          value={inputs.description || ""} 
          onChange={handleChange}
        />
        </label>
        <input type="submit" />
    </form>
  )
}

export default MyForm