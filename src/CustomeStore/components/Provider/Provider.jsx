import { StoreContext } from "../../contexts/StoreContext";

export const Provider = ({ children, store }) => {
  return (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
  );
};
