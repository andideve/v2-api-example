import { Handler } from 'express';

import errors from '../utils/errors';
import linktrees from '../_data/linktrees';

const handler: Handler = async (req, res) => {
  if (req.method !== 'GET') {
    res.status(404).json(errors[404]);
    return;
  }

  res.json({ linktrees });
};

export default handler;
