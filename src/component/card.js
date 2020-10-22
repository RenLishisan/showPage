import React from 'react';
import "./Card.css"
import {Modal, Input} from 'antd';

//商品信息展示卡片
class Card extends React.Component {
    state = {
        visible: false,
        confirmLoading: false,
        inputValueName: this.props.item.name,
        inputValuePrice: this.props.item.price,
        inputValueStock: this.props.item.stock
    };

    showModal = () => {
        this.setState({
            visible: true,
        });
    };

    handleOk = (value) => {
        this.setState({
            ModalText: '两秒后将自动关闭...',
            confirmLoading: true,
        });
        console.log(value)
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
        const {name} = e.target.id
        // e.target.id = name  && this.setState({inputValueName: e.target.value})
        // inputValuePrice:e.target.value,
        // inputValueStock:e.target.value


        console.log(name)
    }

    render() {
        const {item} = this.props
        const {visible, confirmLoading, inputValueName, inputValuePrice, inputValueStock} = this.state;
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
                                    新的商品名：<Input onChange={this.upDataInput} value={inputValueName} id='name'
                                                 placeholder="点击输入新的商品名"/>
                                    新的价格：<Input onChange={this.upDataInput} value={inputValuePrice} id='price'
                                                placeholder="点击输入新的新的价格"/>
                                    新的库存量：<Input onChange={this.upDataInput} value={inputValueStock} id='stock'
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