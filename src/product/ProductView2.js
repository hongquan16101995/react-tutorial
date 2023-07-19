import {Component} from "react";

class ProductView2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: [
                {
                    name: "aaa",
                    price: 10000
                },
                {
                    name: "aaa",
                    price: 10000
                }
            ],
            human: {
                name: "Quân",
                age: 29
            }
        }
    }

    componentDidMount() {
        console.log("success")
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log("updating")
    }

    componentWillUnmount() {
        console.log("finish")
    }

    render() {
        return (
            <>
                <h1>Đây là tên: {this.state.products[0].name}</h1>
                <button onClick={() => {
                    this.setState({
                        products: [
                            {
                                name: "demo-update",
                                price: 10000
                            }]
                    })
                }}>Click</button>
            </>
        )
    }
}

export default ProductView2;
