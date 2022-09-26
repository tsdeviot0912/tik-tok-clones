import { Component } from 'react';
import { Route, Routes } from 'react-router-dom';
import DetailVideo from '../../containers/client/components/DetailVideo.js/DetailVideo';
import ViewCopy from '../../containers/client/components/ViewCopy/ViewCopy';

import PageClient from '../../containers/client/Layout/Page';
import { path } from '../../utils/constant';

class HomeCusTomer extends Component {
    render() {
        return (
            <div>
                <Routes>
                    <Route path={path.detailVideo} element={<DetailVideo />} />
                    <Route path={path.detailVideoCopy} element={<ViewCopy />} />
                    <Route path="/*" element={<PageClient />} />
                </Routes>
            </div>
        );
    }
}

export default HomeCusTomer;
