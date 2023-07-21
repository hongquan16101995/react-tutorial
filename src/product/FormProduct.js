import {Field, Form, Formik} from "formik";
import {useState} from "react";
import {Link} from "react-router-dom";

export default function FormProduct(props) {

    const [indexAuto, setIndexAuto] = useState(3)

    return (
        <>
            <div>
                <h3>Form product</h3>
                <Formik
                    initialValues={props.productUpdate}
                    onSubmit={(values) => {
                        create(values)
                    }}
                    enableReinitialize={true}
                >
                    <Form>
                        <table>
                            <tbody>
                            <tr>
                                <td><label htmlFor={'name'}>Name</label></td>
                                <td><Field id={'name'} type={'text'}
                                           name={'name'}></Field></td>
                            </tr>
                            <tr>
                                <td><label htmlFor={'price'}>Price</label></td>
                                <td><Field id={'price'} type={'number'}
                                           name={'price'}></Field></td>
                            </tr>
                            <tr>
                                <td><label htmlFor={'category'}>Category</label></td>
                                <td><Field id={'category'} type={'text'}
                                           name={'category'}></Field></td>
                            </tr>
                            <tr>
                                <td><Link to={'/'}>Back home</Link></td>
                                <td>
                                    <button type={'submit'}>Save</button>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </Form>
                </Formik>
            </div>
        </>
    )

    function create(values) {

        let index = checkId(values.id);
        if (index !== -1) {
            updatePost(index, values)
        } else {
            values.id = indexAuto + 1
            props.products.push(values)
        }
        props.test()
        setIndexAuto(indexAuto + 1)
    }

    function checkId(id) {
        for (let i = 0; i < props.products.length; i++) {
            if (props.products[i].id === id) {
                return i
            }
        }
        return -1
    }

    function updatePost(index, values) {
        if (values.name !== undefined) {
            props.products[index].name = values.name
        }
        if (values.price !== undefined) {
            props.products[index].price = values.price
        }
        if (values.category !== undefined) {
            props.products[index].category = values.category
        }
    }
}
