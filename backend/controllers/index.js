const blog_controller = require('../controllers/blog.controller');
const user_controller = require('../controllers/user.controllers');
const tag_controller = require('../controllers/tag.controller');
const mehsul_controller = require('../controllers/mehsul.controller');
// const sekil_controller = require('../controllers/sekil.controller');



const router = {
  blog: blog_controller,
  user: user_controller,
  tag: tag_controller,
  mehsul: mehsul_controller
  // sekil:sekil_controller
};

module.exports = router;
