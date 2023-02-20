module.exports = {
  ci: {
    collect: {
      startServerCommand: "yarn dev",
      url: ["https://moyyn-active-sourcing.vercel.app"],
    },
    upload: {
      target: "temporary-public-storage",
    },
  },
};
