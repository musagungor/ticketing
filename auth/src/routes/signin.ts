import express from 'express';

const router = express.Router();

router.post('/api/users/signin', (req,res) => {
    res.send('hi from signinRouter')
});

export { router as signinRouter };
