import "./profil.css";

import user from "../../assets/teste-files/profil.jpeg";

export function Profil () {
    return (
        <div className="profile-container">

        <div id="both">
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
            <form action="" className="pic">
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
        </div>
        </div>
    )
}