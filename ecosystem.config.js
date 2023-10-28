module.exports = {
  apps: [
    {
      name: "My-NextJS-App",
      script: "npm",
      args: "start",
      env: {
        NODE_ENV: "development",
      },
      env_production: {
        NODE_ENV: "production",
      },
    },
  ],
};
