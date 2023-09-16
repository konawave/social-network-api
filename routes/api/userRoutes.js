const router = require("express").Router();

const {

  getAllUsers,
  getSingleUser,
  createUser,
  updateUser,
  removeUser,

} = require("../../controllers/userController");

router.route("/").get(getAllUsers).post(createUser);

router.route("/:userId").get(getSingleUser).put(updateUser).delete(removeUser);



module.exports = router;