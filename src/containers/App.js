import { Route, Routes } from 'react-router-dom';
import { useSelector } from 'react-redux';

import HomeCusTomer from '../routes/Clients/HomeCusTomer';
import NotFound from '../components/404NotFound';
import Redirect from '../routes/redirect/Redirect';
import { path } from '../utils/constant';
import { ToastContainer } from 'react-toastify';
import ProfileRouter from '../routes/Clients/ProfileRouter';
import MeProfile from './system/MeProfile';
import UploadRouter from '../routes/Systems/UploadRouter';
import Logout from './system/logout';

function App() {
    const isLoggedIn = useSelector((state) => state.user.isLoggedIn);

    return (
        <div className="App">
            <Routes>
                <Route path={path.redirect} element={<Redirect link="/customer" />} />
                <Route path={path.default} element={<HomeCusTomer />} />
                <Route path={path.profile} element={<ProfileRouter />} />
                <Route path={path.profileMe} element={<MeProfile />} />
                <Route path={path.upLoadVideo} element={<UploadRouter />} />
                {isLoggedIn && <Route path={path.logout} element={<Logout />} />}
                <Route path="*" element={<NotFound />} />
            </Routes>

            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
            {/* Same as */}
            <ToastContainer />
        </div>
    );
}

export default App;
