import Auth from '../model/auth-schema.js';

const userController = {};

userController.register = async (req, res) => {
  const user = new Auth(req.body);
  try {
    await user.save();
    const token = await user.generateAuthToken();
    res.status(201).send({ user, token });
  } catch (error) {
    res.status(400).send(error);
  }
};

userController.login = async (req, res) => {
  try {
    const user = await Auth.findByCredentials(req.body.email, req.body.password);
    const token = await user.generateAuthToken();
    res.send({ user, token });
  } catch (error) {
    res.status(400).send(error);
  }
};

export default userController;
