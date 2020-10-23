import React from "react";
import {Input} from 'antd';
import data from "../../data/data";

/**
 * @author: RenLishisan
 * @description: 该组件为搜索组件
 * @time: 2020/10/23
 **/
const {Search} = Input;
class search extends React.Component {
    //从数据文件获取数据做模糊匹配并且把最后获得的数据传入父组件
    onSearch = (value) => {
        let productList = data.filter(array => array.name.match(value));
        this.props.productListUp(productList)
    };

    render() {
        return (
            // 引用AntD搜索组件
            <Search placeholder="点击搜索商品" onSearch={this.onSearch} style={{width: 200}}/>
        )
    }
}

export default search;
