// This is where project configuration and plugin options are located. 
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'PUSH',
  plugins: [
    {
      use: "@gridsome/source-filesystem",
      options: {
        path: "content/*.md",
        typeName: "Post"
      }
    },
    {
      use: "@gridsome/source-filesystem",
      options: {
        path: "content/*.bio.md",
        typeName: "Bio"
      }
    },
    {
      use: "@gridsome/source-filesystem",
      options: {
        path: "content/wepush.md",
        typeName: "Index"
      }
    },
    {
      use: "@gridsome/source-filesystem",
      options: {
        path: "content/gallery/**/*.jpg",
        typeName: "Photo"
      }
    },
    {
      use: `gridsome-plugin-netlify-cms`,
      options: {
        publicPath: `/admin`
      }
    },
  ]
}
