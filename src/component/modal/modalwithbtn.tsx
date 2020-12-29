import React, { useState} from 'react';
import {Button,Row, Col} from 'antd';
interface PropObj {
    btnName?:string,
    modalType?:string
}

const ModalWithBtn = (prop:PropObj) => {
    const [show,setShow] = useState(false);
    return (
        <div className="modalWrap">
            <Button shape="round">
                {
                    prop.btnName
                }
            </Button>
            <div className="modalContent">
                <div className="priceRangeFilter">
                    <h2>區域中位數價格為 $20,000</h2>
                    <div className="priceRangeInputContent">
                        <div className="priceInputBox">
                            <p>最低價格</p>
                            <div className="inputWrap">
                                <input type="number" name="" id="lowprice"/>
                            </div>
                        </div>
                        <span className="price_dash"></span>
                        <div className="priceInputBox">
                            <p>最高價格</p>
                            <div className="inputWrap">
                                <input type="number" name="" id="highprice"/>
                            </div>
                        </div>
                    </div>
                    <Row justify="space-between" className="modalFooter" align="middle">
                        <Col span={6}>
                            <Button>
                                清除
                            </Button>
                        </Col>
                        <Col span={6}>
                            <Button>
                                儲存
                             </Button>
                        </Col>
                    </Row>
                </div>
            </div>
        </div>
    )
}

export default ModalWithBtn;
