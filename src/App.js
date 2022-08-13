//import logo from './logo.svg';
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MovieProvider } from "./store/MovieContext";
import Footer from "./components/Footer";
import MovieList from "./components/MovieList";
import NavBar from "./components/NavBar";
import AddMovie from "./components/AddMovie";
import Page404 from "./components/Page404";

function App() {
  return (
    <BrowserRouter>
      <MovieProvider>
        <NavBar />
        <Routes>
          <Route path={"/"} element={<MovieList />} />
          <Route path={"/addmovie"} element={<AddMovie />} />
          <Route path={"*"} element={<Page404 />} />
        </Routes>
        <Footer />
      </MovieProvider>
    </BrowserRouter>
  );
}

export default App;
