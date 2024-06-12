// components/CollectChatScript.js
import { useEffect } from 'react';

const CollectChatScript = () => {
  useEffect(() => {
    // Load Collect.chat script
    (function(w, d) {
      w.CollectId = "5cd12ddee1d07210896b7fc9";
      var h = d.head || d.getElementsByTagName("head")[0];
      var s = d.createElement("script");
      s.setAttribute("type", "text/javascript");
      s.setAttribute("src", "https://collectcdn.com/launcher.js");
      h.appendChild(s);
    })(window, document);

    return () => {
      // Cleanup: Remove the script
      const script = document.querySelector('script[src="https://collectcdn.com/launcher.js"]');
      if (script) {
        script.parentNode.removeChild(script);
      }
    };
  }, []);

  return null; // This component doesn't render anything visible
};

export default CollectChatScript;