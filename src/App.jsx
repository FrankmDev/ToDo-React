import "./App.css";
import Header from "./Header/Header";
import Input from "./Input/Input";
import NewTask from "./Tasks/NewTask";

function App() {
  return (
    <>
      <main className="container">
        <Header />
        <Input />
        <NewTask title={"Hello"} description={"Description"} />
        <NewTask title={"World"} description={"Description"} />
      </main>
    </>
  );
}

export default App;
