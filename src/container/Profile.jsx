import { ACED_Mohammed_Reda } from "../assets/images"

const ProfileComponent = () => {
    return (
        <div className="app_without_bg w-full app__wrapper section__padding">
            <div className="profile-person">
                <img alt="person-image" src={ACED_Mohammed_Reda} />
                <div className="profile-info">
                    <h1></h1>
                </div>
            </div>
        </div>
    )
}

export default ProfileComponent