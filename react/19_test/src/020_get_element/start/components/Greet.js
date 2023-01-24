const Greet = () => {
  return (
    <div>
      <form>
        <h1>こんばんは</h1>
        <input type="radio" />
        <label htmlFor="fullname">氏名</label>
        <input id="fullname" type="text" placeholder="Yuta Okuma" />
        <button>ボタン１</button>
        <button>ボタン２</button>
        <img src="/logo512.png" alt="React Logo" />
        <h2>こんにちは</h2>
      </form>
    </div>
  );
};

export default Greet;
