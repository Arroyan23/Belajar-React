import "./App.css";
import Homepage from "./pages/homepage";
import { GlobalContext } from "./db/context";
import { router } from "./router/index";
import { RouterProvider } from "react-router-dom";

// memanggil variabel itu sendiri di dalam tag articles nya
function App() {
  const user = {
    username: "Favian Rasyad",
  };

  return (
    <div class="app">
      {/* simpan value user ke dalam global context */}
      <GlobalContext.Provider value={user}>
        <RouterProvider router={router} />
      </GlobalContext.Provider>
    </div>
  );
}

export default App;
