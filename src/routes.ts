import express, { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import axios from 'axios';

export const router = express.Router();

router.post('/generate_token', (req: Request, res: Response) => {
    const { login, password } = req.body;

    if (!login || !password) {
        return res.status(400).json({ error: 'Login and password are required' });
    }

    const token = jwt.sign({ data: login + password }, 'secret', { expiresIn: '1h' });
    res.json({ token });
});

router.get('/tracking_parcel', async (req: Request, res: Response) => {
    const { tracking_number } = req.query;

    if (!tracking_number) {
        return res.status(400).json({ error: 'Tracking number is required' });
    }

    try {
        const response = await axios.get(
        `https://bps.bringer.io/public/api/v2/get/parcel/tracking.json?tracking_number=${tracking_number}`,
        {
            headers: {
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6ImFjY2VzcyJ9.eyJpYXQiOjE2NzIzMjY1NTUsImV4cCI6MTcwMzg2MjU1NSwiYXVkIjoiaHR0cHM6Ly9icmluZ2VycGFyY2VsLmNvbSIsImlzcyI6ImZlYXRoZXJzIiwic3ViIjoiNTI1eXM2YWh4d3UyIiwianRpIjoiZDdlZGE3NDgtNzMxOS00YWIzLWI2MGEtMDEzMzI0NmVkNmY2In0.uJi6d6-E2zDWj24wryh2sVWKs4ceny4QllbrHrzK5L0',
            },
        }
        );
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching parcel tracking data' });
    }
});