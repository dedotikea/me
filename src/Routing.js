import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './routes/Home';
import About from './routes/About';
import MapList from './routes/MapList';
import ErrorPage from './routes/ErrorPage';

const Routing = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/me' element={<Home></Home>}></Route>
                <Route path='/about' element={<About></About>}></Route>
                <Route path='/maplist' element={<MapList></MapList>}></Route>
                <Route path='/*' element={<ErrorPage></ErrorPage>} errorElement={<ErrorPage></ErrorPage>}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default Routing;