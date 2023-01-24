import Profile from "./components/Profile";
import Container from "./components/Container";

const profile = [
  { name: "Takashi", age: 19, country: "Japan" },
  { name: "Jane", age: 28, country: "UK", color: "red" },
];

/* コンポーネントの子要素はprops.childrenに渡る
コンポーネントが子要素を持つ場合、props.childrenという特別なプロパティとして受け渡される
*/
const Example = () => {
  return (
    <div>
      <Container title="順番通り渡す">
        <Profile key={profile[0].name} {...profile[0]} />
        <Profile key={profile[1].name} {...profile[1]} />
      </Container>

      <Container
        title="個別渡す"
        first={<Profile key={profile[0].name} {...profile[0]} />}
        second={<Profile key={profile[0].name} {...profile[0]} />}
      />
    </div>
  );
};

export default Example;
