import { Handler } from 'express';

import errors from '../utils/errors';
import author from '../_data/author';

const handler: Handler = async (req, res) => {
  if (req.method !== 'GET') {
    res.status(404).json(errors[404]);
    return;
  }

  res.json(author);
};

export default handler;
