import React,{useState,useEffect} from 'react';
import Axios from 'axios';
import { navigate } from '@reach/router';



const Show = props => {
    const initialProduct = {
        title:"",
        price:0,
        description:""
    }
    const [product, setProduct] = useState(initialProduct);
    useEffect(() => {
        Axios.get(`http://localhost:8000/api/product/${props.id}`)
            .then(res => setProduct(res.data.results))
            .catch(err => console.log(err))
    },[props])

    const destroyProduct = () => {
        Axios.delete(`http://localhost:8000/api/destroy/product/${props.id}`)
            .then(res => navigate('/'))
            .catch(err => console.log(err))
    }

    return (
        <div className="mx-auto p-5 col-5 bg-dark">
            <h4 className="text-info m-5">{product.title}</h4>
            <p className="text-primary">{product.description}. It costs {product.price} dollars.</p>
            <button className="btn btn-lg btn-outline-warning btn-danger text-warning m-5" onClick={destroyProduct}>Destroy {product.title}</button>
        </div>
    );
}

export default Show;