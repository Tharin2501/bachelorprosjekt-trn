const withCSS = require("@zeit/next-css");
const withPlugins = require("next-compose-plugins");
const withFonts = require("next-fonts");

module.exports = withPlugins([withCSS, withFonts], { target: "serverless" });