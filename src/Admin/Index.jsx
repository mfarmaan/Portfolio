import React from 'react'
import { useLocation } from 'react-router-dom';
import Header from './Common/Header'
import Dashboard from './Dashboard'
import ManagePost from './pages/ManagePost';

function Index() {
    const location = useLocation()
    return (
        <>
            <Header addClass="addmin__active" />

            {location.pathname === "/admin" && <Dashboard />}
            {location.pathname === "/managepost" && <ManagePost />}
        </>
    )
}

export default Index
