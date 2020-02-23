module.exports = (app) => {
  app.get('/', async (req, res) => {
    res.json({ status: 'Your endpoints would go here...' });
  });

  app.use('*', (req, res) => {
    // error handling
    return res.status(404).json({ message: 'This service does not exist. Please double check the URL endpoint.' });
    // next({ error: 'error', message: 'Something went wrong' });
  });
};
