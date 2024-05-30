export function Todos({ todos }) {
  return (
    <div >
      <div >
        {todos.map((item, index) => (
          <div key={index} style={{border:"2px solid black",padding:10,margin:10}}>
            <h1>{item.title}</h1>
            <h2>{item.description}</h2>
            <button>{item.completed == true?"Completed":"Mark as Complete"}</button>
          </div>
        ))}
      </div>
    </div>
  );
}
