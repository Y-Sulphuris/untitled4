import React from 'react';
import {useDispatch} from 'react-redux';
import {increment, decrement} from './redux/productSlice';

function ProductItem({product}) {
    const dispatch = useDispatch();

    return (
        <div style={{
            border: '1px solid #ccc',
            padding: '10px',
            margin: '10px',
            borderRadius: '5px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
        }}>
            <h3>{product.title}</h3>
            <div style={{display: 'flex', alignItems: 'center', gap: '10px'}}>
                <button onClick={() => dispatch(decrement(product.id))}>-</button>
                <span><strong>{product.count}</strong></span>
                <button onClick={() => dispatch(increment(product.id))}>+</button>
            </div>
        </div>
    );
}

export default ProductItem;
