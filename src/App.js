import { Link, Route } from "wouter";
import Logo from "./images/gifs.png";
import Detail from "./pages/Detail/Detail";
import Home from "./pages/Home/Home";
import SearchResults from "./pages/SearchResults/SearchResults";
import { GifsContextProvider } from "./context/GifsContext";

function App() {
  return (
    <div className="app">
      <Link to="/">
        <img className="logo" src={Logo} alt="Logo de Gifs y un perro encima" />
      </Link>
      <GifsContextProvider>
        <Route component={Home} path="/" />
        <Route component={SearchResults} path="/search/:keyword" />
        <Route component={Detail} path="/gif/:id" />
      </GifsContextProvider>
    </div>
  );
}

export default App;
