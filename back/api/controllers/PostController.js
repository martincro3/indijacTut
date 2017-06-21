/**
 * PostController
 *
 * @description :: Server-side logic for managing Posts
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	


  /**
   * `PostController.create()`
   */
  create: function (req, res) {
    // extraktiranje categoryname iz request objekta
      let categoryName = req.param('category_name');
    // validiranje category namea
      if(!categoryName){
        return res.badRequest({err: 'invalid category_name'});
      }
      
    // kreiranje nove kategorije
      Category.create({
        name: categoryName
      })
      .exec( (err,category)=>{
        if(err){
          return res.serverError(err);
        }

        return res.ok(category);
      })
    // ako je pojavi error posalji severError u responsu

    // posalji novo kreiranu kategoriju u responsu


  },


  /**
   * `PostController.findOne()`
   */
  findOne: function (req, res) {
    return res.json({
      todo: 'findOne() is not implemented yet!'
    });
  },


  /**
   * `PostController.findAll()`
   */
  findAll: function (req, res) {
    return res.json({
      todo: 'findAll() is not implemented yet!'
    });
  },


  /**
   * `PostController.update()`
   */
  update: function (req, res) {
    return res.json({
      todo: 'update() is not implemented yet!'
    });
  },


  /**
   * `PostController.delete()`
   */
  delete: function (req, res) {
    return res.json({
      todo: 'delete() is not implemented yet!'
    });
  }
};

