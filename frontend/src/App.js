import React from 'react';
import { BrowserRouter, Route, Routes,Navigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import EditorScreen from './Pages/EditorScreen';
import NameScreen from './Pages/NameScreen';


class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
        
          <Route path="/" element={<Navigate to="/editorscreen" />} />
          <Route path="/editorscreen" element={<EditorScreen />} />
          <Route path="/namescreen" element={<NameScreen />} />
         
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;

