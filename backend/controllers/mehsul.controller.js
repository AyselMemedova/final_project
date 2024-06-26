// const MehsularModel = require("../models/mehsul.model");


// const mehsular_controller = {
//     getAll:async (req, res) => {
//         try {
//           const resp = await MehsularModel.find({});
//         res.send(resp);
//         } catch (error) {
//           res.send(500).json({message : error.message})
//         }
//       },
//     getOne:async (req, res) => {
//         const { id } = req.params;
//         const resp = await MehsularModel.findById(id);
//         res.send(resp);
//       },
//     delete:async (req, res) => {
//         const { _id } = req.params;
//         const resp = await MehsularModel.findByIdAndDelete(_id);
//         res.send("delete");
//       },
//     update:async (req, res) => {
//         const { id } = req.params;
//         const resp = await MehsularModel.findByIdAndUpdate(id, { ...req.body });
//         res.send("updated");
//       },

//     post:async (req, res) => {
//         try {
//           const newMehsular=new MehsularModel(req.body)
//         await newMehsular.save();
//         res.status(200).json({message:"item elave olundu"});
//         } catch (error) {
//         res.status(500).json({message:"internal server error "});
          
//         }
//       }
// }

// module.exports = mehsular_controller;

const MehsularModel = require("../models/mehsul.model");

const mehsular_controller = {
    getAll: async (req, res) => {
        try {
            const resp = await MehsularModel.find({});
            res.status(200).json(resp); // Use res.status().json() to send the response
        } catch (error) {
            res.status(500).json({ message: error.message }); // Use res.status(500) for server error
        }
    },
    getOne: async (req, res) => {
        try {
            const { id } = req.params;
            const resp = await MehsularModel.findById(id);
            if (!resp) {
                return res.status(404).json({ message: "Item not found" }); // Return 404 if item not found
            }
            res.status(200).json(resp); // Use res.status().json() to send the response
        } catch (error) {
            res.status(500).json({ message: error.message }); // Use res.status(500) for server error
        }
    },
    delete: async (req, res) => {
        try {
            const { id } = req.params;
            const resp = await MehsularModel.findByIdAndDelete(id);
            if (!resp) {
                return res.status(404).json({ message: "Item not found" }); // Return 404 if item not found
            }
            res.sendStatus(204); // Send 204 No Content status for successful deletion
        } catch (error) {
            res.status(500).json({ message: error.message }); // Use res.status(500) for server error
        }
    },
    update: async (req, res) => {
        try {
            const { id } = req.params;
            const resp = await MehsularModel.findByIdAndUpdate(id, { ...req.body }, { new: true });
            if (!resp) {
                return res.status(404).json({ message: "Item not found" }); // Return 404 if item not found
            }
            res.status(200).json(resp); // Use res.status().json() to send the response
        } catch (error) {
            res.status(500).json({ message: error.message }); // Use res.status(500) for server error
        }
    },
    post: async (req, res) => {
        try {
            const newMehsular = new MehsularModel(req.body);
            await newMehsular.save();
            res.status(201).json({ message: "Item created successfully" }); // Use 201 Created status for successful creation
        } catch (error) {
            res.status(500).json({ message: "Internal server error" }); // Use res.status(500) for server error
        }
    }
};

module.exports = mehsular_controller;

