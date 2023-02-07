const fruitsModel = require("../models/fruitsModel")


exports.createFruit = async (req, res) => {
    try {
        const { fruitName, rate } = req.body
        if (Object.keys(req.body).length == 0) 
        return res.status(400).send({ status: false, msg: "please provide some data for create fruit" })
        if (!fruitName) 
        return res.status(400).send({ status: false, msg: "fruitName is mandatory" })
        const {inDollers,inRupees}=rate
        if (!inRupees || ! inDollers)
         return res.status(400).send({ status: false, msg: "rate is mandatory" })
        let saveData = await fruitsModel.create(req.body)
        return res.status(201).send({ status: true, msg: "fruit created succesfuly", data: saveData })
    } catch (err) {
        return res.status(500).send({ status: false, msg: err.message })
    }
}


