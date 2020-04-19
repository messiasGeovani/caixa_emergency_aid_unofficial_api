// register info controller
const Evaluation = require('../Models/Evaluation')

module.exports = {

    // get register info method
    async getRegisterInfo(req, res) {

        try {

            const data = req.body
            await Evaluation.create(data)

            return res.status(200).json({
                success: 'Evaluation created.'
            })
        } catch (error) {
            return res.status(500).json(error)
        }

    }
}