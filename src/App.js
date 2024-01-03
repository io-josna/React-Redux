import { Route, Routes } from "react-router-dom";
import "./App.css";
import Product from "./Components/Product";
import NavBar from "./Container/NavBar";
import { Provider } from "react-redux";
import store from "./Redux/Store";
import Cart from "./Components/Cart";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <NavBar />
        <Routes>
          <Route path="/" element={<Product />} />
          <Route path="/Products" element={<Product />} />
          <Route path="/Cart" element={<Cart />} />
        </Routes>
      </Provider>
    </div>
  );
}

export default App;
