import "./suggestion.css";
import user from "../../assets/teste-files/couverture.jpg"

function PertinentPostItemM() {
    return (
        <>
            <div className="pertinant-post-item">
                <div className="user-info">
                    <div className="user-img-space">
                        <img src={user} alt="user" />
                    </div>
                    <div className="user-name">
                        <p> Tiana-Finaritra</p>
                    </div>
                </div>
                <div className="post-details-space">
                    <div className="post-title">
                        <p>Title</p>
                    </div>
                    <div className="post-date">
                        <span>.</span> 12 juil 2023
                    </div>
                </div>
                <div className="rate-pertinent-container">
                    <div className="rate-pertinent">
                        <span>20K</span> of peoples love this
                    </div>
                    <button className="see-pertinent-post">
                        see
                    </button>
                </div>
            </div>
        </>
    )
}


function SeePeopleIteM() {
    return (
        <>
            <div className="people-item">
                <div className="user-info">
                    <div className="user-img-space">
                        <img src={user} alt="user" />
                    </div>
                    <div className="user-name">
                        <p> Tiana-Finaritra</p>
                    </div>
                </div>
                <div className="amis-en-commun">
                    <p> <span>67</span> amis en communs avec vous </p>
                </div>

                <div className="people-btn-container">
                    <button className="delete-btn">
                        delete
                    </button>
                    <button className="follow-bottom">
                        follow
                    </button>
                </div>

            </div>
        </>
    )
}


export function Suggestion() {
    return (
        <>
            <div className="pertinant-post-space">
                <div className="all-suggest-contain">
                    <div className="pertinent-post-title">
                        PERTINENT POST
                    </div>
                    <div className="pert-post-item-container">
                        <PertinentPostItemM />
                        <PertinentPostItemM />
                        <PertinentPostItemM />
                    </div>
                </div>

                <div className="see-people-container">
                    <div className="see-people-title">
                        SEE PEOPLE
                    </div>
                    <div className="see-people-space">
                        <SeePeopleIteM />
                        <SeePeopleIteM />
                        <SeePeopleIteM />
                        <SeePeopleIteM />
                        <SeePeopleIteM />
                        <SeePeopleIteM />
                        <SeePeopleIteM />
                        <SeePeopleIteM />
                        <SeePeopleIteM />
                        <SeePeopleIteM />
                        <SeePeopleIteM />
                        <SeePeopleIteM />
                    </div>
                </div>
            </div>
        </>
    )
}