import './App.css';
import Login from './components/login/login';
import HomePage from './components/home/homepage';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/home",
    element: <HomePage />,
  },
  
]);


function App() {
  

  return (

    <div className="App">
    <RouterProvider
      router={router}
    />
  </div>
  );
}

export default App
