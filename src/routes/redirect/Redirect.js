import { Component } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

class Redirect extends Component {
    render() {
        const { link } = this.props;

        return (
            <div>
                <Routes>
                    <Route path="*" element={<Navigate to={link} replace={true} />} />
                </Routes>
            </div>
        );
    }
}

export default Redirect;
