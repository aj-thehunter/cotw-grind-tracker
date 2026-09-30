import type { CapacitorConfig } from "@capacitor/cli";

const config: CapacitorConfig = {
  appId: "com.ajthehunter.cotwgrindtracker",
  appName: "COTW Grind Tracker",
  webDir: "www",
  bundledWebRuntime: false,
  server: {
    androidScheme: "https"
  }
};

export default config;
