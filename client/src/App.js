import './App.css';
import {Route , Routes,  BrowserRouter} from 'react-router-dom'
import Register from './pages/Register';
import Login from './pages/Login';
import Home from './pages/Home';
import BookingCar from './pages/BookingCar';
import 'antd/dist/reset.css';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' exact Component={Home} />
        <Route path='/login' exact Component={Login} />
        <Route path='/register' exact Component={Register} />
        <Route path='/bookingcar' exact Component={BookingCar} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;