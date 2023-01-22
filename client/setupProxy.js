const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    createProxyMiddleware("/customersignin", {
      target: "http://localhost:5000",
    })
  );
  app.use(
    createProxyMiddleware("/employeesignin", {
      target: "http://localhost:5000",
    })
  );
  app.use(
    createProxyMiddleware("/busiloanform", { target: "http://localhost:5000" })
  );

  app.use(
    createProxyMiddleware("/makepayment", { target: "http://localhost:5000" })
  );
  app.use(
    createProxyMiddleware("/viewstatus", { target: "http://localhost:5000" })
  );
  app.use(
    createProxyMiddleware("/viewform", { target: "http://localhost:5000" })
  );
  app.use(
    createProxyMiddleware("/morloanform", { target: "http://localhost:5000" })
  );

  app.use(
    createProxyMiddleware("/edu/**", { target: "http://localhost:5000" })
  );
  app.use(
    createProxyMiddleware("/business/**", { target: "http://localhost:5000" })
  );
  app.use(
    createProxyMiddleware("/loanform/edu", { target: "http://localhost:5000" })
  );
  app.use(
    createProxyMiddleware("/emp/geteducationforms", {
      target: "http://localhost:5000",
    })
  );
  app.use(
    createProxyMiddleware("/emp/getbusinessforms", {
      target: "http://localhost:5000",
    })
  );
  app.use(
    createProxyMiddleware("/emp/getmortgageforms", {
      target: "http://localhost:5000",
    })
  );
  app.use(
    createProxyMiddleware("/emp/updatestatus", {
      target: "http://localhost:5000",
    })
  );
  app.use(
    createProxyMiddleware("/pay/details", {
      target: "http://localhost:5000",
    })
  );
  app.use(
    createProxyMiddleware("/emp/stat/state", {
      target: "http://localhost:5000",
    })
  );
  app.use(
    createProxyMiddleware("/emp/stat/college", {
      target: "http://localhost:5000",
    })
  );
  app.use(
    createProxyMiddleware("/mortgage/loans", {
      target: "http://localhost:5000",
    })
  );
  app.use(
    createProxyMiddleware("/updateloan", {
      target: "http://localhost:5000",
    })
  );
};
