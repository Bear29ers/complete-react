/* TypeScriptでのクラスの扱い方 */
// class AdminUser extends User {}
class User {
  /* クラスではメンバー変数の型定義を最初に行う必要がある
  public → クラス内外からアクセスできる
  private → クラス内でのみアクセスできる
  protected → クラスとそのクラスの継承先のみでしかアクセスできない
*/
  public name: string;
  protected age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

const Example = () => {
  const user = { name: "Hanako", age: 21 };
  const user1 = new User("Hanako", 22);
  console.log(user1.name);
  // console.log(user1.age)
  return (
    <div>
      <p>Name: {user.name}</p>
      <p>Age: {user.age}</p>
    </div>
  );
};

export default Example;
