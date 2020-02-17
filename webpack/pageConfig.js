module.exports = [
  {
    inject: false,
    template: "src/view/index.pug",
    filename: "index.html",
    title: "Microsoft Official Site",
    templateParameters: (compilation, assets, options) => ({
      config: compilation.options,
      assets,
      options,
      imageUrls: {
        logo: "https://i.ibb.co/wwLhz98/logo.png",
        card1: "https://i.ibb.co/LZPVKq9/card1.png",
        card2: "https://i.ibb.co/KjGFHVJ/card2.png",
        card3: "https://i.ibb.co/2cnshH6/card3.png",
        card4: "https://i.ibb.co/G57P0Pb/card4.png",
        card5: "https://i.ibb.co/zVqhWn2/card5.png",
        card6: "https://i.ibb.co/mGZcxcn/card6.jpg",
        card7: "https://i.ibb.co/NpPvVHj/card7.png",
        card8: "https://i.ibb.co/LkP4L5T/card8.png",
        socialFb: "https://i.ibb.co/LrVMXNR/social-fb.png",
        socialTwitter: "https://i.ibb.co/vJvbLwm/social-twitter.png",
        socialLinkedin: "https://i.ibb.co/vJvbLwm/social-twitter.png"
      }
    })
  }
];
