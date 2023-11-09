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
        <NewTask />
      </main>
    </>
  );
}

export default App;
