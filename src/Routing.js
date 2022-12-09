import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './routes/Home';
import About from './routes/About';
import MapList from './routes/MapList';
import ErrorPage from './routes/ErrorPage';
import MakanSiang from './routes/MakanSiang';
import LayoutKasar from './routes/LayoutKasar';
import ConnectFeeling from './maplist-pages/ConnectFeeling';
import Free from './maplist-pages/Free';
import TojitaSekai from './maplist-pages/TojitaSekai';
import RainbowSky from './maplist-pages/RainbowSky';
import NyobaGraph from './routes/NyobaGraph';

const Routing = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/me' element={<Home></Home>}></Route>
                <Route path='/about' element={<About></About>}></Route>
                <Route path='/maplist' element={<MapList></MapList>}></Route>
                <Route path='/maplist/connectfeeling' element={<ConnectFeeling></ConnectFeeling>}></Route>
                <Route path='/maplist/free' element={<Free></Free>}></Route>
                <Route path='/maplist/tojitasekai' element={<TojitaSekai></TojitaSekai>}></Route>
                <Route path='/maplist/rainbowsky' element={<RainbowSky></RainbowSky>}></Route>
                <Route path='/makansiang' element={<MakanSiang></MakanSiang>}></Route>
                <Route path='/layoutkasar' element={<LayoutKasar></LayoutKasar>}></Route>
                <Route path='/nyobavictorygraph' element={<NyobaGraph></NyobaGraph>}></Route>
                <Route path='/*' element={<ErrorPage></ErrorPage>} errorElement={<ErrorPage></ErrorPage>}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default Routing;