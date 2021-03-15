module.exports = {
  preset: "jest-playwright-preset",
  testEnvironmentOptions: {
    "jest-playwright": {
      browsers: ["firefox","chromium"],
      launchOptions:{
        headless:false
      },

    },
  }
};
