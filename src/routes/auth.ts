import { Router } from 'express';
import { AuthController } from '../controllers/auth';

const router = Router();
const controller = new AuthController();

router.post('/signup', controller.signup);
router.post('/signin', controller.signin);

export default router;
