module.exports = {
  siteMetadata: {
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    {
      resolve: "gatsby-plugin-fullstory",
      options: {
        fs_org: process.env.FULLSTORY_ORG,
      },
    },
  ],
};
