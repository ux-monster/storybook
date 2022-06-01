module.exports = {
  plugins: [
    {
      plugin: require("craco-alias"),
      options: {
        source: "tsconfig",
        baseUrl: ".",
        tsConfigPath: "tsconfig.paths.json",
        debug: false
      }
    }
  ],
  webpack: {
    resolve: {
      alias: {
        "react-native$": "react-native-web"
      }
    }
  },
  babel: {
    plugins: [
      [
        "module-resolver",
        {
          alias: {
            "^react-native$": "react-native-web"
          }
        }
      ]
    ]
  }
};
