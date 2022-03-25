import React, { useContext } from 'react';
import GoogleButton from 'react-google-button';
import './WeedBuddyButtons.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCannabis } from '@fortawesome/free-solid-svg-icons'

export default function WeedBuddyLoginButton(props) {

    return (
        <button type='button' className='btn btn-success btn-lg' onClick={props.onClick} style={{ 'font-size': '1.5rem' }}>
            <FontAwesomeIcon icon={faCannabis} className={'pe-3'} />
            LOG IN
        </button>
    );
}
