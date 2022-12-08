import React from 'react';
import { RouterProvider } from 'react-router-dom';
import './App.css';
import routes from './routers';

function App() {
  return (
    <div className="md:mx-20">
        <RouterProvider router={routes} />
    </div>
  );
}

export default App;
