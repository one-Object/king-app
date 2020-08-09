import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import { Link } from 'react-router-dom';
import './style.less';

@inject('authStore')
@observer
class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    
    render() { 
        return (
            <section className="home">
                <Link to="/home">去home页</Link><br/>
                <Link to="/shop">去shop页</Link><br/>
                <Link to="/product">去pruduct页</Link>
                <div className="less-style">
                    我是测试less
                </div>
            </section>
        );
    }
}
 
export default Home;