const MehsularModel = require("../models/mehsul.model");


const mehsular_controller = {
    getAll:async (req, res) => {
        const resp = await Mehsular.find();
        res.send(resp);
      },
    getOne:async (req, res) => {
        const { id } = req.params;
        const resp = await Mehsular.findById(id);
        res.send(resp);
      },
    delete:async (req, res) => {
        const { _id } = req.params;
        const resp = await Mehsular.findByIdAndDelete(_id);
        res.send("delete");
      },
    update:async (req, res) => {
        const { id } = req.params;
        const resp = await Mehsular.findByIdAndUpdate(id, { ...req.body });
        res.send("updated");
      },

    post:async (req, res) => {
        const newMehsular=new Mehsular(req.body)
        await newMehsular.save();
        res.send("item elave olundu");
      }
}

module.exports = mehsular_controller;
