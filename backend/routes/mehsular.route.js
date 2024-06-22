const express = require("express");
const controller = require("../controllers/index");
const mehsul_router = express.Router()

mehsul_router.get("/api/mehsular",controller.mehsul.getAll);
mehsul_router.get("/api/mehsular/id",controller.mehsul.getOne);
mehsul_router.delete("/api/mehsular/:id",controller.mehsul.delete);
mehsul_router.put("/api/mehsular/:id",controller.mehsul.update);
mehsul_router.post("/api/mehsular",controller.mehsul.post);

module.exports=mehsul_router;