import { create } from "zustand";

export const useSettingsStore = create((set) => ({
  // Profile
  name: "Alex Doe",
  email: "alex@example.com",

  // Appearance
  theme: "light",
  accent: "blue",
  transparency: true,

  // Notifications
  notificationsEnabled: true,
  notificationStyle: "banner",
  dndEnabled: false,

  // Privacy
  shareData: false,
  personalizedAds: true,

  // Localization
  region: "us",
  calendar: "gregorian",
  use24h: false,

  // Security
  twoFactorEnabled: false,

  // Advanced
  experiments: false,

  // Actions
  setName: (name) => set({ name }),
  setEmail: (email) => set({ email }),

  setTheme: (theme) => set({ theme }),
  setAccent: (accent) => set({ accent }),
  setTransparency: (transparency) => set({ transparency }),

  setNotificationStyle: (notificationStyle) => set({ notificationStyle }),
  setDndEnabled: (dndEnabled) => set({ dndEnabled }),
  toggleNotifications: () =>
    set((state) => ({ notificationsEnabled: !state.notificationsEnabled })),

  setShareData: (shareData) => set({ shareData }),
  setPersonalizedAds: (personalizedAds) => set({ personalizedAds }),

  setRegion: (region) => set({ region }),
  setCalendar: (calendar) => set({ calendar }),
  setUse24h: (use24h) => set({ use24h }),

  setTwoFactorEnabled: (twoFactorEnabled) => set({ twoFactorEnabled }),

  setExperiments: (experiments) => set({ experiments })
}));
