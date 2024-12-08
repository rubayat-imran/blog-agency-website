import express from "express";
const router = express.Router();

import * as UsersController from "../controllers/UsersController.js";
import * as BlogsController from "../controllers/BlogsController.js";
import * as TeamsController from "../controllers/TeamsController.js";
import * as ServicesController from "../controllers/ServicesController.js";

import AuthMiddleware from "../middlewares/AuthMiddleware.js";


// Users
router.post("/Registration", UsersController.Registration)
router.post("/Login", UsersController.Login)
router.get("/ProfileDetails", AuthMiddleware, UsersController.ProfileDetails)
router.post("/ProfileUpdate", AuthMiddleware, UsersController.ProfileUpdate)


// Blogs
router.post("/CreateBlog", AuthMiddleware, BlogsController.CreateBlog)
router.get("/AllBlogs", BlogsController.AllBlogs)
router.get("/ReadBlog/:id", AuthMiddleware, BlogsController.ReadOneBlog)
router.post("/UpdateBlog/:id", AuthMiddleware, BlogsController.UpdateBlog)
router.get("/DeleteBlog/:id", AuthMiddleware, BlogsController.DeleteBlog)

// Services
router.post("/CreateService", AuthMiddleware, ServicesController.CreateService)
router.get("/AllServices", ServicesController.AllServices)
router.get("/ReadService/:id", AuthMiddleware, ServicesController.ReadOneService)
router.post("/UpdateService/:id", AuthMiddleware, ServicesController.UpdateService)
router.get("/DeleteService/:id", AuthMiddleware, ServicesController.DeleteService)


// Teams
router.post("/CreateTeamMember", AuthMiddleware, TeamsController.CreateTeamMember)
router.get("/AllTeamMembers", TeamsController.AllTeamMembers)
router.get("/ReadTeamMember/:id", AuthMiddleware, TeamsController.ReadOneTeamMember)
router.post("/UpdateTeamMember/:id", AuthMiddleware, TeamsController.UpdateteamMember)
router.get("/DeleteTeamMember/:id", AuthMiddleware, TeamsController.DeleteTeamMember)


export default router;


