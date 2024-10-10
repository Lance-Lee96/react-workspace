import React from 'react';
import { useState} from 'react';

function AddProduct(props){
    const [product,setProduct] = useState({productName : "", productStock : 0, productPrice : 0});
    const {productName,productPrice,productStock} = product;

    let addItem = props.addItem;

    const onChange = (e) => {    
        const { value, name } = e.target;     
        setProduct({      
            ...product,    
            [name]: value     
            });  
        };

    const onButtonClick = ()=>{
        console.log(product);
        addItem(product);
        resetFields();
        props.setOpen(true);
    }

    
    const resetFields = () => {
        setProduct({ productName: "", productStock: 0, productPrice: 0 });
    };


    return(
        <div className="register-wrap" style={{width:'500px'}}>
			<div><input style={{width: '98%'}} value={productName} onChange={onChange} name='productName' placeholder='상품 이름'/></div>
			<div><input style={{width: '98%'}} value={productStock} onChange={onChange} name='productStock' placeholder='상품 재고'/></div>
			<div><input style={{width: '98%'}} value={productPrice} onChange={onChange} name='productPrice' placeholder='상품 가격'/></div>
			<input type="button" value="등록" onClick={onButtonClick} style={{width:'100%'}} />
		</div>
    )
}

export default AddProduct;