module.exports = [
  {
    inject: false,
    template: "src/view/index.pug",
    filename: "index.html",
    title: "Nitco | Accelerate Digital Transformation",
    templateParameters: (compilation, assets, options) => ({
      config: compilation.options,
      assets,
      options
    })
  }
];
