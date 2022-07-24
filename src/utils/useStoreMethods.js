import useStore from "./use-context";

export const useStoreMethods = (method) => {
  const store = useStore();

  switch (method) {
    case "add":
      return store.items.addItem;
    case "modify":
      return store.items.modifyItem;
    case "laod":
      return store.items.laod;
    case "delete":
      return store.items.delete;
    default:
      return () => {};
  }
};
