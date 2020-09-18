import React from 'react';


const ProductForm = props => {
    const {inputs,errors,handleInputChange,handleSubmit,submitValue} = props
    return (
        <form className="col-5 mx-auto bg-dark text-success p-6 rounded" onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="title">Title:</label>
                <input type="text" name="title" value={inputs.title} onChange={handleInputChange} className="form-control"/>
                <span className="text-danger">{errors.title.message ? errors.title.message : ""}</span>
            </div>
            <div className="form-group">
                <label htmlFor="price">Price:</label>
                <input type="number" name="price" value={inputs.price} onChange={handleInputChange} className="form-control"/>
            </div>
            <div className="form-group">
                <label htmlFor="description">Description:</label>
                <input type="text" name="description" value={inputs.description} onChange={handleInputChange} className="form-control"/>
            </div>
            <input type="submit" value={submitValue} className="btn btn-success text-warning"/>
        </form>
    );
}

export default ProductForm;