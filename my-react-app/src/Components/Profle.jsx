import profilePic from "../assets/bild.JPG";
import "../profile.css";

function Profile() {
  return (
    <div className="profile">
      <img src={profilePic} alt="profile picture" className="img" />
      <h2 className="profile-title">Hasan</h2>
      <p className="profile-text">
        Hellow I am 26 years old and I like to play video games
      </p>
    </div>
  );
}

export default Profile;
