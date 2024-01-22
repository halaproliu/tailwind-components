import "./App.css";
import Layout from "./components/Layout";
import routes from "./routes";

function App() {
  return (
    <>
      <Layout />
      {routes}
    </>
  );
}

export default App;
