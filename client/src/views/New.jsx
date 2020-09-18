import React,{useState} from 'react';
import Axios from 'axios';
import ProductForm from '../components/ProductForm';
import { navigate } from '@reach/router';

const New = props => {
    const initialProduct = {
        title:"",
        price:0,
        description:""
    }

    const initialErrors = {
        title:"",
        price:"",
        description:""
    }

    const [product,setProduct] = useState(initialProduct);

    const [errors,setErrors] = useState(initialErrors);


    const handleInputChange = (e) => {
        setProduct({
            ...product,
            [e.target.name]:e.target.value
        })
    }

    const handleSubmit = (e) => {
        setErrors(initialErrors);
        e.preventDefault();
        Axios.post("http://localhost:8000/api/create/product",product)
            .then(res => {
                if(res.data.results){
                    navigate('/');
                }
                else {
                    setErrors(res.data);
                }
            })
            .catch(err => console.log(err));
    }


    return(
        <div>
            <h2 className="col-5 bg-dark text-success mx-auto">Create Product</h2>
            <ProductForm
                inputs={product}
                errors={errors}
                handleInputChange={handleInputChange}
                handleSubmit={handleSubmit}
                submitValue="Create Product"
            />
        </div>
    );
}

export default New;