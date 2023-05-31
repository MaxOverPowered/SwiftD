import React from 'react';
import { ACCESS_TOKEN } from '../../constants';
import { useNavigate } from 'react-router-dom';
import Loading from '../Loading';

export default function OAuth2RedirectHandler() {
    const navigate = useNavigate();

    const getUrlParameter = (name) => {
        name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
        const regex = new RegExp('[\\?&]' + name + '=([^&#]*)');

        const results = regex.exec(window.location.search);
        return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
    };

    const token = getUrlParameter('token');
    const error = getUrlParameter('error');

    if (token) {
        localStorage.setItem(ACCESS_TOKEN, token);
        navigate('/profile', { state: { from: window.location } });
    } else {
        navigate('/login', { state: { from: window.location, error: error } });
    }

    return <Loading />;
}
