import {useLocation, useNavigate, useParams} from "react-router-dom";
import {useEffect} from "react";
import axios from "axios";
import {Customer} from "./Customer";

export default function FormCustomer() {
    const {id} = useParams();
    // const navigate = useNavigate();

    const location = useLocation();
    console.log(location)
    useEffect(() => {

        axios.get(`http://localhost:8080/customers/${id}`)
            .then((res) => {
                // console.log(res)
                console.log(res.data)
            })
    })
}
