import React, {useState} from 'react';
import axios from 'axios';




const Product = (props) => {
    const {productList, setProductList} = props;
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");

    //! This was working, but now it is not. Don't know what I changed.
    const onSubmitHandler = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/product', {
            title: title,
            price: price,
            description: description
        })
        .then(res => {
            console.log(res);
            console.log("Results:---->", res.data);
            console.log(productList, "This is where to look");
            //* Thomas made me do this and I don't actually know why
            setProductList([...productList, res.data]);
            // console.log(productList, "------------------!!!!!!!!!!!!!!!!!!!!!!---------------------------");
        })
        .catch(err => console.log(err))
    }



    return (
        <div>
            <h1>Product Manager</h1>
            <form onSubmit = {onSubmitHandler}>
                <div>
                    <label>Title:</label><br/>
                    <input type="text" onChange = {(e) => setTitle(e.target.value)}/><br/>
                </div>
                <div>
                    <label>Price:</label><br/>
                    <input type="number" onChange = {(e) => setPrice(e.target.value)}/><br/>
                </div>
                <div>
                    <label>Description:</label><br/>
                    <input type="text" onChange = {(e) => setDescription(e.target.value)}/><br/>
                </div>

                <input type="submit" value="Create"/>
            </form>
        </div>
    )
}

export default Product