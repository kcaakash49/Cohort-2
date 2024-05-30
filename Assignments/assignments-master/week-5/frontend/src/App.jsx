import Card from "./component/Card";
import MyForm from "./component/Form";

function App() {
  return (
    <div>
      <div style={{margin:100}}>
        <MyForm />
      </div>

      <div style={{ display: "flex", justifyContent: "space-evenly" }}>
        <Card
          name="Aakash KC"
          description="Full Stack Developer"
          interest={["Coding", "Football", "Gaming"]}
        />
        <Card
          name="Aakash KC"
          description="Full Stack Developer"
          interest={["Coding", "Football", "Gaming"]}
        />
        <Card
          name="Aakash KC"
          description="Full Stack Developer"
          interest={["Coding", "Football", "Gaming"]}
        />
        <Card
          name="Aakash KC"
          description="Full Stack Developer"
          interest={["Coding", "Football", "Gaming"]}
        />
        <Card
          name="Aakash KC"
          description="Full Stack Developer"
          interest={["Coding", "Football", "Gaming"]}
        />
      </div>
    </div>
  );
}

export default App;
