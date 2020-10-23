import React from 'react'
import {Pagination} from 'antd';
import 'antd/dist/antd.css';
import data from "../data/data"
import Card from './component/card'
import SearchText from './component/search'
import './component/search.css'

/**
 * @author: RenLishisan
 * @description: 该组件用于渲染card和sear组件并且提供相关的数据
 * @time: 2020/10/23
 **/
const currentData = 3;//一页展示3条数据
class Page extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dataSource: [],     //数据源
            currentPage: 1      //页码
        };
    };

//通过onChange调用该方法并且将旧页码更改成新页码
    page = (page) => {
        this.setState({
            currentPage: page
        });
    };

//调用之前准备好的商品数据，初始化页面
    componentDidMount() {
        this.setState({
            dataSource: data
        });
    };

//分页器运算
    pageData = () => {
        const {currentPage, dataSource} = this.state;
        return dataSource.slice((currentPage - 1) * currentData, currentPage * currentData);
    };
//更新搜索列表数据
    up = (productList) => {
        this.setState({
            dataSource: productList,
        });
    };
//更新商品修改过后的数据
    updateInput = (inputValueName, inputValuePrice, inputValueStock, inputValueNo) => {
        const {dataSource} = this.state;
        dataSource[inputValueNo - 1].name = inputValueName;
        dataSource[inputValueNo - 1].price = inputValuePrice;
        dataSource[inputValueNo - 1].stock = inputValueStock;
        this.setState({dataSource});
    };

    render() {
        const {dataSource} = this.state;
        return (<>
                {/*搜索组件*/}
                <div className='search'>
                    <SearchText productListUp={this.up} dataSource={dataSource}/>
                </div>
                {/*引用的AntD分页组件*/}
                <Pagination
                    className="pagination"
                    size="small"
                    onChange={this.page}
                    pageSize={currentData}
                    total={dataSource.length}
                    showQuickJumper
                />
                {//遍历数组展示
                    this.pageData().map(item => <Card key={item.id} updateInput={this.updateInput} item={item}/>
                    )};
            </>
        )
    }
}

export default Page