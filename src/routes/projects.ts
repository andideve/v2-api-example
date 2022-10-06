import { Handler } from 'express';

import errors from '../utils/errors';
import author from '../_data/author';
import projects from '../_data/projects';
import { Project } from '../types';

enum SortTypes {
  'ASC' = 'ASC',
  'DESC' = 'DESC',
}

const getTime = (() => {
  const cache: Record<string, number> = {};
  return (date: string) => {
    if (date in cache) return cache[date];
    const result = new Date(date).getTime();
    cache[date] = result;

    return result;
  };
})();

function sortItems(items: Project[], type: string) {
  if (type === SortTypes.ASC) {
    return items.sort((a, b) => getTime(a.date) - getTime(b.date));
  }
  if (type === SortTypes.DESC) {
    return items.sort((a, b) => getTime(b.date) - getTime(a.date));
  }
  return items;
}

const handler: Handler = async (req, res) => {
  if (req.method !== 'GET') {
    res.status(404).json(errors[404]);
    return;
  }

  const { archived, sort, limit } = req.query;

  let results = [...projects];
  if (archived === 'true') {
    results = projects.filter((e) => e.archived);
  }
  if (archived === 'false') {
    results = projects.filter((e) => !e.archived);
  }
  if (typeof sort === 'string') {
    results = sortItems(results, sort);
  }
  if (typeof limit === 'string') {
    results = results.slice(0, Number(limit));
  }
  results = results.map((project) => ({
    ...project,
    github: project.github ? `${author.urls.github}/${project.github}` : undefined,
  }));

  res.json({ projects: results });
};

export default handler;
