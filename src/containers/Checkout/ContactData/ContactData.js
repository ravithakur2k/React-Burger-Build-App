import React, { Component } from 'react';
import Button from '../../../components/UI/Button/Button';
import classes from './ContactData.css';
import axios from '../../../axios-orders';
import Spinner from '../../../components/UI/Spinner/Spinner';

class ContactData extends Component {
    state = {
        name: '',
        email: '',
        address: {
            street: '',
            postalCode: ''
        },
        loading: false
    }

    orderHandler = (event) => {
        event.preventDefault();
        this.setState({
            loading: true
        })
        const order = {
            ingredients: this.state.ingredients,
            price: this.props.price,
            customer: {
                name: 'Ravi Thakur',
                address: {
                    steet: "Test Rd",
                    zipCode: "123456",
                    country: "Germany",
                },
                email: "test@gmail.com"
            },
            deliveryMethod: 'fastest'
        }
        // alert("You Continue!!")
        axios.post('/orders.json', order).then(Response => {
            this.setState({ loading: false })
            this.props.history.push('/');
        }).catch(error => {
            this.setState({ loading: false })
        })
        console.log("Ingredients::", this.props.ingredients);
    }

    render() {
        let form = (
            <form>
                <input className={classes.Input} type="email" name="email" placeholder="Your Email" />
                <input className={classes.Input} clatype="text" name="name" placeholder="Your Name" />
                <input className={classes.Input} ztype="text" name="street" placeholder="Street" />
                <input className={classes.Input} type="text" name="postal" placeholder="Postal Code" />
                <Button btnType="Success" clicked={this.orderHandler}>ORDER</Button>
            </form>
        );
        if (this.state.loading) {
            form = <Spinner />
        }
        return (
            <div className={classes.ContactData}>
                <h4>Enter your Contact Data</h4>
                {form}
            </div>
        )
    }
}

export default ContactData;