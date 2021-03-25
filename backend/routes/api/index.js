const router = require('express').Router();
const sessionRouter = require('./session');
const usersRouter = require('./users');
const asyncHandler = require('express-async-handler');
const { setTokenCookie, restoreUser, requireAuth } = require('../../utils/auth');
const { User } = require('../../db/models');

router.use('/session', sessionRouter);
router.use('/users', usersRouter);

router.get('/set-token-cookie', asyncHandler(async(req, res) => {
  const user = await User.findOne({
    where: {
      username: 'Demo-lition'
    },
  });
  setTokenCookie(res, user);
  return res.json({ user });
}));

router.get('/restore-user', restoreUser, (req, res) => {
  return res.json(req.user);
});

router.get('/require-auth', requireAuth, (req, res) => {
  return res.json(req.user);
});

router.post('/test', (req, res) => {
  res.json({requestBody: req.body});
});


module.exports = router;