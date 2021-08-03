import { Router } from 'express';

import { createUserController } from '../modules/users/controllers/createUser';
import { listUserController } from '../modules/users/controllers/listUsers';
import { deleteUserController } from '../modules/users/controllers/deleteUser';

const usersRoutes = Router();

usersRoutes.post("/", (request, response) => {
  return createUserController.handle(request, response);
});

usersRoutes.get("/", (request, response) => {
  return listUserController.handle(request, response);
});

usersRoutes.delete("/:id", (request, response) => {
  return deleteUserController.handle(request, response);
});

export { usersRoutes };