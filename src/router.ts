import express from 'express';

import author from './routes/author';
import linktrees from './routes/linktrees';
import projects from './routes/projects';
import email from './routes/email';

const router = express.Router();

router.all('/author', author);
router.all('/linktrees', linktrees);
router.all('/projects', projects);
router.all('/email', email);

export default router;
