import Profile from "./components/Profile";

const Example = () => {
  const profileList = [
    {
      name: "Geo",
      age: 18,
      hobbies: ["sports", "music"],
    },
    {
      name: "Tom",
      age: 25,
      hobbies: ["movie", "music"],
    },
    {
      name: "Lisa",
      age: 21,
      hobbies: ["sports", "travel", "game"],
    },
  ];
  return (
    <>
      <h3>練習問題</h3>
      <ul>
        {profileList.map((profile) => (
          <li key={profile.name}>
            <Profile {...profile} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default Example;
