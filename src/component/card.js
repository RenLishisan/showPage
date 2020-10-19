import React from 'react';
import "./card.css"
import 'antd/dist/antd.css';

//商品信息展示卡片
class Card extends React.Component {
    render() {
        const {item} = this.props
        return (<>
                {item &&
                <dl key={item.id} className="card">
                    <div className="cardMessage">
                        <div className="dtHeader">
                            <img className="tmImg"
                                 src="https://gw.alicdn.com/tfs/TB1caflgebviK0jSZFNXXaApXXa-32-16.png"
                                 alt="天猫"/>
                            <dt>{item.name}</dt>
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