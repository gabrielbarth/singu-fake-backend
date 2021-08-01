import { Router } from 'express';
import { servicesRoutes } from './services.routes';
import { usersRoutes } from './users.routes';

const router = Router();

router.use("/services", servicesRoutes);
router.use("/users", usersRoutes);

export { router };