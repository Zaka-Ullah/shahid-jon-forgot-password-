import { createContext, useContext } from "react";

type Layer2ContextType = {

};

const Layer2Context = createContext<Layer2ContextType>({

});

export const useLayer2Context = () => {
  const layer2Context = useContext(Layer2Context);

  if (!layer2Context) {
    throw new Error(
      "useLayer2Context has to be used within <Layer2Context.Provider>"
    );
  }

  return layer2Context;
};

export default Layer2Context;
