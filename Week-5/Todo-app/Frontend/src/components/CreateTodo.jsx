import React, { useState } from "react";

const CreateTodo = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  function forTitle(e) {
    console.log(e.target.value);
    setTitle(e.target.value);
  }
  function forDesc(e) {
    console.log(e.target.value);
    setDesc(e.target.value);
  }
  return (
    <div>
      <div style={{ padding: 10 }}>
        <input type="text" placeholder="title" onChange={forTitle} />
      </div>

      <div style={{ padding: 10 }}>
        <input type="text" placeholder="description" onChange={forDesc} />
      </div>
      <div style={{ padding: 10 }}>
        <button
          onClick={function () {
            fetch("http://localhost:3000/addtodo", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                title: title,
                description: desc,
                completed: false,
              }),
            }).then(async function (response) {
              const json = await response.json();
              addTodo(json);
              alert("Todo added successfully");
            });
           
            
          }}
        >
          Add a todo
        </button>
      </div>
    </div>
  );
};

export default CreateTodo;
