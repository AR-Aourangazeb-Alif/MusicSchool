import React from 'react';

const RootLayout = ({ children }) => {
    return (
        <>
            <h1 className='text-2xl font-medium py-2 text-center'>Inner Nav Bar</h1>
            {children}
        </>
    );
};

export default RootLayout;