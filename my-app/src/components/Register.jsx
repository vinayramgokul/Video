import React from 'react';
import { useState } from 'react';
import { Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './assets/css/style.css';
import logo from './assets/img/logo.png';
import axios from 'axios';
import Validation from './RegisterValidation';
function RegisterForm() {
    const [values, setValues] = useState({
        firstName: '',
        lastName:'',
        email: '',
        password: '',
        phoneNumber: '',
        gender:'',
        age:'',
        product:'Social media',
        termsAgreed:false
    })
    const [isSubmitted, setIsSubmitted] = useState(false);

    const [errors, setErrors] = useState({})
    const handleInput = (event) => {
         setValues(prev => ({...prev, [event.target.name]: [event.target.value]}))
       }



    // const [firstName, setFirstName] = useState('');
    // const [lastName, setLastName] = useState('');
    // const [email, setEmail] = useState('');
    // const [password, setPassword] = useState('');

    // const [phoneNumber, setPhoneNumber] = useState('');
    // const [gender, setGender] = useState("male");
    // const [age, setAge] = useState('');
    // const [product, setProduct] = useState("Social media");
    // const [termsAgreed, setTermsAgreed] = useState(false);

    // const handleFirstNameChange = (event) => {
    //     setFirstName(event.target.value);
    // };

    // const handleLastNameChange = (event) => {
    //     setLastName(event.target.value);
    // };

    // const handleEmailChange = (event) => {
    //     setEmail(event.target.value);
    // };

    // const handlePasswordChange = (event) => {
    //     setPassword(event.target.value);
    // };

    // const handlePhoneNumberChange = (event) => {
    //     setPhoneNumber(event.target.value);
    // };

    // const handleGenderChange = (event) => {
    //     setGender(event.target.value);
    // };

    // const handleAgeChange = (event) => {
    //     setAge(event.target.value);
    // };

    // const handleProductChange = (event) => {
    //     setProduct(event.target.value);
    // };

    // const handleTermsAgreedChange = (event) => {
    //     setTermsAgreed(event.target.checked);
    // };

    const handleSubmit = async (event) => {
        event.preventDefault();
        setErrors(Validation(values));
        
        console.log('Register Submit called');
        try {
            const response = await axios.post('http://localhost:3002/register',
                {
                    firstname: values.firstName,
                    lastname: values.lastName,
                    email: values.email,
                    password: values.password,
                    phonenumber: values.phoneNumber,
                    gender: values.gender,
                    age: values.age,
                    product: values.product,
                    termsagreed: values.termsAgreed
                });

            console.log(response.data);
            setIsSubmitted(true);

            //   console.log(err);
        } catch (error) {
            console.log(error.response.data);
        }
        // Handle form submission here
    };


    return (
        <main>
            <Container>
                <Form>

                    <div className="container">

                        <section className="section register min-vh-100 d-flex flex-column align-items-center justify-content-center py-4">
                            <div className="container">
                                <div className="row justify-content-center">
                                    <div className="col-lg-6 col-md-6 d-flex flex-column align-items-center justify-content-center">
                                        <div className="d-flex justify-content-center py-4">
                                            <a href="index.html" className="logo d-flex align-items-center w-auto">
                                                <img src={logo} alt="" style={{ width: "123px" }} />
                                            </a>
                                        </div>
                                        {isSubmitted ? (
                                            <div>
                                            <p>Thank you for registering!</p>
                                            <p className="small mb-0">
                                            <Link to="/">Log in</Link>
                                            </p>
                                            </div>
                                       
                                        ) : (
                                        <div className="card mb-3">
                                            <div className="card-body">
                                                <div className="pt-4 pb-2">
                                                    <h5 className="card-title text-center pb-0 fs-4">Create an Account</h5>
                                                    <p className="text-center small">Enter your personal details to create account</p>
                                                </div>
                                                {/* <form className="row g-3 needs-validation" noValidate onSubmit={handleSubmit}> */}
                                                <div className="col-12">
                                                    <label htmlFor="yourName" className="form-label">
                                                        First Name
                                                    </label>
                                                    <input
                                                        type="text"
                                                        name="firstName"
                                                        className="form-control"
                                                        id="yourName"
                                                        //value={firstName}
                                                        onChange={handleInput}

                                                        required
                                                    />
                                                    <div className="invalid-feedback">Please enter your first name!</div>
                                                    {errors.firstName && <span className='text-danger'> {errors.firstName}</span>}
                                                </div>
                                                <div className="col-12">
                                                    <label htmlFor="lastName" className="form-label">
                                                        Last Name
                                                    </label>
                                                    <input
                                                        type="text"
                                                        name="lastName"
                                                        className="form-control"
                                                        id="lastName"
                                                        //value={lastName}
                                                        onChange={handleInput}
                                                        required
                                                    />
                                                    <div className="invalid-feedback">Please enter your last name!</div>
                                                     {errors.lastName && <span className='text-danger'> {errors.lastName}</span>} 
                                                </div>
                                                <div className="col-12">
                                                    <label htmlFor="yourEmail" className="form-label">
                                                        Your Email
                                                    </label>
                                                    <input
                                                        type="email"
                                                        name="email"
                                                        className="form-control"
                                                        id="yourEmail"
                                                        required
                                                        //value={email}
                                                        onChange={handleInput}
                                                    />
                                                    <div className="invalid-feedback">Please enter a valid Email address!</div>
                                                     {errors.email && <span className='text-danger'> {errors.email}</span>} 
                                                </div>
                                                <div className="col-12">
                                                    <label htmlFor="yourPassword" className="form-label">
                                                        Password
                                                    </label>
                                                    <input
                                                        type="password"
                                                        name="password"
                                                        className="form-control"
                                                        id="yourPassword"
                                                        required
                                                        //value={password}
                                                        onChange={handleInput}
                                                    />
                                                    <div className="invalid-feedback">Please Strong Password</div>
                                                     {errors.password && <span className='text-danger'> {errors.password }</span>}     
                                                </div>
                                                <div className="col-12">
                                                    <label htmlFor="mobile number" className="form-label">
                                                        Mobile Number
                                                    </label>
                                                    <div className="input-group has-validation">
                                                        <input
                                                            type="tel"
                                                            id="typePhone"
                                                            name="phoneNumber"
                                                            className="form-control"
                                                            //value={phoneNumber} value={gender} value={age} value={product} checked={termsAgreed}
                                                            onChange={handleInput}
                                                        />
                                                    </div>

                                                    <div className="col-12">
                                                        <div className="form-group">
                                                            <label htmlFor="exampleFormControlSelect1">Gender</label>
                                                            <select className="form-control" 
                                                            id="exampleFormControlSelect1" 
                                                            name = "gender"
                                                              onChange={handleInput}>
                                                                <option value="male">male</option>
                                                                <option value="female">female</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                    <div className="col-12">
                                                        <label htmlFor="age number" className="form-label">Age</label>
                                                        <div className="input-group has-validation">
                                                            <input type="age" 
                                                            id="age" 
                                                            className="form-control"  
                                                            name = "age"
                                                            onChange={handleInput} required />
                                                            <div className="invalid-feedback">Please enter Age</div>
                                                        </div>
                                                    </div>
                                                    <div className="col-12">
                                                        <div className="form-group">
                                                            <label htmlFor="exampleFormControlSelect2">Product</label>
                                                            <select className="form-control" 
                                                            id="exampleFormControlSelect2"  
                                                            name = "product"
                                                            onChange={handleInput}>
                                                                <option value="Social media">Social media</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                    <div className="col-12">
                                                        <div className="form-check">
                                                            <input
                                                                className="form-check-input"
                                                                name="termsagreed"
                                                                type="checkbox"
                                                                value=""
                                                                id="acceptTerms"
                                                                required
                                                                //checked={values.termsAgreed}
                                                                onChange={handleInput}
                                                            />
                                                            <label className="form-check-label" htmlFor="acceptTerms">
                                                                I agree and accept the <Link to="/Home">terms and conditions</Link>
                                                            </label>
                                                            <div className="invalid-feedback">You must agree before submitting.</div>
                                                        </div>
                                                    </div>
                                                    <div className="col-12">
                                                        {/* <button onClick={handleSubmit} className="btn btn-primary w-100" type="submit" disabled={!values.termsAgreed}>
                                                            Create Account
                                                        </button> */}
                                                        <button onClick={handleSubmit} className="btn btn-primary w-100" type="submit">
                                                            Create Account
                                                        </button>    
                                                    </div>
                                                    <div className="col-12">
                                                        <p className="small mb-0">
                                                            Already have an account? <a href="pages-login.html">Log in</a>
                                                        </p>
                                                    </div>

                                                </div>

                                                {/* </form> */}
                                            </div>
                                        </div>)}</div></div>
                            </div>
                        </section>
                    </div>
                </Form>
            </Container>
        </main>
    );
}



export default RegisterForm;


