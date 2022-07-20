import { useEffect } from "react";
import Choices from 'choices.js';

function useChoices () {
    
  useEffect(() => {
    const element = document.getElementById('select');
    
    new Choices(element, {
      allowHTML: true,
      searchEnabled: false,
      itemSelectText: ""
    });

  }, []);
}

export default useChoices;