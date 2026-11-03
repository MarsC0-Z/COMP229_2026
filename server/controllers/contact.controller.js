import Contact from '../models/contact.model.js';

// GET /api/contacts
const list = async (req, res) => {
  try {
    res.json(await Contact.find());
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// GET /api/contacts/:id
const read = async (req, res) => {
  try {
    const item = await Contact.findById(req.params.id);
    if (!item) return res.status(404).json({ error: 'Contact not found' });
    res.json(item);
  } catch (err) {
    res.status(400).json({ error: 'Invalid id' });
  }
};

// POST /api/contacts
const create = async (req, res) => {
  try {
    const item = await new Contact(req.body).save();
    res.status(201).json(item);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// PUT /api/contacts/:id
const update = async (req, res) => {
  try {
    const item = await Contact.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!item) return res.status(404).json({ error: 'Contact not found' });
    res.json(item);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// DELETE /api/contacts/:id
const remove = async (req, res) => {
  try {
    const item = await Contact.findByIdAndDelete(req.params.id);
    if (!item) return res.status(404).json({ error: 'Contact not found' });
    res.json({ message: 'Contact deleted', item });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// DELETE /api/contacts
const removeAll = async (req, res) => {
  try {
    const result = await Contact.deleteMany({});
    res.json({ message: `${result.deletedCount} contacts deleted` });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export default { list, read, create, update, remove, removeAll };