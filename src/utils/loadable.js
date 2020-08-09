import React, { Fragment } from 'react';
import Loadable from 'react-loadable';

const LoadingComponent = () => {
    return (
        <Fragment></Fragment>
    );
}

export default (loader, loading = LoadingComponent) => {
    return Loadable({
        loader,
        loading,
    })
}