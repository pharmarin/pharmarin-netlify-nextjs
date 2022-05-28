module.exports = {
  pageExtensions: ["tsx"],
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    config.module.rules.push(
      ...[
        {
          test: /\.yml$/,
          type: "json",
          use: "yaml-loader",
        },
        {
          test: /\.svg$/,
          use: "@svgr/webpack",
        },
      ]
    );
    config.resolve.alias = {
      ...config.resolve.alias,
      // fixes next-mdx-remote: Package path ./jsx-runtime.js is not exported from package react
      // https://github.com/hashicorp/next-mdx-remote/issues/237
      "react/jsx-runtime.js": require.resolve("react/jsx-runtime"),
    };
    return config;
  },
};
