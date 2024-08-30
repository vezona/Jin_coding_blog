hexo.extend.generator.register("portfolio", function (locals) {
  const portfolioPosts = locals.posts.filter((post) =>
    post.source.startsWith("_portfolio/")
  );

  return {
    path: "portfolio/index.html",
    layout: ["portfolio"],
    data: {
      title: "Portfolio",
      portfolio: portfolioPosts, // 將資料存入 page.portfolio
    },
  };
});
