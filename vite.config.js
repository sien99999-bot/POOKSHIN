import { resolve } from 'node:path';
import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        home: resolve(__dirname, 'home.html'),
        map: resolve(__dirname, 'map.html'),
        my: resolve(__dirname, 'my.html'),
        setting: resolve(__dirname, 'setting.html'),
        profileEdit: resolve(__dirname, 'profile-edit.html'),
        locationSetting: resolve(__dirname, 'location-setting.html'),
        displaySetting: resolve(__dirname, 'display-setting.html'),
        privacy: resolve(__dirname, 'privacy.html'),
        terms: resolve(__dirname, 'terms.html'),
        contact: resolve(__dirname, 'contact.html'),
        withdraw: resolve(__dirname, 'withdraw.html'),
        detail: resolve(__dirname, 'detail.html'),
        review: resolve(__dirname, 'review.html'),
        reviewWrite: resolve(__dirname, 'review-write.html'),
        tasteData: resolve(__dirname, 'taste-data.html'),
        timePoki: resolve(__dirname, 'time-poki.html'),
        onboarding: resolve(__dirname, 'onboarding.html'),
        pokiSuccess: resolve(__dirname, 'poki-success.html'),
        splash: resolve(__dirname, 'splash.html'),
      },
    },
  },
});
