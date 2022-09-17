import { Component } from 'react';
import { Routes, Route } from 'react-router-dom';
import Tippy from '@tippyjs/react';

import Profile from '../../containers/system/Profile';

class ProfileRouter extends Component {
    render() {
        return (
            <div>
                <Routes>
                    <Route path="/" element={<Profile TippyProfile={Tippy} />} />
                </Routes>
            </div>
        );
    }
}

export default ProfileRouter;
