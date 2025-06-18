import express from 'express';
import todoRoutes from './routes/todos.routes.js';
import cors from 'cors';

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => res.json({ message: 'Hello World!' }));
app.use('/api/todos', todoRoutes);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
