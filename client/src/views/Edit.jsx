import React,{useEffect,useState} from 'react';
import Axios from 'axios';
import ProductForm from '../components/ProductForm';
import {navigate} from '@reach/router';

const Edit = props => {
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

    const [edit,setEdit] = useState(initialProduct);
    const [errors,setErrors] = useState(initialErrors);

    useEffect(() => {
        Axios.get(`http://localhost:8000/api/product/${props.id}`)
            .then(res => setEdit(res.data.results))
            .catch(err => console.log(err))
    },[props])

    const handleInputChange = (e) => {
        setEdit({
            ...edit,
            [e.target.name]:e.target.value
        })
    }

    const handleSubmit = (e) => {
        setErrors(initialErrors);
        e.preventDefault();
        Axios.put(`http://localhost:8000/api/update/product/${props.id}`,edit)
            .then(res => {
                if(res.data.results){
                    navigate(`/product/${edit._id}`);
                }
                else {
                    setErrors(res.data);
                }
            })
            .catch(err => console.log(err));
    }

    return (
        <div>
            <h2 className="col-5 bg-dark text-success mx-auto">Edit Product</h2>
            <ProductForm
                inputs={edit}
                errors={errors}
                handleInputChange={handleInputChange}
                handleSubmit={handleSubmit}
                submitValue="Submit Edits"
            />
        </div>
    );
}

export default Edit;