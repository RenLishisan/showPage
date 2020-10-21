import React from "react";
import {Input} from 'antd';
import data from "../data";

const {Search} = Input;


class search extends React.Component {
    onSearch = (value) => {
        let productList = data.filter(array => array.name.match(value));
        this.props.x(productList)

    };

    render() {
        return (
            <Search placeholder="点击搜索商品" onSearch={this.onSearch} style={{width: 200}}/>
        )
    }
}

export default search;
