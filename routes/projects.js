const router = require("express").Router();
const projectController=require('../controllers/projects')

router.get('/new', projectController.New)
router.get('/:ID',projectController.userProjects)
router.get('/',projectController.All)
router.post('/', projectController.Create)




function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) return next();
    res.redirect("/auth/google");
  }
  
module.exports = router;