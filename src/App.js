import './App.css';
import Header from './containers/Header';
import AlbumsListing from './containers/AlbumsListing';
import Photo from './containers/Photo';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import PhotosListing from './containers/PhotosListing';
import Delete from './containers/Delete';
import UpdateTitle from './containers/UpdateTitle';
import AddAlbum from './containers/AddAlbum';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
      <Routes>
      <Route path="/photo" element={<Photo/>}/>
      <Route path="/delete" element={<Delete/>}/>
      <Route path="/photos" element={<PhotosListing/>}/>
      <Route path="/albums" element={<AlbumsListing/>}/>
      <Route path="/update" element={<UpdateTitle/>}/>
      <Route path="/addNewAlbum" element={<AddAlbum/>}/>
      <Route>404 Not Found</Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
