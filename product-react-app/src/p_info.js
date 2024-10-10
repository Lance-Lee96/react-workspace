import React from "react"
import { useState, useEffect } from "react"
import { call } from "./service/ApiService";
import './css/styles.css';
import AddProduct from "./AddProduct";

function P_info() {
    const [items, setItems] = useState([]);
    const [open, setOpen] = useState(true);

    useEffect(() => {
        call("/product", "GET")
            .then(result => {
                setItems(result.data);
            })
    }, [])

    const onButtonClick = ()=>{
        setOpen(false);
    }

    let productItems = items.length > 0 && (
        <table border="1">
            <tr>
                <th>상품 번호</th>
                <th>상품 이름</th>
                <th>상품 재고</th>
                <th>상품 가격</th>
                <th>등록 날짜</th>
                <th>수정 날짜</th>
            </tr>
            {items.map((item) => (
                <tr>
                    <td>{item.productId}</td>
                    <td>{item.productName}</td>
                    <td>{item.productStock}</td>
                    <td>{item.productPrice}</td>
                    <td>{item.registerDate}</td>
                    <td>{item.updateDate}</td>
                </tr>
            ))}
        </table>
    );

    let addProduct = <button type="button" onClick={onButtonClick}>상품추가</button>

    let addProductScreen = <AddProduct />

    let addButton = addProduct;

    if(!open){
        addButton = addProductScreen;
        }

    return (
        <div>
            {addButton}
            {productItems}
        </div>
    );
}

export default P_info;

//보완 필요 additem