const express = require("express");
const controller = require("../controllers/index");

mehsular_router.get("/api/mehsular",controller.mehsul.getAll);
mehsular_router.get("/api/mehsular/id",controller.mehsul.getOne);
mehsular_router.delete("/api/mehsular/:id",controller.mehsul.delete);
mehsular_router.put("/api/mehsular/:id",controller.mehsul.update);
mehsular_router.post("/api/mehsular",controller.mehsul.post);

module.exports=mehsular_router;


