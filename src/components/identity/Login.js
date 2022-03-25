import React, { Fragment, useContext } from 'react';
import GoogleButton from 'react-google-button';

import { GoogleLogin, GoogleLogout } from 'react-google-login';
import IdentityContext from './IdentityContext';
import { RefreshTokenSetup } from './RefreshTokenSetup';
import WeedBuddyLoginButton from './WeedBuddyLoginButton';
import WeedBuddyLogoutButton from './WeedBuddyLogoutButton';

const clientId =
    '853043602806-d7od8lg7drl2uijl4dbv17c1nekcivti.apps.googleusercontent.com';

export default function Login(props) {

    const { user, setUser } = useContext(IdentityContext);

    const loginSuccess = (res) => {
        RefreshTokenSetup(res);
        setUser(buildUserFromLogin(res.profileObj));
    };

    const loginFailure = (res) => {
        console.error("Could not log you in with Google: " + res);
    };

    const logoutSuccess = (res) => {
        localStorage.setItem('authToken', null);
        setUser({ idpIdentifier: null, name: null, firstName: null, lastName: null, email: null, avatarUrl: null, loggedIn: false });
    };

    const buildUserFromLogin = (profile) => {
        return {
            idpIdentifier: profile.googleId,
            avatarUrl: profile.imageUrl,
            email: profile.email,
            name: profile.name,
            firstName: profile.givenName,
            lastName: profile.familyName,
            loggedIn: true
        }
    }

    return (
        <Fragment>
            {user?.loggedIn &&
                <GoogleLogout
                    clientId={clientId}
                    buttonText="Logout"
                    onLogoutSuccess={logoutSuccess}
                    render={
                        renderProps => (
                            <WeedBuddyLogoutButton user={user} onClick={renderProps.onClick} />
                        )
                    }
                />
            }
            {!user?.loggedIn &&
                <GoogleLogin
                    clientId={clientId}
                    buttonText="Login"
                    render={
                        renderProps => (
                            <WeedBuddyLoginButton onClick={renderProps.onClick} />
                        )
                    }
                    onSuccess={loginSuccess}
                    onFailure={loginFailure}
                    cookiePolicy={'single_host_origin'}
                    isSignedIn={true}
                />
            }
        </Fragment>
    );
}
