import { Router } from "express";
import multer from 'multer'

import { CreateUserController } from "./controllers/user/CreateUserController";
import { AuthUserController } from "./controllers/user/AuthUserController";
import { DetailUserController } from "./controllers/user/DetailUserController";
import { isAuthenticated } from "./middlewares/isAuthenticated";
import { CreateCategoryController } from "./controllers/Category/CreateCategoryController";
import { ListCategoryController } from "./controllers/Category/ListCategoryController";
import { CreateProductController } from "./controllers/Product/CreateProductController";
// import { ListProductsByCategoryController } from "./controllers/Product/ListProductsByCategoryController";
import uploadConfig from "./config/multer"

const routes = Router();

const upload = multer(uploadConfig.upload("./tmp"))

// -- ROTAS USER --
routes.post("/users", new CreateUserController().handle);
routes.post("/session", new AuthUserController().handle);
routes.get("/me", isAuthenticated, new DetailUserController().handle);

// -- ROTAS CATEGORY --
routes.post("/category", isAuthenticated, new CreateCategoryController().handle);
routes.get("/category", isAuthenticated, new ListCategoryController().handle);

// -- ROTAS PRODUCT --

routes.post("/product", isAuthenticated, upload.single('file'), new CreateProductController().handle)
// routes.get("/category/product", isAuthenticated, new ListProductsByCategoryController().handle)

export { routes };
