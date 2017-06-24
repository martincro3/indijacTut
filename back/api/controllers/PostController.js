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
      let categoryName = req.param('category_name'),
          title = req.param('title'),
          content = req.param('content'),
          userId = req.param( 'user_id');
    // validiranje category namea
      if(!categoryName){
        return res.badRequest({err: 'invalid category_name'});
      }
      if(!title){
        return res.badRequest({err: 'invalid title'});
      }
      if(!content){
        return res.badRequest({err: 'invalid content'});
      }
      if(!userId){
        return res.badRequest({err: 'invalid userId'});
      }
      
    // kreiranje nove kategorije
      Category.create({
        name: categoryName
      })
      .then(categoy => {
     
        return Post.create({
          title,
          content,
          _user:userId,
          _category: category.id
        })
      })

     .then ( post => {
       return res.ok({category,post});
     }) 
     .catch(err=> res.serverError(err));
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

