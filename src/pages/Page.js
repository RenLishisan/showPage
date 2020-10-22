import React from 'react'
import {Pagination} from 'antd';
import 'antd/dist/antd.css';
import data from "../data"
import Card from '../component/Card'
import SearchText from '../component/Search'
import '../component/Search.css'

const currentData = 3           //一页展示3条数据

class Page extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dataSource: [],     //数据源
            currentPage: 1      //页码
        }
    }

    page = (page) => {
        this.setState({
            currentPage: page       //通过onChange调用该方法并且将旧页码更改成新页码
        })
    }

    componentDidMount() {
        this.setState({
            dataSource: data        //调用之前准备好的商品数据
        });
    };

    pageData = () => {
        const {currentPage, dataSource} = this.state; //分页器运算
        return dataSource.slice((currentPage - 1) * currentData, currentPage * currentData)
    }

    up = (productList) => {
        this.setState({
            dataSource: productList,
        })
    }
    updateInput = (inputValueName, inputValuePrice, inputValueStock, inputValueNo) => {
        const {dataSource} = this.state;
        dataSource[inputValueNo - 1].name = inputValueName;
        dataSource[inputValueNo - 1].price = inputValuePrice;
        dataSource[inputValueNo - 1].stock = inputValueStock;
        this.setState({dataSource});
    }

    render() {
        const {dataSource} = this.state;


        return (<>
                <div className='search'>
                    {/*搜索组件*/}
                    <SearchText productListUp={this.up} dataSource={dataSource}/>
                </div>
                {//遍历数组展示
                    this.pageData().map(item => <Card key={item.id} updateInput={this.updateInput} item={item}/>
                    )}
                {/*引用的Ant D分页组件*/}
                <Pagination
                    className="pagination"
                    size="small"
                    onChange={this.page}
                    pageSize={currentData}
                    total={dataSource.length}
                    showQuickJumper
                />
            </>

        )
    }
}

export default Page