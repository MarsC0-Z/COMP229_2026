import Qualification from '../models/qualification.model.js';

// GET /api/qualifications
const list = async (req, res) => {
  try {
    res.json(await Qualification.find());
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// GET /api/qualifications/:id
const read = async (req, res) => {
  try {
    const item = await Qualification.findById(req.params.id);
    if (!item) return res.status(404).json({ error: 'Qualification not found' });
    res.json(item);
  } catch (err) {
    res.status(400).json({ error: 'Invalid id' });
  }
};

// POST /api/qualifications
const create = async (req, res) => {
  try {
    const item = await new Qualification(req.body).save();
    res.status(201).json(item);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// PUT /api/qualifications/:id
const update = async (req, res) => {
  try {
    const item = await Qualification.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!item) return res.status(404).json({ error: 'Qualification not found' });
    res.json(item);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// DELETE /api/qualifications/:id
const remove = async (req, res) => {
  try {
    const item = await Qualification.findByIdAndDelete(req.params.id);
    if (!item) return res.status(404).json({ error: 'Qualification not found' });
    res.json({ message: 'Qualification deleted', item });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// DELETE /api/qualifications
const removeAll = async (req, res) => {
  try {
    const result = await Qualification.deleteMany({});
    res.json({ message: `${result.deletedCount} qualifications deleted` });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export default { list, read, create, update, remove, removeAll };