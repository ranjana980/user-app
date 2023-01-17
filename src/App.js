import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainPage from './Component/MainPage';
import rootReducer from "./store/rootRaducer";
import { applyMiddleware, createStore } from "redux";
import { Provider } from 'react-redux'
import thunk from "redux-thunk";
import UserPage from './Component/UserPage';
import ToDo from './Component/ToDo';
import Gallery from './Component/Gallery';
import Post from './Component/Post';
const store = createStore(rootReducer, applyMiddleware(thunk));

function App() {
  return (
    <div className="">
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route index path='/' element={<MainPage />} />
            <Route  path='/UserPage' element={<UserPage />} />
            <Route  path='/Post' element={<Post />} />
            <Route  path='/Gallery' element={<Gallery />} />
            <Route  path='/ToDo' element={<ToDo />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
