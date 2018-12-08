import {user as User} from '../models';

const userController = {};

userController.createUser = async (req, res) => {
  const {username, password, email} = req.body;
  try {
    await User.create({
      username,
      password,
      email,
    });
    res.sendStatus(201);
  } catch (e) {
    throw e;
  }
};

export default userController;
