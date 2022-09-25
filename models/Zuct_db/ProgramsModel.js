import ProgramsModelGenerated from "./generated/ProgramsModelGenerated";

const customModel = {
  
  /**
   * Customize here your schema with custom attributes
   * 
   * EXAMPLE:
    
    init() {
      let schema = ProgramsModelGenerated.init();
  
      schema.add({
        extraCustomField: Object
      });
    },
     
   */


  /**
   * Override here your custom queries
   * EXAMPLE:
   *
   
    async get(id) {
      console.log("This is my custom query");
      return await ProgramsModelGenerated.getModel().findOne({ _id: id });
    }

   */

};

export default {
  ...ProgramsModelGenerated,
  ...customModel
};
