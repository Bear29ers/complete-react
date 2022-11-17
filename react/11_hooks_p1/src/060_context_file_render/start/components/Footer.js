import { useUpdateTheme } from "../context/ThemeContext";

const Footer = () => {
  // 更新用関数が読み込まれているために、再レンダリングの対象となっている
  const setTheme = useUpdateTheme();

  console.log("footer");
  return (
    <footer>
      <div>フッター</div>
    </footer>
  );
};

export default Footer;
