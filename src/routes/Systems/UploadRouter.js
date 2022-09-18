import { Component } from 'react';
import { Route, Routes } from 'react-router-dom';

import Upload from '../../containers/system/Upload';

class UploadRouter extends Component {
    render() {
        return (
            <div>
                <Routes>
                    <Route path="/*" element={<Upload />} />
                </Routes>
            </div>
        );
    }
}

export default UploadRouter;
