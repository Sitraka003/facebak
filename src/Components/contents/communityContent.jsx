import React from "react";
import CommunityCards from "../communityCards/communityCards.jsx";

const communityContent = () => {
    return (
        <div className="container">
            {/* une section qui permettra à l'utilisateur de découvrir && || joindre une communauté */}

            <div>
                <h1>Discover communities</h1>
                <div>
                    <div>
                        <h2>Communities you may like</h2>
                        <CommunityCards />
                    </div>
                </div>
            </div>

            {/* une section pour consulter les communauté auxquelq il appartient déjà */}
        </div>
    );
};

export default communityContent;
