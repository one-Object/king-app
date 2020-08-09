import React, { Component, Fragment, createRef } from "react";
import { observer, inject } from 'mobx-react';
import { toJS } from 'mobx';

@inject('shopStore')
@observer
class Shop extends Component {
    constructor(props) {
        super(props)
        this.inputRef = createRef()
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleChange(e) {
        const { changeValAction } = this.props.shopStore
        let val = e.target.value
        changeValAction(val)
    }
    handleSubmit() {
        const { addListAction } = this.props.shopStore
        let val = this.inputRef.current.value
        console.log(this.props.shopStore);
        console.log(toJS(this.props.shopStore));
        addListAction(val)
    }
    handleDelete(index) {
        const { deleteListAction } = this.props.shopStore
        deleteListAction(index)
    }
    render() {
        const { filterList, list, val } = this.props.shopStore
        return (
            <Fragment>
                <h2>
                    使用computed之后list的值: {filterList}
                </h2>
                <label htmlFor="input"> 请输入: </label>
                <input
                    id="input"
                    type="text"
                    value={val}
                    onChange={this.handleChange}
                    ref={this.inputRef}
                />
                <button onClick={this.handleSubmit}>提交</button>
                {
                    list.map((item, index) => {
                        return (
                            <li
                                key={index}
                                onClick={() => this.handleDelete(index)}
                            >
                                {item}
                            </li>
                        )
                    })
                }
            </Fragment>
        );
    }
}
export default Shop;