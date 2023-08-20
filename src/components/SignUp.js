import React, { useState } from "react";
import { createUser } from "../api/users";
import '../css/style.css';
import '../fonts/material-icon/css/material-design-iconic-font.min.css';

export default function SignUp() {

    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
      });
    
      const handleChange = (e) => {
        this.setState({inputValue: e.target.value});
        const { name, value } = e.target;
        setFormData((prevData) => ({
          ...prevData,
          [name]: value,
        }));
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
        
        await createUser(formData);
        // Valider les données ici (par exemple, vérification des mots de passe)
        // Si les données sont valides, vous pouvez envoyer l'objet JSON
    
        const userData = {
          username: formData.username,
          email: formData.email,
          password: formData.password,
          confirmPassword: formData.confirmPassword
        };
    
        console.log('Données soumises :', userData);
      };

    return (
        <div className="main">
            {/* Sign up form */}
            <section class="signup">
                <div class="container">
                    <div class="signup-content">
                        <div class="signup-form">
                            <h2 class="form-title">Sign up</h2>
                            <form method="POST" class="register-form" id="register-form" onSubmit={handleSubmit}>
                                <div class="form-group">
                                    <label for="name"><i class="zmdi zmdi-account material-icons-name"></i></label>
                                    <input type="text" name="name" id="name" placeholder="Your Name" value={formData.username} onChange={handleChange}/>
                                </div>
                                <div class="form-group">
                                    <label for="email"><i class="zmdi zmdi-email"></i></label>
                                    <input type="email" name="email" id="email" placeholder="Your Email" value={formData.password} onChange={handleChange}/>
                                </div>
                                <div class="form-group">
                                    <label for="pass"><i class="zmdi zmdi-lock"></i></label>
                                    <input type="password" name="pass" id="pass" placeholder="Password" value={formData.password} onChange={handleChange}/>
                                </div>
                                <div class="form-group">
                                    <label for="re-pass"><i class="zmdi zmdi-lock-outline"></i></label>
                                    <input type="password" name="re_pass" id="re_pass" placeholder="Repeat your password" value={formData.confirmPassword} onChange={handleChange}/>
                                </div>
                                <div class="form-group">
                                    <input type="checkbox" name="agree-term" id="agree-term" class="agree-term" />
                                    <label for="agree-term" class="label-agree-term"><span><span></span></span>I agree all statements in  <a href="#" class="term-service">Terms of service</a></label>
                                </div>
                                <div class="form-group form-button">
                                    <input type="submit" name="signup" id="signup" class="form-submit" value="Register"/>
                                </div>
                            </form>
                        </div>
                        <div class="signup-image">
                            {/* <figure><img src="images/signup-image.jpg" alt="sing up image"></figure> */}
                            <a href="#" class="signup-image-link">I am already member</a>
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
