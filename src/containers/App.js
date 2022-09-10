import { Route, Routes } from 'react-router-dom';

import HomeCusTomer from '../routes/Clients/HomeCusTomer';
import NotFound from '../components/404NotFound';
import Redirect from '../routes/redirect/Redirect';
import { path } from '../utils/constant';

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path={path.redirect} element={<Redirect link="/customer" />} />
                <Route path={path.default} element={<HomeCusTomer />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </div>
    );
}

export default App;
