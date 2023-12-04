
import './App.css';
import GetAll from './components/GetAll';

import GetSpecific from './components/GetSpecific';
import PostNew from './components/PostNew';
import Home from './components/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import UpdateAdmin from './components/UpdateAdmin';
 import DeleteAdmin from './components/DeleteAdmin';
  import Operations from './components/Operations';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/operations" element={<Operations/>} />
        <Route path="/view-all" element={<GetAll/>} />
        <Route path="/view-id" element={<GetSpecific/>} />
        <Route path="/add-new" element={<PostNew/>} />
        <Route path="/update" element={<UpdateAdmin/>} />
        <Route path="/delete" element={<DeleteAdmin/>} />
        <Route path="/" element={<Home/>} />
    </Routes>
    </BrowserRouter>
    {/* <Operations/> */}
      {/* <GetAll/> */}
      {/* <GetSpecific/> */}
      {/* <PostNew/> */}
      {/* <UpdateAdmin/> */}
      {/* <DeleteAdmin/> */}
    </div>
  );
}
export default App;
