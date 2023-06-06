import {useEffect} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';





const ProductList = (props) => {
    const {removeFromDom, productList, setProductList} = props;

        useEffect(() => {axios.get("http://localhost:8000/api/product")
            .then((res) => {
                console.log("Response: ", res.data, "------------------------");
                setProductList(res.data.products);
            })
            .catch((err) => {
                console.log(err);
            })
        }, [])

        const deleteProduct= (productId) => {
            axios.delete("http://localhost:8000/api/product/" + productId)
                .then(res => {
                    console.log(res.data, "Running Here --------------------");
                    //? This is a method I am bringing in from props getting passed from Main.jsx
                    removeFromDom(productId);
                })
                .catch(err => console.log(err));
        }
    return (
        <div>
            {   
                productList.map((product) => {
                    return (
                        <div key = {product._id}>
                            <p>{product._id}</p>
                            <p>{product.title}</p>
                            <Link to = {`/details/${product._id}`}>Details |</Link>
                            <Link to = {`/update/${product._id}`}> Edit |</Link>
                            <button onClick = {() => {deleteProduct(product._id)}}> Delete</button>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default ProductList;