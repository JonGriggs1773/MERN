import {useState, useEffect} from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const Details = (props) => {
    const [product, setProduct] = useState({});
    const {id} = useParams();

    useEffect(() => {
        axios.get('http://localhost:8000/api/product/' + id)
            .then( res => {
                console.log(res.data, "----------------------");
                setProduct(res.data.product);
                console.log(product.title, "-----------");
            })
            .catch(err => console.log(err))
    }, []);




    return (
        <div>
            <p>Title: {product.title}</p>
            <p>Price: {product.price}</p>
            <p>Description: {product.description}</p>
        </div>
    )
}

export default Details