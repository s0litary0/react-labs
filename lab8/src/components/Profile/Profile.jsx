import './Profile.css'
import { useAuth } from '../../contexts/authContext'

export default function Profile() {
    const { currentUser, userLoggedIn } = useAuth();
    console.log(currentUser);

    return (
        <div className="profile-container">
            <ul className="profile-list">
                <li className="item"><span className="item__name">UID:</span> {currentUser.uid}</li>
                <li className="item"><span className="item__name">Email:</span> {currentUser.email}</li>
                <li className="item"><span className="item__name">Registered since:</span> {currentUser.metadata.creationTime}</li>
                <li className="item"><span className="item__name">Last login at:</span> {currentUser.metadata.lastSignInTime}</li>
            </ul>
        </div>
    )

}