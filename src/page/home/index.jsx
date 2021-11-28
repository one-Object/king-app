import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import './style.less';
import { initPersonList } from '../../store/action/todoList';
import { Button } from 'antd';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    add = () => {
        const { dispatch } = this.props;
        console.log(12);
        dispatch(initPersonList({ sidebarVisible: true }));
    }
    
    render() { 
        console.log(this.props);
        return (
            <section className="home">
                <Link to="/home">去home页</Link><br/>
                <Link to="/shop">去shop页</Link><br/>
                <Link to="/product">去pruduct页</Link>
                <div className="less-style">
                    我是测试less
                </div>
                <Button onClick={this.add}>增加</Button>
                <Button>减少</Button>
            </section>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        autoInfo: state.authInfo,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        dispatch,
        // init: (payload) => {
        //     dispatch(initPersonList(payload))
        // }
    }
}
 
export default connect(mapStateToProps, mapDispatchToProps)(Home);