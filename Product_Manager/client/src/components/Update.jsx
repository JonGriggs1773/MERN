import { useEffect, useState } from "react";
import axios from "axios";
import {useNavigate, useParams} from "react-router-dom";

const Update = (props) => {
    const {id} = useParams();
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        axios.get("http://localhost:8000/api/product/" + id)
            .then(res => {
                console.log(res.data, "!!!!!!!!!!!!!!!!!!!!!!!!!!!");
                setTitle(res.data.product.title);
                setPrice(res.data.product.price);
                setDescription(res.data.product.description);
            })
            .catch(err => console.log(err));
    }, []);

    const updateProduct = (e) => {
        e.preventDefault();
        axios.patch("http://localhost:8000/api/product/" + id, {
            //! This is a shortcut for {title: title, price: price, description: description}
            title,
            price,
            description
        })
        .then(res => {
            console.log(res);
            navigate("/home");
        })
        .catch(err => console.log(err))
    }

    return (
        <div>
            <h1>Update a Product</h1>
            <form onSubmit = {updateProduct}>
                <div>
                    <label for = "title">
                        <input type = "text" name = "title" value = {title} id = "title" onChange = {(e) => setTitle(e.target.value)}/>
                    </label>
                </div>
                <div>
                    <label for = "price">
                        <input type = "number" name = "price" value = {price} id = "price" onChange = {(e) => setPrice(e.target.value)}/>
                    </label>
                </div>
                <div>
                    <label for = "description">
                        <input type = "text" name = "description" value = {description} id = "description" onChange = {(e) => setDescription(e.target.value)}/>
                    </label>
                </div>
                    <input type="submit" value="Submit"/>
            </form>
        </div>
    )

}

export default Update;