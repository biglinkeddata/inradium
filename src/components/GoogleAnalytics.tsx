import { useEffect } from "react";

// Replace with your actual Google Analytics measurement ID
const GA_MEASUREMENT_ID = "G-XXXXXXXXXX";

const GoogleAnalytics = () => {
  useEffect(() => {
    const checkAndLoadGA = () => {
      const consent = localStorage.getItem("cookie-consent");
      const preferencesStr = localStorage.getItem("cookie-preferences");
      
      if (!consent || consent === "declined") {
        return;
      }

      let shouldLoadGA = false;
      
      if (consent === "accepted") {
        shouldLoadGA = true;
      } else if (consent === "customized" && preferencesStr) {
        const preferences = JSON.parse(preferencesStr);
        shouldLoadGA = preferences.analytics === true;
      }

      if (shouldLoadGA && GA_MEASUREMENT_ID !== "G-XXXXXXXXXX") {
        // Load Google Analytics script
        const script1 = document.createElement("script");
        script1.async = true;
        script1.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
        document.head.appendChild(script1);

        // Initialize gtag
        const script2 = document.createElement("script");
        script2.innerHTML = `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_MEASUREMENT_ID}', {
            'anonymize_ip': true,
            'cookie_flags': 'SameSite=None;Secure'
          });
        `;
        document.head.appendChild(script2);

        console.log("Google Analytics loaded with user consent");
      }
    };

    checkAndLoadGA();

    // Listen for storage changes (when user updates preferences)
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === "cookie-preferences" || e.key === "cookie-consent") {
        window.location.reload();
      }
    };

    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  return null;
};

export default GoogleAnalytics;
