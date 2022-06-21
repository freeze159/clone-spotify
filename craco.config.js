const path = require(`path`);

module.exports = {
  webpack: {
    alias: {
      '@services': path.resolve(__dirname, 'src/services'),
      '@store': path.resolve(__dirname, 'src/store'),
      '@const': path.resolve(__dirname, 'src/constants.js'),
      '@Components': path.resolve(__dirname, 'src/components'),
      '@BodyCom': path.resolve(__dirname, 'src/components/MainComponent/BodyComponent'),
      '@FooterCom': path.resolve(__dirname, 'src/components/MainComponent/FooterComponent'),
      '@SidebarCom': path.resolve(__dirname, 'src/components/MainComponent/SidebarComponent'),
    }
  },
};