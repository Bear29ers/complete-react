import "./Profile.css";

const Profile = ({ name = "John Doe", age = "??", country = "Japan" }) => {
  return (
    <div className="profile">
      <p>Name: {name}</p>
      <p>Age: {age}</p>
      <p>From: {country}</p>
    </div>
  );
};

export default Profile;
