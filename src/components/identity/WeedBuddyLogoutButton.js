import './WeedBuddyButtons.css';

export default function WeedBuddyLogoutButton(props) {

    return (
        <div style={{ 'text-align': 'right' }}>
            <img src={props.user.avatarUrl} alt="avatar" id="avatarImage" />
            <b>{props.user.name}</b><br />
            <button type='button' className='btn btn-link p-0' onClick={props.onClick}>Log Out</button>
        </div>
    );
}
