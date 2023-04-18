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
import { ListByCategoryController } from "./controllers/Product/ListByCategoryController";
import { CreateOrderController } from "./controllers/order/CreateOrderController";
import { RemoveOrderController } from "./controllers/order/RemoveOrderController";
import { AddItemController } from "./controllers/order/AddItemController";
import { ListProductsByCategoryController } from "./controllers/Product/ListProductsByCategoryController";
import { RemoveItemController } from "./controllers/order/RemoveItemController";
import { SendOrderController } from "./controllers/order/SendOrderController";

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

routes.post("/product", isAuthenticated, upload.single('file'), new CreateProductController().handle);
routes.get("/category/product", isAuthenticated, new ListProductsByCategoryController().handle);

// -- ROTAS ORDER --

routes.post("/order", isAuthenticated, new CreateOrderController().handle);
routes.delete("/order", isAuthenticated, new RemoveOrderController().handle);
routes.post("/order/add", isAuthenticated, new AddItemController().handle);
routes.delete("/order/remove", isAuthenticated, new RemoveItemController().handle);
routes.put("/order/send", isAuthenticated, new SendOrderController().handle);


export { routes }; 
