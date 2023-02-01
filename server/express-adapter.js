const expressAdapter = (router) => {
  return async (req, res) => {
    const httpRequest = {
      body: req.body,
    };
    const httpResponse = await router.execute(httpRequest);
    res.status(httpResponse.statusCode).json(httpResponse.body);
  };
};

export { expressAdapter };
