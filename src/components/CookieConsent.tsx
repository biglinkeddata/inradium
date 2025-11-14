import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import CookieSettings from "./CookieSettings";

const CookieConsent = () => {
  const [showConsent, setShowConsent] = useState(false);
  const [showSettings, setShowSettings] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      setShowConsent(true);
    }
  }, []);

  const handleAccept = () => {
    const allAccepted = {
      necessary: true,
      analytics: true,
      marketing: true,
    };
    localStorage.setItem("cookie-preferences", JSON.stringify(allAccepted));
    localStorage.setItem("cookie-consent", "accepted");
    setShowConsent(false);
  };

  const handleDecline = () => {
    const onlyNecessary = {
      necessary: true,
      analytics: false,
      marketing: false,
    };
    localStorage.setItem("cookie-preferences", JSON.stringify(onlyNecessary));
    localStorage.setItem("cookie-consent", "declined");
    setShowConsent(false);
  };

  const handleSettings = () => {
    setShowSettings(true);
  };

  const handleSavePreferences = () => {
    setShowConsent(false);
  };

  if (!showConsent) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-background/95 backdrop-blur-md border-t border-border shadow-lg">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex-1">
            <p className="text-sm text-foreground">
              We use cookies to enhance your browsing experience, serve personalized content, and analyze our traffic. 
              By clicking "Accept", you consent to our use of cookies. Read our{" "}
              <a href="/privacy-policy" className="underline hover:text-primary transition-colors">
                Privacy Policy
              </a>{" "}
              to learn more.
            </p>
          </div>
          <div className="flex items-center gap-2 flex-shrink-0">
            <Button
              onClick={handleSettings}
              variant="ghost"
              size="sm"
              className="whitespace-nowrap"
            >
              Settings
            </Button>
            <Button
              onClick={handleDecline}
              variant="outline"
              size="sm"
              className="whitespace-nowrap"
            >
              Decline
            </Button>
            <Button
              onClick={handleAccept}
              size="sm"
              className="whitespace-nowrap"
            >
              Accept All
            </Button>
          </div>
        </div>
      </div>

      <CookieSettings
        open={showSettings}
        onOpenChange={setShowSettings}
        onSave={handleSavePreferences}
      />
    </div>
  );
};

export default CookieConsent;
