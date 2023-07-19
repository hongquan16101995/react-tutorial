import {useEffect, useState} from "react";
import {Product} from "./Product";
import FormProduct from "./FormProduct";

function ProductView() {
    const [products, setProducts] = useState([new Product(1, "Pepsi", 10000, "Drink"),
        new Product(2, "Sting", 7000, "Drink"),
        new Product(3, "Chin-su", 15000, "Food")]);
    const [productUpdate, setProductUpdate] = useState({});

    // useEffect(() => {
    //     setProducts([
    //         new Product(1, "Pepsi", 10000, "Drink"),
    //         new Product(2, "Sting", 7000, "Drink"),
    //         new Product(3, "Chin-su", 15000, "Food")
    //     ])
    // },[])

    return (
        <>
            <button onClick={sort}>Sort</button>
            <table>
                <tbody>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Category</th>
                    <th colSpan={2}>Action</th>
                </tr>
                {products.map((p) => {
                    return (
                        <>
                            <tr>
                                <td>{p.id}</td>
                                <td>{p.name}</td>
                                <td>{p.price}</td>
                                <td>{p.category}</td>
                                <td>
                                    <button onClick={() => {
                                        update(p.id)
                                    }}>Update
                                    </button>
                                </td>
                                <td>Delete</td>
                            </tr>
                        </>
                    )
                })}
                </tbody>
            </table>
            <FormProduct
                productUpdate={productUpdate}
                products={products}
                test={m1}/>
        </>
    )

    function update(id) {
        for (let i = 0; i < products.length; i++) {
            if (products[i].id === id) {
                setProductUpdate(products[i])
            }
        }
    }

    function sort() {
        products.sort((a, b) => {
            return a.price - b.price;
        })
        console.log(products)
        //syntax spread
        setProducts([...products])
        // không thay đổi vị trí của state => component không re-render
        // setProducts(products)
    }

    function m1() {
        setProducts([...products])
    }
}

export default ProductView;
