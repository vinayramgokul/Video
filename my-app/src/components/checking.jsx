<div className="col-12">
<label htmlFor="yourPassword" className="form-label">
    Password
</label>
<input
    type="password"
    name="Password"
    className="form-control"
    id="yourPassword"
    required
    onChange={handleInput}
/>
<div className="invalid-feedback">Please Strong Password</div>
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
    onChange={handleInput}
/>
<div className="invalid-feedback">Please enter a valid Email address!</div>
</div>
