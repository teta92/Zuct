// Import Mongoose
import mongoose from "mongoose";
// Logging
import Logger from "./Logger";
// Properties
import properties from "../properties.js";

// Start Import Models

import UserModel from "../models/Zuct_db/UserModel";
import CoursesModel from "../models/Zuct_db/CoursesModel";
import LecturersModel from "../models/Zuct_db/LecturersModel";
import ProgramsModel from "../models/Zuct_db/ProgramsModel";
import StudentsModel from "../models/Zuct_db/StudentsModel";

// End Import Models

class Database {
  constructor() {}

  /**
   * Init database
   */
  async init() {
    await this.authenticate();
    Logger.info("MongoDB connected at: " + properties.Zuct_db_dbUrl);

    // Start Init Models

		UserModel.init();
		CoursesModel.init();
		LecturersModel.init();
		ProgramsModel.init();
		StudentsModel.init();
 // End Init Models
  }

  /**
   * Start database connection
   */
  async authenticate() {
    Logger.info("Authenticating to the databases...");
    try {
      this.dbConnection_Zuct_db = await mongoose.connect(
        "mongodb://" + properties.Zuct_db_dbUrl,
        { useNewUrlParser: true }
      );
    } catch (err) {
      Logger.error(`Failed connection to the DB: ${err.message}`);
      Logger.error(err);
      await new Promise(resolve => setTimeout(resolve, 5000));
      await this.authenticate();
    }
  }

  /**
   * Get connection db
   */
  getConnection() {
    return this.dbConnection_Zuct_db;
  }
}

export default new Database();
