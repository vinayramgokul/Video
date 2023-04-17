import React, { useState ,useEffect} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './assets/css/style.css';
import logo from './assets/img/logo.png';

import Validation from './LoginValidation';
import axios from 'axios';


function Login() {
  const [values, setValues] = useState({
    email: '',
    password : ''
  })
  
  const [buttonClicked, setButtonClicked] = useState(false);
  const navigate = useNavigate();
  const [errors, setErrors] = useState({})
  const handleInput = (event) => {
    setValues(prev => ({...prev, [event.target.name]: [event.target.value]}))
  }
  // useEffect(() => {
  //   if (errors.email === "" && errors.password === "") {
  //     axios.post('http://localhost:3002/login', values)
  //       .then(res => {
  //         if (res.data === "Success") {
  //           navigate('/home');
  //         }
  //         else {
  //           alert("No Record Exist");
  //         }
  //       })
  //       .catch(err => console.log(err));
  //   }
  // }, [errors, navigate, values]);

  useEffect(() => {
    if (buttonClicked) {
      if (errors.email === "" && errors.password === "") {
        axios.post('http://localhost:3002/login', values)
          .then(res => {
            if (res.data === "Success") {
              navigate('/home');
            }
            else {
              alert("No Record Exist");
            }
          })
          .catch(err => console.log(err));
      }
    }
  }, [buttonClicked]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors(Validation(values)); 
    setButtonClicked(true);
  }
    
  
  return (
    <main>
      <div className="container">
        <section className="section register min-vh-100 d-flex flex-column align-items-center justify-content-center py-4">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-4 col-md-6 d-flex flex-column align-items-center justify-content-center">
                <div className="d-flex justify-content-center py-4">
                  <a href="index.html" className="logo d-flex align-items-center w-auto">

                    <img src={logo} alt="logo" style={{ width: 123 }} />
                  </a>
                </div>
                <div className="card mb-3">
                  <div className="card-body">
                    <div className="pt-4 pb-2">
                      <h5 className="card-title text-center pb-0 fs-4">Login</h5>
                      <p className="text-center small">Enter your username &amp; password to login</p>
                    </div>
                    {/* <form action='' onSubmit={handleSubmit} className="row g-3 needs-validation" noValidate>
                     */}
                    <form action='' onSubmit={handleSubmit} className="row g-3 needs-validation" noValidate>
                      <div className="col-12">
                        <label htmlFor="yourEmail" className="form-label">
                          Your Email
                        </label>
                        <input type="email" name="email" onChange={handleInput} className="form-control" id="yourEmail" required />
                        <div className="invalid-feedback">Please enter a valid Email adddress!</div>
                        {errors.email && <span className='text-danger'> {errors.email}</span>}
                      </div>
                      <div className="col-12">
                        <label htmlFor="yourPassword" className="form-label">
                          Password
                        </label>
                        <input type="password" name="password" onChange={handleInput} className="form-control" id="yourPassword" required />
                        <div className="invalid-feedback">Please enter your password!</div>
                        {errors.password && <span className='text-danger'> {errors.password }</span>}
                      </div>
                      <div className="col-12">
                        <div className="form-check">
                          <input className="form-check-input" type="checkbox" name="remember" value="true" id="rememberMe" />
                          <label className="form-check-label" htmlFor="rememberMe">
                            Remember me
                          </label>
                        </div>
                      </div>
                      <div className="col-12">
                        {/* <button className="btn btn-primary w-100" type="submit"> */}
                        <button className="btn btn-primary w-100" onClick={handleSubmit}>
                          Login
                        </button>
                      </div>
                      <div className="col-12">
                        <p className="small mb-0">
                          {/* Don't have account? <a href={Register}>Create an account</a> */}
                          Don't have account? <Link to="/Register">Create an account</Link>
                        </p>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      {/* <a href={Register} className="back-to-top d-flex align-items-center justify-content-center">
        <i className="bi bi-arrow-up-short"></i>
      </a>  */}
      <Link to="/Register" className="back-to-top d-flex align-items-center justify-content-center" >
        <i className="bi bi-arrow-up-short"></i>
      </Link>


    </main>
  );
}

export default Login;

