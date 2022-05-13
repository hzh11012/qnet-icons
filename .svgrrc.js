module.exports = {
  icon: 24,
  typescript: true,
  indexTemplate: () => "build/index-template.js",
  svgProps: {
    fill: "{props.color}",
  },
  outDir: "packages/react/src/icons",
};
