import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import ProductItem from './ProductItem';
import {addItem} from './redux/productSlice';

const App = () => {
    const products = useSelector(state => state);
    const dispatch = useDispatch();

    const handleAdd = () => {
        const title = prompt('Введите название товара:');
        if (title) {
            dispatch(addItem(title));
        }
    };

    return (
        <div style={{
            padding: '20px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
        }}>
            <h1>Корзина</h1>
            <button onClick={handleAdd} style={{
                padding: '10px 15px',
                backgroundColor: '#4cafa3',
                color: 'white',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer',
                marginBottom: '20px'
            }}
            >Добавить товар
            </button>
            <div>
                {products.map(product => (
                    <ProductItem key={product.id} product={product}/>
                ))}
            </div>
        </div>
    );
};

export default App;
