import React, { useEffect } from 'react';

import './Portal.scss';

function Portal({ children }) {
    const root = document.createElement('div');

    document.body.appendChild(root);

    return <div>Xin chao</div>;
}

export default Portal;
