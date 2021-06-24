import React from "react";

import { useAuth0 } from "@auth0/auth0-react";

const Nikola = () => {
    const { user } = useAuth0();
    const { name, picture, email } = user;

    return (
        <div>
            "This is a protected route!"
        </div>
    );
};

export default Nikola;
