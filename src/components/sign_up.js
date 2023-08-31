import { useState } from "react";
import { createUser } from "../api/users";
import '../css/style.css';
import '../fonts/material-icon/css/material-design-iconic-font.min.css';

export default function Signup() {

    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const handleChange = (e) => {
        console.log("Handlechange");
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]:value
        }));
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        await createUser(formData);

        setFormData({
            username: '',
            email: '',
            password: '',
            confirmPassword: ''
        });
    }

    return (
        <div className="main">
            {/* Sign up form */}
            <section className="signup">
                <div className="container">
                    <div className="signup-content">
                        <div className="signup-form">
                            <h2 className="form-title">Sign up</h2>
                            <form method="POST" className="register-form" id="register-form" onSubmit={handleSubmit}>
                                <div className="form-group">
                                    <label htmlFor="name"><i className="zmdi zmdi-account material-icons-name"></i></label>
                                    <input type="text" name="username" id="name" placeholder="Your Name" value={formData.username} onChange={handleChange}/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email"><i className="zmdi zmdi-email"></i></label>
                                    <input type="email" name="email" id="email" placeholder="Your Email" value={formData.email} onChange={handleChange}/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="pass"><i className="zmdi zmdi-lock"></i></label>
                                    <input type="password" name="password" id="pass" placeholder="Password" value={formData.password} onChange={handleChange}/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="re-pass"><i className="zmdi zmdi-lock-outline"></i></label>
                                    <input type="password" name="confirmPassword" id="re_pass" placeholder="Repeat your password" value={formData.confirmPassword} onChange={handleChange}/>
                                </div>
                                <div className="form-group">
                                    <input type="checkbox" name="agree-term" id="agree-term" className="agree-term" />
                                    <label htmlFor="agree-term" className="label-agree-term"><span><span></span></span>I agree all statements in  <a href="#" className="term-service">Terms of service</a></label>
                                </div>
                                <div className="form-group form-button">
                                    <input type="submit" name="signup" id="signup" className="form-submit" value="Register"/>
                                </div>
                            </form>
                        </div>
                        <div className="signup-image">
                            {/* <figure><img src="images/signup-image.jpg" alt="sing up image"></figure> */}
                            <a href="/login" className="signup-image-link">I am already member</a>
                        </div>
                    </div>
                </div>
            </section>

            {/* JS */}
            <script src="vendor/jquery/jquery.min.js"></script>
            <script src="js/main.js"></script>
        </div>
    );
}