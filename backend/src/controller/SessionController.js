import connection from "../database/connection";

export default {
  async store(req, res){
    const { id } = req.body;

    const ong = await connection('ongs').where('id', id).select('name').first();

    return ong ? res.json(ong) : res.status(400).json({error: 'No ONG found with this ID'})
  }
}