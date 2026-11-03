import express from 'express';
import qualificationCtrl from '../controllers/qualification.controller.js';

const router = express.Router();

router
  .route('/api/qualifications')
  .get(qualificationCtrl.list)          // get all
  .post(qualificationCtrl.create)       // add new
  .delete(qualificationCtrl.removeAll); // remove all

router
  .route('/api/qualifications/:id')
  .get(qualificationCtrl.read)          // get by id
  .put(qualificationCtrl.update)        // update by id
  .delete(qualificationCtrl.remove);    // remove by id

export default router;