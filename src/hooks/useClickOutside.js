import { useRef, useEffect } from "react";

function useClickOutside(func) {
  const node = useRef(null);

  useEffect(() => {
    document.addEventListener("click", onDocumentClick);

    return () => document.removeEventListener("click", onDocumentClick);
  }, []);

  const onDocumentClick = (event) => {
    if (node.current.contains(event.target)) {
      return;
    }
    func();
  };

  return node;
}

export default useClickOutside;
