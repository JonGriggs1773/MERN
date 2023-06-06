import {useState, useEffect} from 'react';
import Product from '../components/Product';
import ProductList from '../components/ProductList';
import axios from 'axios';

const Main = () => {
    const [productList, setProductList] = useState([]);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        axios.get('http://localhost:8000/api/product')
            .then(res => {
                console.log(res.data.products, "Results");
                setProductList(res.data.products);
                setLoaded(true);
            })
            .catch(err => console.log(err))
    }, [])

    const removeFromDom = productId => {
        console.log("%%%%%%%%%%%%%%%%%%%%% We Got This Far %%%%%%%%%%%%%%%%%%%%%%%%");
        setProductList(productList.filter(product => product._id !== productId));
    }


    return (
        <div>
            <Product productList = {productList} setProductList = {setProductList}/>
            {loaded &&<ProductList productList = {productList} setProductList = {setProductList} removeFromDom = {removeFromDom}/>} 
        </div>
    )
}

export default Main;