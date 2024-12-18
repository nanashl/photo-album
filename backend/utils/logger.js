const Log = require('../models/Log');

module.exports = async (user_id, action) => {
  await Log.create({ user_id, action });
};
