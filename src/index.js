import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {Task} from './todoList/Task'
import reportWebVitals from './reportWebVitals';
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import { RecoilRoot } from 'recoil';

const root = ReactDOM.createRoot(document.getElementById('root'));

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: '/Task',
    element: <Task/>
  }
]);
root.render(
  <React.StrictMode>
    <RecoilRoot>
    <RouterProvider router = {router}/>
    </RecoilRoot>
  </React.StrictMode>
);


reportWebVitals();