
import "./App.css";
import { Login } from "./pages/authentication/login/login";
import { SignUp } from "./pages/authentication/signUp/signUp";
import { History } from "./pages/history/history";
import { Home } from "./pages/home/home";
import { Playlist } from "./pages/playlist/playlist";
import { WatchLater } from "./pages/watchLater/watchLater";
import { Routes, Route } from 'react-router-dom';
import { LikedPage } from "./pages/likedVideo/likedVideo";
import { RequireAuth } from "./components/requireAuth/requireAuth";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { SingleVideoPage } from "./pages/singleVideopage/singleVideopage";

function App() {
  return (
    <div className="App">
   
     <ToastContainer position="bottom-center" autoClose={2000} />
    <Routes>
      <Route exact path ='/' element={ <Home />} />
      <Route path='/video/:id' element={<SingleVideoPage />} />
      <Route path="/history" element={
        <RequireAuth>
        <History />
        </RequireAuth>
      } />

      <Route path="/playlist" element={
      <RequireAuth>
        <Playlist />
      </RequireAuth>
      } />
      <Route path="/watchlater" element={
      <RequireAuth>
        <WatchLater />
      </RequireAuth>
      } />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/like" element={
      <RequireAuth>
        <LikedPage />
      </RequireAuth>
      } />
    
    </Routes>
    {/* <SingleVideoPage /> */}
    </div>
  );
}

export default App;
