import "./App.css";
import Header from "./Header/Header";
import Input from "./Input/Input";
import NewTask from "./Tasks/NewTask";
import { List } from "./data";

function App() {
  return (
    <>
      <main className="container">
        <Header />
        <Input />
        {List.map((listItem) => (
          <NewTask key={listItem.title} {...listItem} />
        ))}
      </main>
    </>
  );
}

export default App;
