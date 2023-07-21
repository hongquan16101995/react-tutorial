import {useEffect, useState} from "react";
import axios from "axios";
import {Link} from "react-router-dom";

export default function ListCustomer() {
    const [customers, setCustomers] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8080/customers")
            .then((res) => {
                // console.log(res)
                // console.log(res.data)
                setCustomers(res.data)
            })
    }, [])

    return (
        <>
            <h1>List customer</h1>
            <table>
                <tbody>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Address</th>
                    <th>Avatar</th>
                    <th>Action</th>
                </tr>
                {customers.map((item) => {
                    return (
                        <>
                            <tr>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.age}</td>
                                <td>{item.address}</td>
                                <td><img style={{width: '100px', height: '100px'}}
                                         src={item.avatar} alt=""/></td>
                                <td><Link to={`/form-customer/${item.id}`}>Update</Link></td>
                            </tr>
                        </>
                    )
                })}
                </tbody>
            </table>
        </>
    )
}
