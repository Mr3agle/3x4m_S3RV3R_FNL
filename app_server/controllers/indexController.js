const Post = require('../models/model');

module.exports.index = async (req, res) => {
   try {
      res.render('home', {
         title: 'Home'
      });
   } catch (error) {
      res.status(400).json(error);
   }
}