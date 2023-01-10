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
        <img src={Logo} alt="Logo de Gifs con perro encima" />
      </Link>
      <GifsContextProvider>
        <Route path="/" component={Home} />
        <Route path="/search/:keyword" component={SearchResults} />
        <Route path="/gif/:id" component={Detail} />
      </GifsContextProvider>
    </div>
  );
}

export default App;
