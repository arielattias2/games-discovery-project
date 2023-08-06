import { RouterProvider } from "react-router-dom";
import router from "./routes";
import "./App.css";

function App() {
  //const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
