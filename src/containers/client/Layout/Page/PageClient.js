import { Route, Routes } from 'react-router-dom';
import { useCallback } from 'react';
import { BrowserView, MobileView } from 'react-device-detect';

import './Page.scss';
import Redirect from '../../../../routes/redirect/Redirect';
import { path } from '../../../../utils/constant';
import Header from '../../components/Header/Header';
import Sidebar from '../../components/Sidebar';
import Home from '../Components/HomePage/Home';
import Following from '../Components/Follow/Following';
import SearchPage from '../Components/searchPage';

function PageClient() {
    const SiderBarRender = useCallback(Sidebar, []);

    return (
        <>
            <BrowserView>
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
                                        <Route path={path.follow} element={<Following />} />
                                        <Route path={path.search} element={<SearchPage />} />
                                    </Routes>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </BrowserView>
            <MobileView>
                <div className="page-wrapper-container p-0 overflow-hidden">
                    {/* <div className='header'>
                        <Header />
                    </div> */}
                    <div className="page-wrapper-content">
                        <Routes>
                            <Route path={path.redirect} element={<Redirect link="/customer/home" />} />
                            <Route path={path.home} element={<Home />} />
                            <Route path={path.follow} element={<Following />} />
                            <Route path={path.search} element={<SearchPage />} />
                        </Routes>
                    </div>
                </div>
            </MobileView>
        </>
    );
}

export default PageClient;
