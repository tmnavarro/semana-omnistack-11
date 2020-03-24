const connection = require('../database/connection');

module.exports = {
  async listAll(req, res) {
    const ong_id = req.headers.authorization;

    const inscidents = await connection('incidents')
      .where('ong_id', ong_id)
      .select('*');

    return res.json(inscidents);
  }
};
