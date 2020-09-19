import React,{useState,useEffect} from 'react';
import Axios from 'axios';
import {Link} from '@reach/router';

const Main = props => {

    const [products,setProducts] = useState([]);

    useEffect(() => {
        Axios.get("http://localhost:8000/api/products")
            .then(res => setProducts(res.data.results))
            .catch(err => console.log(err));
    },[])
    return(
        <table className="table table-dark col-8 mx-auto">
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Price</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {
                    products.map((p,i) => {
                        return <tr key={i}>
                                <td>{p.title}</td>
                                <td>{p.price}</td>
                                <td>
                                    <Link to={`/edit/${p._id}`} className="btn btn-outline-warning text-light btn-success">Edit</Link>
                                    <Link to={`/product/${p._id}`} className="btn btn-outline-warning text-light btn-info">Show</Link>
                                </td>
                            </tr>
                    })
                }
            </tbody>
        </table>
    );
}

export default Main;