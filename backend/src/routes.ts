import { Router } from "express";
import { CreateUserController } from "./controllers/user/CreateUserController";
import { AuthUserController } from "./controllers/user/AuthUserController";
import { DetailUserController } from "./controllers/user/DetailUserController";
import { isAuthenticated } from "./middlewares/isAuthenticated";
import { CreateCategoryController } from "./controllers/Category/CreateCategoryController";


const routes = Router();

// -- ROTAS USER --
routes.post("/users", new CreateUserController().handle);
routes.post("/session", new AuthUserController().handle);
routes.get("/me", isAuthenticated, new DetailUserController().handle);

// -- ROTAS CATEGORY --
routes.post("/category", isAuthenticated, new CreateCategoryController().handle);

export { routes };
