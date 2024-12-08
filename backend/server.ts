import express from 'express';
import { db } from './db';

const app = express();
app.use(express.json());

app.get('/health', (req, res) => {
    res.status(200).send('Marketplace backend is up and running!');
});

app.get('/models', async (req, res) => {
    try {
        const models = await db.getAllModels();
        res.status(200).json(models);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch models' });
    }
});

app.listen(3000, () => {
    console.log('Marketplace backend running on port 3000');
});