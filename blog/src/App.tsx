import { useRoutes } from "react-router-dom";
import HeadNav from "./components/headNav";
import routes from "./router/route";

function App() {
  console.log(import.meta.env.BASE_URL);
  return (
    <div>
      <HeadNav />
      {useRoutes(routes)}
    </div>
  );
}

export default App;
