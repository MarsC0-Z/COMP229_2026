import Project from '../models/project.model.js';

// GET /api/projects
const list = async (req, res) => {
  try {
    res.json(await Project.find());
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// GET /api/projects/:id
const read = async (req, res) => {
  try {
    const item = await Project.findById(req.params.id);
    if (!item) return res.status(404).json({ error: 'Project not found' });
    res.json(item);
  } catch (err) {
    res.status(400).json({ error: 'Invalid id' });
  }
};

// POST /api/projects
const create = async (req, res) => {
  try {
    const item = await new Project(req.body).save();
    res.status(201).json(item);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// PUT /api/projects/:id
const update = async (req, res) => {
  try {
    const item = await Project.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!item) return res.status(404).json({ error: 'Project not found' });
    res.json(item);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// DELETE /api/projects/:id
const remove = async (req, res) => {
  try {
    const item = await Project.findByIdAndDelete(req.params.id);
    if (!item) return res.status(404).json({ error: 'Project not found' });
    res.json({ message: 'Project deleted', item });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// DELETE /api/projects
const removeAll = async (req, res) => {
  try {
    const result = await Project.deleteMany({});
    res.json({ message: `${result.deletedCount} projects deleted` });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export default { list, read, create, update, remove, removeAll };