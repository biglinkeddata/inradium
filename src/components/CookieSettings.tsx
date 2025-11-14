import { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";
import { Button } from "./ui/button";
import { Switch } from "./ui/switch";
import { Label } from "./ui/label";

interface CookiePreferences {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
}

interface CookieSettingsProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSave: (preferences: CookiePreferences) => void;
}

const CookieSettings = ({ open, onOpenChange, onSave }: CookieSettingsProps) => {
  const [preferences, setPreferences] = useState<CookiePreferences>({
    necessary: true,
    analytics: false,
    marketing: false,
  });

  useEffect(() => {
    const saved = localStorage.getItem("cookie-preferences");
    if (saved) {
      setPreferences(JSON.parse(saved));
    }
  }, [open]);

  const handleSave = () => {
    localStorage.setItem("cookie-preferences", JSON.stringify(preferences));
    localStorage.setItem("cookie-consent", "customized");
    onSave(preferences);
    onOpenChange(false);
    // Reload to apply analytics changes
    window.location.reload();
  };

  const handleAcceptAll = () => {
    const allAccepted = {
      necessary: true,
      analytics: true,
      marketing: true,
    };
    setPreferences(allAccepted);
    localStorage.setItem("cookie-preferences", JSON.stringify(allAccepted));
    localStorage.setItem("cookie-consent", "accepted");
    onSave(allAccepted);
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>Cookie Preferences</DialogTitle>
          <DialogDescription>
            Manage your cookie preferences. You can enable or disable different types of cookies below.
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6 py-4">
          {/* Necessary Cookies */}
          <div className="flex items-start justify-between space-x-4">
            <div className="flex-1 space-y-1">
              <Label htmlFor="necessary" className="text-base font-medium">
                Necessary Cookies
              </Label>
              <p className="text-sm text-muted-foreground">
                Essential for the website to function properly. These cannot be disabled.
              </p>
            </div>
            <Switch
              id="necessary"
              checked={preferences.necessary}
              disabled
              className="mt-1"
            />
          </div>

          {/* Analytics Cookies */}
          <div className="flex items-start justify-between space-x-4">
            <div className="flex-1 space-y-1">
              <Label htmlFor="analytics" className="text-base font-medium">
                Analytics Cookies
              </Label>
              <p className="text-sm text-muted-foreground">
                Help us understand how visitors interact with our website by collecting anonymous data.
              </p>
            </div>
            <Switch
              id="analytics"
              checked={preferences.analytics}
              onCheckedChange={(checked) =>
                setPreferences({ ...preferences, analytics: checked })
              }
              className="mt-1"
            />
          </div>

          {/* Marketing Cookies */}
          <div className="flex items-start justify-between space-x-4">
            <div className="flex-1 space-y-1">
              <Label htmlFor="marketing" className="text-base font-medium">
                Marketing Cookies
              </Label>
              <p className="text-sm text-muted-foreground">
                Used to track visitors across websites to display relevant advertisements.
              </p>
            </div>
            <Switch
              id="marketing"
              checked={preferences.marketing}
              onCheckedChange={(checked) =>
                setPreferences({ ...preferences, marketing: checked })
              }
              className="mt-1"
            />
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-2 sm:justify-end">
          <Button
            onClick={handleSave}
            variant="outline"
            className="w-full sm:w-auto"
          >
            Save Preferences
          </Button>
          <Button
            onClick={handleAcceptAll}
            className="w-full sm:w-auto"
          >
            Accept All
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CookieSettings;
