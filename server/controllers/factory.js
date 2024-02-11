exports.page = (pageUrl, options) => (req, res) => {
  res.status(200).render(pageUrl, options);
};
