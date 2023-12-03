import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.my.app',
  appName: 'myApp',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  }
};

export default config;
