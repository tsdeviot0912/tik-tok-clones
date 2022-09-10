import { Component } from 'react';
import { Route, Routes } from 'react-router-dom';

import PageClient from '../../containers/client/Layout/Page';

class HomeCusTomer extends Component {
    render() {
        return (
            <div>
                <Routes>
                    <Route path="/*" element={<PageClient />} />
                </Routes>
            </div>
        );
    }
}

export default HomeCusTomer;
