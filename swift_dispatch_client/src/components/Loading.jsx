import React from 'react';
import LoadingStyle from '../style/LoadingStyle';
import SwiftIcon from '../company_Icon/logo_transparent_3.png';

const Loading = () => (
    <div className="App">
        <LoadingStyle />
        <header className="App-header">
            <img src={SwiftIcon} className="App-logo" alt="logo" />
        </header>
    </div>
);

export default Loading;