import { Route, Routes } from 'react-router-dom';
import { useCallback } from 'react';

import './Page.scss';
import Redirect from '../../../../routes/redirect/Redirect';
import { path } from '../../../../utils/constant';
import Header from '../../components/Header/Header';
import Sidebar from '../../components/Sidebar';
import Home from '../Components/HomePage/Home';

function PageClient() {
    const SiderBarRender = useCallback(Sidebar, []);

    return (
        <>
            <div className="page-wrapper-container">
                <div>
                    <Header />
                </div>
                <div className="page-wrapper-content">
                    <div className="container">
                        <div className="row">
                            <div className="col-4">
                                <SiderBarRender />
                            </div>
                            <div className="col-8">
                                <Routes>
                                    <Route path={path.redirect} element={<Redirect link="/customer/home" />} />
                                    <Route path={path.home} element={<Home />} />
                                </Routes>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default PageClient;
