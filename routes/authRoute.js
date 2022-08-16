const { register, login, getUserById, updateUser, deleteUser,getUsers } = require("../controller/authController");
const { checkUser } = require("../middlewares/authMiddleware");

const router = require("express").Router();

router.post("/", checkUser); 
router.post("/register", register);
router.post("/login", login);
router.get('/patients/:id',getUserById);
router.patch('/patients/:id', updateUser);
router.delete('/patients/:id', deleteUser);
router.get('/patients', getUsers);
module.exports = router;