/* Chakra UIのインポート */
import { ChakraProvider } from "@chakra-ui/react";
import Todo from "./components/Todo";

const Example = () => {
  // Chakra UIを使用するためにChakraProviderでラップする
  return (
    <>
      <ChakraProvider>
        <Todo />
      </ChakraProvider>
    </>
  );
};

export default Example;
