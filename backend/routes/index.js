const user_router = require('./user.route');
const tag_router = require('./tag.route');
const blog_router = require('./blog.route');
const mehsul_router = require('./mehsular.route');
// const sekil_router = require('./sekil.route');



// const report_router = require('./report.router');

const router = {
    blog: blog_router,
    user: user_router,
    tag: tag_router,
    mehsul:mehsul_router
    // sekil:sekil_router
    // report: report_router
}

module.exports = router;
