import React, { Component } from 'react';
import { HashRouter, Switch ,Route, Redirect } from 'react-router-dom'
import loadable from '../utils/loadable';

const Home = loadable(() => import('@/page/home'));
const Shop = loadable(() => import('@/page/shop'))
const Product = loadable(() => import('../page/product'))

class Router extends Component {
    
    render() { 
        return (
            <HashRouter>
                <Switch>
                    <Route path="/home" exact component={ Home } />
                    <Route path="/shop" component={ Shop } />
                    <Route path="/product" component={ Product } />
                    <Redirect exact to="/home" component={ Home } />
                </Switch>
            </HashRouter>
        );
    }
}
 
export default Router;