import { Component } from 'react';
import { Route, Routes } from 'react-router-dom';
import DetailVideo from '../../containers/client/components/DetailVideo.js/DetailVideo';

import PageClient from '../../containers/client/Layout/Page';
import { path } from '../../utils/constant';

class HomeCusTomer extends Component {
    render() {
        return (
            <div>
                <Routes>
                    <Route path={path.detailVideo} element={<DetailVideo />} />
                    <Route path="/*" element={<PageClient />} />
                </Routes>
            </div>
        );
    }
}

export default HomeCusTomer;
