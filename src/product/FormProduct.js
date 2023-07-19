import {useState} from "react";
import {Product} from "./Product";

export default function FormProduct(props) {
    const [productCreate, setProductCreate] = useState(new Product());

    return (
        <>
            <div>
                <h3>Form product</h3>
                <table>
                    <tbody>
                    <tr>
                        <td>Id</td>
                        <td><input id={'id'} type="text"
                                   placeholder={props.productUpdate.id}
                                   onChange={(e) => {
                                       getValue(e)
                                   }}/></td>
                    </tr>
                    <tr>
                        <td>Name</td>
                        <td><input id={'name'} type="text"
                                   placeholder={props.productUpdate.name}
                                   onChange={(e) => {
                                       getValue(e)
                                   }}/></td>
                    </tr>
                    <tr>
                        <td>Price</td>
                        <td><input id={'price'} type="text"
                                   placeholder={props.productUpdate.price}
                                   onChange={(e) => {
                                       getValue(e)
                                   }}/></td>
                    </tr>
                    <tr>
                        <td>Category</td>
                        <td><input id={'category'} type="text"
                                   placeholder={props.productUpdate.category}
                                   onChange={(e) => {
                                       getValue(e)
                                   }}/></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>
                            <button onClick={create}>Create</button>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </>
    )

    function getValue(e) {
        if (e.target.id === "id") {
            productCreate.id = +e.target.value
            setProductCreate(productCreate)
        } else if (e.target.id === "name") {
            productCreate.name = e.target.value
            setProductCreate(productCreate)
        } else if (e.target.id === "price") {
            productCreate.price = +e.target.value
            setProductCreate(productCreate)
        } else {
            productCreate.category = e.target.value
            setProductCreate(productCreate)
        }
    }

    function create() {
        let index = checkId(productCreate.id);
        if (index !== -1) {
            updatePost(index)
        } else {
            props.products.push(productCreate)
        }
        setProductCreate({})

        document.getElementById("id").value = ""
        document.getElementById("name").value = ""
        document.getElementById("price").value = ""
        document.getElementById("category").value = ""
        props.test()
    }

    function checkId(id) {
        for (let i = 0; i < props.products.length; i++) {
            if (props.products[i].id === id) {
                return i
            }
        }
        return -1
    }

    function updatePost(index) {
        if (productCreate.name !== undefined) {
            props.products[index].name = productCreate.name
        }
        if (productCreate.price !== undefined) {
            props.products[index].price = productCreate.price
        }
        if (productCreate.category !== undefined) {
            props.products[index].category = productCreate.category
        }
    }
}
