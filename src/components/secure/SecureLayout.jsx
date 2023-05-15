import React from 'react';
import {Outlet} from "react-router-dom";

const SecureLayout = () => {
    return (
        <div>
            <Outlet/>
        </div>
    );
};

export default SecureLayout;