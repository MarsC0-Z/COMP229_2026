import express from 'express';
import projectCtrl from '../controllers/project.controller.js';

const router = express.Router();

router
  .route('/api/projects')
  .get(projectCtrl.list)          // get all
  .post(projectCtrl.create)       // add new
  .delete(projectCtrl.removeAll); // remove all

router
  .route('/api/projects/:id')
  .get(projectCtrl.read)          // get by id
  .put(projectCtrl.update)        // update by id
  .delete(projectCtrl.remove);    // remove by id

export default router;