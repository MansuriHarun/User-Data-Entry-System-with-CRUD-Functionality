const router = require("express").Router();
const { addUser, getUser, getParticularUser, deleteUser, updateUser } = require("../controllers/userController");

router.route("/user").post(addUser).get(getUser);
router.route("/user/:id").put(updateUser).get(getParticularUser).delete(deleteUser);

module.exports = router;