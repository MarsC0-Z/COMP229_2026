import express from 'express';
import contactCtrl from '../controllers/contact.controller.js';

const router = express.Router();

router
  .route('/api/contacts')
  .get(contactCtrl.list)          // get all
  .post(contactCtrl.create)       // add new
  .delete(contactCtrl.removeAll); // remove all

router
  .route('/api/contacts/:id')
  .get(contactCtrl.read)          // get by id
  .put(contactCtrl.update)        // update by id
  .delete(contactCtrl.remove);    // remove by id

export default router;