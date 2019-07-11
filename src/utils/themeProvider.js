import 'shared-styles/dist/css/sap_fiori_3/parameters-bundle.css';
import React from 'react';

export default (WrappedComponent) => {
    const themeProvider = (props) => {
        return (
            <WrappedComponent {...props} />
        );
    };

    themeProvider.displayName = WrappedComponent.displayName || WrappedComponent.name;

    return themeProvider;
};
