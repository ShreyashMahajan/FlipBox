
import "./App.css";
import { Login } from "./pages/authentication/login/login";
import { SignUp } from "./pages/authentication/signUp/signUp";
import { History } from "./pages/history/history";
import { Home } from "./pages/home/home";
import { Playlist } from "./pages/playlist/playlist";
import { WatchLater } from "./pages/watchLater/watchLater";

function App() {
  return (
    <div className="App">
     {/* <Home /> */}
     <WatchLater />
    {/* <History /> */}
    {/* <Playlist /> */}
    {/* <Login /> */}
    {/* <SignUp /> */}
    </div>
  );
}

export default App;
