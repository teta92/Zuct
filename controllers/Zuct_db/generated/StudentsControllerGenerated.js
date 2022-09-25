/**
 * 
 * 
  _____                      _              _ _ _     _   _     _        __ _ _      
 |  __ \                    | |            | (_) |   | | | |   (_)      / _(_) |     
 | |  | | ___    _ __   ___ | |_    ___  __| |_| |_  | |_| |__  _ ___  | |_ _| | ___ 
 | |  | |/ _ \  | '_ \ / _ \| __|  / _ \/ _` | | __| | __| '_ \| / __| |  _| | |/ _ \
 | |__| | (_) | | | | | (_) | |_  |  __/ (_| | | |_  | |_| | | | \__ \ | | | | |  __/
 |_____/ \___/  |_| |_|\___/ \__|  \___|\__,_|_|\__|  \__|_| |_|_|___/ |_| |_|_|\___|
 
 * DO NOT EDIT THIS FILE!! 
 * 
 *  TO CUSTOMIZE studentsControllerGenerated.js PLEASE EDIT ../studentsController.js
 * 
 *  -- THIS FILE WILL BE OVERWRITTEN ON THE NEXT SKAFFOLDER'S CODE GENERATION --
 * 
 */
import Properties from "../../../properties";
import StudentsModel from "../../../models/Zuct_db/StudentsModel";
import ErrorManager from "../../../classes/ErrorManager";
import { authorize } from "../../../security/SecurityManager";
import StudentsController from "../StudentsController";

const generatedControllers = {
  /**
   * Init routes
   */
  init: router => {
    const baseUrl = `${Properties.api}/students`;
    router.post(baseUrl + "", authorize([]), StudentsController.create);
    router.delete(baseUrl + "/:id", authorize([]), StudentsController.delete);
    router.get(baseUrl + "/findBy_enroll/:key", authorize([]), StudentsController.findBy_enroll);
    router.get(baseUrl + "/findBy_takes/:key", authorize([]), StudentsController.findBy_takes);
    router.get(baseUrl + "/findBy_taught/:key", authorize([]), StudentsController.findBy_taught);
    router.get(baseUrl + "/:id", authorize([]), StudentsController.get);
    router.get(baseUrl + "", authorize([]), StudentsController.list);
    router.post(baseUrl + "/:id", authorize([]), StudentsController.update);
  },


  // CRUD METHODS


  /**
  * studentsModel.create
  *   @description CRUD ACTION create
  *
  */
  create: async (req, res) => {
    try {
      const result = await StudentsModel.create(req.body);
      res.json(result);
    } catch (err) {
      const safeErr = ErrorManager.getSafeError(err);
      res.status(safeErr.status).json(safeErr);
    }
  },
  
  /**
  * studentsModel.delete
  *   @description CRUD ACTION delete
  *   @param ObjectId id Id
  *
  */
  delete: async (req, res) => {
    try {
      const result = await StudentsModel.delete(req.params.id);
      res.json(result);
    } catch (err) {
      const safeErr = ErrorManager.getSafeError(err);
      res.status(safeErr.status).json(safeErr);
    }
  },
  
  /**
  * studentsModel.findBy_enroll
  *   @description CRUD ACTION findBy_enroll
  *   @param Objectid key Id of model to search for
  *
  */
  findBy_enroll: async (req, res) => {
    try {
      const result = await StudentsModel.findBy_enroll(req.params.key);
      res.json(result);
    } catch (err) {
      const safeErr = ErrorManager.getSafeError(err);
      res.status(safeErr.status).json(safeErr);
    }
  },
  
  /**
  * studentsModel.findBy_takes
  *   @description CRUD ACTION findBy_takes
  *   @param Objectid key Id of model to search for
  *
  */
  findBy_takes: async (req, res) => {
    try {
      const result = await StudentsModel.findBy_takes(req.params.key);
      res.json(result);
    } catch (err) {
      const safeErr = ErrorManager.getSafeError(err);
      res.status(safeErr.status).json(safeErr);
    }
  },
  
  /**
  * studentsModel.findBy_taught
  *   @description CRUD ACTION findBy_taught
  *   @param Objectid key Id of model to search for
  *
  */
  findBy_taught: async (req, res) => {
    try {
      const result = await StudentsModel.findBy_taught(req.params.key);
      res.json(result);
    } catch (err) {
      const safeErr = ErrorManager.getSafeError(err);
      res.status(safeErr.status).json(safeErr);
    }
  },
  
  /**
  * studentsModel.get
  *   @description CRUD ACTION get
  *   @param ObjectId id Id resource
  *
  */
  get: async (req, res) => {
    try {
      const result = await StudentsModel.get(req.params.id);
      res.json(result);
    } catch (err) {
      const safeErr = ErrorManager.getSafeError(err);
      res.status(safeErr.status).json(safeErr);
    }
  },
  
  /**
  * studentsModel.list
  *   @description CRUD ACTION list
  *
  */
  list: async (req, res) => {
    try {
      const result = await StudentsModel.list();
      res.json(result);
    } catch (err) {
      const safeErr = ErrorManager.getSafeError(err);
      res.status(safeErr.status).json(safeErr);
    }
  },
  
  
  /**
  * studentsModel.update
  *   @description CRUD ACTION update
  *   @param ObjectId id Id
  *
  */
  update: async (req, res) => {
    try {
      const result = await StudentsModel.update(req.body);
      res.json(result);
    } catch (err) {
      const safeErr = ErrorManager.getSafeError(err);
      res.status(safeErr.status).json(safeErr);
    }
  },
  
  
  // Custom APIs

};

export default generatedControllers;