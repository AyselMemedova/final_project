const MehsularModel = require("../models/mehsul.model");


const mehsular_controller = {
    getAll:async (req, res) => {
        try {
          const resp = await MehsularModel.find({});
        res.send(resp);
        } catch (error) {
          res.send(500).json({message : error.message})
        }
      },
    getOne:async (req, res) => {
        const { id } = req.params;
        const resp = await MehsularModel.findById(id);
        res.send(resp);
      },
    delete:async (req, res) => {
        const { _id } = req.params;
        const resp = await MehsularModel.findByIdAndDelete(_id);
        res.send("delete");
      },
    update:async (req, res) => {
        const { id } = req.params;
        const resp = await MehsularModel.findByIdAndUpdate(id, { ...req.body });
        res.send("updated");
      },

    post:async (req, res) => {
        try {
          const newMehsular=new MehsularModel(req.body)
        await newMehsular.save();
        res.status(200).json({message:"item elave olundu"});
        } catch (error) {
        res.status(500).json({message:"internal server error "});
          
        }
      }
}

module.exports = mehsular_controller;
