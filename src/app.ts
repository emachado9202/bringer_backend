import express, { Request, Response } from 'express';
import jwt from 'jsonwebtoken';

const app = express();

app.use(express.json());

app.post('/generate_token', (req: Request, res: Response) => {
  const { login, password } = req.body;

  if (!login || !password) {
    return res.status(400).json({ error: 'Login and password are required' });
  }

  const token = jwt.sign({ data: login + password }, 'secret', { expiresIn: '1h' });
  res.json({ token });
});
