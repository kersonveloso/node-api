import express, { Request, Response } from 'express'
import { members, Member } from './api/Members'

const router = express.Router();

router.get('/', (req: Request, res: Response) => {
    res.json(members);
});

export default router;