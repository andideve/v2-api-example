import { Handler, Response } from 'express';

import errors from '../utils/errors';
import { Email } from '../types';

function validateForm({ name, from, body }: Partial<Email>, res: Response) {
  const isValid = [name, from, body].every((e) => typeof e === 'string');
  if (!isValid) res.status(400).json(errors({ message: 'Provide a data' }));

  return isValid;
}

const handler: Handler = async (req, res) => {
  if (req.method !== 'POST') {
    res.status(404).json(errors[404]);
    return;
  }

  if (!validateForm(req.body, res)) return;

  res.status(201).json(req.body);
};

export default handler;
