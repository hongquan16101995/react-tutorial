import {useEffect, useState} from "react";
import {Product} from "./Product";
import FormProduct from "./FormProduct";

function ProductView() {
    const [products, setProducts] = useState(
        [new Product(1,"Pepsi", 10000, "Drink"),
            new Product(2,"Sting", 7000, "Drink"),
            new Product(3,"Chin-su", 15000, "Food")]
    );
    const [productUpdate, setProductUpdate] = useState({});
    const [check, setCheck] = useState(false);
    const [checkTable, setCheckTable] = useState(true);

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
            <button onClick={showForm}>Create new product</button>
            {checkTable && <table>
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
                                <td>
                                    <button onClick={() => {
                                        deleteProduct(p.id)
                                    }}>Delete
                                    </button>
                                </td>
                            </tr>
                        </>
                    )
                })}
                </tbody>
            </table>}
            {check && <FormProduct
                productUpdate={productUpdate}
                products={products}
                test={m1}/>}
        </>
    )

    function showForm() {
        setCheck(!check)
        setCheckTable(!checkTable)
    }

    function update(id) {
        for (let i = 0; i < products.length; i++) {
            if (products[i].id === id) {
                setProductUpdate(products[i])
            }
        }
        showForm()
    }

    function deleteProduct(id) {
        if (window.confirm("Are you sure?")) {
            for (let i = 0; i < products.length; i++) {
                if (products[i].id === id) {
                    products.splice(i, 1)
                }
                setProducts([...products])
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
        setProductUpdate({})
        showForm()
    }
}

export default ProductView;
