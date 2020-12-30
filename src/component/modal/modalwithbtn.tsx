import React, { useState,useRef, useEffect} from 'react';
import {Button,Row, Col} from 'antd';
interface PropObj {
    btnName?:string,
    modalType?:string
}

function useOutsideAlerter(ref:any) {
    useEffect(() => {
        function handleClickOutside(event:any):void {
            if (ref.current && !ref.current.contains(event.target)) {
                // alert("You clicked outside of me!");
                console.log('outside');
            }
        }

        // Bind the event listener
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            // Unbind the event listener on clean up
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [ref]);
}

const ModalWithBtn = (prop:PropObj) => {
    const [show,setShow] = useState(false);
    let wrapperRef = useRef<HTMLDivElement>(null);
    // let showStatus =  useOutsideAlerter(wrapperRef);
    // console.log('t',test);

    const handleshowhide = (e:any) => {
        e.stopPropagation();
        setShow(true);
    }
    useEffect(() => {
        function handleClickOutside(event:any):void {
            // if(wrapperRef){
            //     
            // }
            if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
                    // alert("You clicked outside of me!");0.00
                    console.log('outside');
                    setShow(false);
             }
            // console.log('event.target',event.target);
            // console.log('wrapperRef',wrapperRef.current.contains(event.target));
        }

        // Bind the event listener
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            // Unbind the event listener on clean up
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [wrapperRef]);
    return (
        <div className={'modalWrap'} >
            <Button shape="round" onClick={handleshowhide}>
                {
                    prop.btnName
                }
            </Button>
            <div className={'modalContent '+(!show?'hide':'')} ref={wrapperRef}>
                
                <div className="priceRangeFilter">
                    <h2>區域中位數價格為 $20,000</h2>
                    <div className="priceRangeInputContent">
                        <div className="priceInputBox">
                            <p>最低價格</p>
                            <div className="inputWrap">
                                <input type="text" name="" id="lowprice"/>
                            </div>
                        </div>
                        <span className="price_dash"></span>
                        <div className="priceInputBox">
                            <p>最高價格</p>
                            <div className="inputWrap">
                                <input type="text" name="" id="highprice"/>
                            </div>
                        </div>
                    </div>
                    <Row justify="space-between" className="modalFooter" align="middle">
                        <Col>
                            <Button>
                                清除
                            </Button>
                        </Col>
                        <Col>
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
