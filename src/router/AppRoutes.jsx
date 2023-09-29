import { createBrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from '../containers/Dashboard';

function AppRoutes() {
    return ( <Routes>
        <Route path='/' element={<Dashboard/>} />
        {/* <Route path='/content' element={<Content/>} />
        <Route path='/analytics' element={<Analytics/>} />
        <Route path='/customization' element={<Customization/>} /> */}
    </Routes> );
}

export default AppRoutes;