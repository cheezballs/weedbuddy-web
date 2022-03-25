import React from 'react';

const anonymousUser = {
    idpIdentifier: null,
    name: null,
    firstName: null,
    lastName: null,
    email: null,
    avatarUrl: null,
    loggedIn: false
}

const IdentityContext = React.createContext({ user: anonymousUser, setUser: () => { } });

export const IdentityProvider = IdentityContext.Provider;

export default IdentityContext;