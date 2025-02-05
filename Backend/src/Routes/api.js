import express from "express"
import * as UserController from "../Controller/UserController.js";
import * as ServiceController from "../Controller/WorkController.js";
import * as BlogController from "../Controller/BlogController.js";
import * as TeamController from "../Controller/TeamController.js";
import upload from "../Middleware/fileUpload.js";
import { authenticateUser } from "../Middleware/auth.js";
const router = express.Router();

//user api
router.post("/register", UserController.createUser);
router.post("/login", UserController.login);
router.get("/logout", UserController.logout);

// service api
router.post("/create-service", upload.single("image"), ServiceController.createService);
router.get("/service-list", authenticateUser,  ServiceController.serviceList);
router.delete("/delete-service/:serviceID", authenticateUser, ServiceController.deleteService);
router.post("/update-service/:serviceID", authenticateUser, upload.single("image"), ServiceController.updateService);

//blog api
router.post("/create-blog", authenticateUser, upload.single("image"), BlogController.createBlog);
router.get("/blog-list", authenticateUser, BlogController.blogList);
router.delete("/delete-blog/:blogID", authenticateUser, BlogController.deleteBlog);
router.post("/update-blog/:blogID", authenticateUser, upload.single("image"), BlogController.updateBlog);

//team api
router.post("/create-member", authenticateUser, upload.single("image"), TeamController.createTeamMember);
router.get("/member-list", authenticateUser, TeamController.teamMemberList);
router.delete("/delete-member/:id", authenticateUser, TeamController.deleteMember);
router.post("/update-member/:id", authenticateUser, TeamController.updateMember);


export default router;