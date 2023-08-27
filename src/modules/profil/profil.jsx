import React, { useState, useEffect } from "react";
import "./profil.css";
import user from "../../assets/teste-files/profil.jpeg";

export function Profil() {
  const [userData, setUserData] = useState([]);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    bio: ""
  });

  useEffect(() => {
    // Fetch user data from server
    fetch("http://localhost:8080/users")
      .then((response) => response.json())
      .then((data) => setUserData(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();

    // Perform POST request with formData
    fetch("http://localhost:8080/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle response or update UI
        console.log("Data sent successfully:", data);
        // You might want to update the user data after successful POST
        setUserData([...userData, data]);
      })
      .catch((error) => console.error("Error sending data:", error));
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  return (
    <div className="profile-container">
      <div id="both">
        <form onSubmit={handleSubmit}>
          <div className="tab-content" id="v-pills-tabContent">
            <form action="">
          <div className="tab-content" id="v-pills-tabContent">
            <div className="tab-pane fade show active" id="account" role="tabpanel" aria-labelledby="account-tab">
                  <div className="row">

                      <div className="column">
                        <div className="form-roup">
                           <label htmlFor="">First Name</label>
                           <input type="text" className="form-control-column" value={""}/>
                        </div>


                        <div className="form-roup">
                           <label htmlFor="">Last Name</label>
                           <input type="text" className="form-control-column" value={""}/>
                        </div>

                      </div>

                      <div>
                        <div className="form-roup">
                           <label htmlFor="">Email</label>
                           <input type="email" className="form-control" value={""}/>
                        </div>
                      </div>

                      <div>
                        <div className="form-roup">
                           <label htmlFor="">Password</label>
                           <input type="text" className="form-control" value={""}/>
                        </div>
                      </div>

                      <div>
                        <div className="form-group">
                          <label htmlFor="">Bio</label>
                          <textarea className="form-control" rows="7"></textarea>
                        </div>
                      </div>

                  </div>
                  <div className="button">
                    <button className="btn btn-primary">Update</button>
                    <button className="btn btn-ligth">Cancel</button>
                  </div>
            </div>
          </div>
          </form>
          </div>
          <div className="button">
            <button className="btn btn-primary" type="submit">
              Update
            </button>
            <button className="btn btn-light">Cancel</button>
          </div>
        </form>

        <form action="" className="pic">
          {/* Your image upload code */}
          <div className="settings">            
                <h3>Account Settings</h3>
              </div>
            <div className="upload">
             <img src={user}alt="user"/>
            <div className="round">
            <input type="file" />
              </div>
              </div>
        </form>

        {/* User data display */}
        <div className="user-list">
          {userData.map((user) => (
            <div key={user.id} className="user-card">
              {/* User data display */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
