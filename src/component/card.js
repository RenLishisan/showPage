import React from 'react';
import "./Card.css"
import {Modal, Input} from 'antd';

//商品信息展示卡片
class Card extends React.Component {
    state = {
        visible: false,
        confirmLoading: false,
        inputValueName: this.props.item.name,   //商品名字
        inputValuePrice: this.props.item.price, //商品价格
        inputValueStock: this.props.item.stock,  //商品库存
        inputValueNo: this.props.item.id
    };

    showModal = () => {
        this.setState({
            visible: true,
        });
    };

    inputData = () => {
        const {inputValueName, inputValuePrice, inputValueStock, inputValueNo} = this.state
        this.props.updateInput(inputValueName, inputValuePrice, inputValueStock, inputValueNo)
    }

    handleOk = (value) => {
        this.setState({
            ModalText: '两秒后将自动关闭...',
            confirmLoading: true,
        });
        console.log(value)
        this.inputData()
        setTimeout(() => {
            this.setState({
                visible: false,
                confirmLoading: false,
            });
        }, 2000);
    };


    handleCancel = () => {
        console.log('点击了取消按钮！');
        this.setState({
            visible: false,
        });
    };

    upDataInput = (e) => {
        e.target.id === "name" && this.setState({inputValueName: e.target.value});
        e.target.id === 'price' && this.setState({inputValuePrice: e.target.value});
        e.target.id === 'stock' && this.setState({inputValueStock: e.target.value});

    }


    render() {
        const {item} = this.props
        const {visible, confirmLoading, inputValueName, inputValuePrice, inputValueStock, inputValueNo} = this.state;
        return (<>
                {item &&
                <dl key={item.id} className="card">
                    <div className="cardMessage">
                        <div className="dtHeader">
                            <img className="tmImg"
                                 src="https://gw.alicdn.com/tfs/TB1caflgebviK0jSZFNXXaApXXa-32-16.png"
                                 alt="天猫"/>
                            <dt className="dtName">{item.name}</dt>
                            <>
                                <img className="bgImg"
                                     type="primary"
                                     onClick={this.showModal}
                                     src="http://lc-PaHnXV0g.cn-n1.lcfile.com/fb9f9750259a844379a4.png"
                                     alt="编辑"/>
                                <Modal
                                    title="修改商品信息"
                                    visible={visible}
                                    onOk={this.handleOk}
                                    confirmLoading={confirmLoading}
                                    onCancel={this.handleCancel}
                                >
                                    当前商品货号为:[{item.id}]
                                    <br/>
                                    新的商品名：<Input onChange={this.upDataInput} value={inputValueName} name={inputValueNo}
                                                 id='name'
                                                 placeholder="点击输入新的商品名"/>
                                    新的价格：<Input onChange={this.upDataInput} name={inputValueNo} value={inputValuePrice}
                                                id='price'
                                                placeholder="点击输入新的新的价格"/>
                                    新的库存量：<Input onChange={this.upDataInput} name={inputValueNo} value={inputValueStock}
                                                 id='stock'
                                                 placeholder="点击输入新的库存量"/>

                                </Modal>
                            </>
                        </div>
                        <dd>商品货号：{item.id}</dd>
                        <dd>商品价格：{item.price}￥</dd>
                        <dd>剩余库存：{item.stock}</dd>
                    </div>
                    <div className="tab"/>
                    <dd className="cardSvg">{item.img}</dd>
                </dl>
                }
            </>
        )
    }
}

export default Card;