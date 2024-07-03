
import React, { useContext } from 'react'
import { Helmet } from 'react-helmet'
import MainContext from '../../../context/context'
import axios from "axios";
import "./Product.css"


const Dashboard = () => {
    const { data, setData } = useContext(MainContext);
    function deleteMehsular(_id) {
        axios.delete(`http://localhost:8080/api/mehsular/${_id}`)
        const target = data.find((item) => item._id == _id);
        const targetOfIndex = data.indexOf(target);
        data.splice(targetOfIndex, 1)
        setData([...data])
    }
    return (
        <>
            <Helmet>
                <title>Product</title>
            </Helmet>
            <div className='dashboard_all'> 
                <h1 className='dashboard'>All Product</h1>
                <div className='dashboard_table'>
                <table class="table ">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Title</th>
                            <th scope="col">Price</th>
                            <th scope="col">Description</th>
                            <th scope="col">Haqqinda</th>
                            <th scope="col">Haqqindaki</th>
                            <th scope="col">Haqqindauc</th>
                            <th scope="col">Delete</th>

                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item, index) => (
                            <tr key={index}>
                                <th scope="row">{index + 1}</th>
                                <td>{item.title}</td>
                                <td>{item.price}</td>
                                <td>{item.description}</td>
                                <td>{item.haqqinda}</td>
                                <td>{item.haqqindaki}</td>
                                <td>{item.haqqindauc}</td>
                                {/* <td>{item._id}</td> */}
                                
                                <td><button onClick={() => {
                                    console.log(item._id)
                                    deleteMehsular(item._id);
                                }} className='btn btn-danger' style={{margin:"0px"}}>Delete</button></td>
                              
                            </tr>
                        ))}

                    </tbody>
                </table>
                </div>
                
            </div>
        </>
    )
}

export default Dashboard
