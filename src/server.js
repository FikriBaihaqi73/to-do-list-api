import 'pg'; // Explicitly import pg for Vercel deployment issues
import express from 'express';
import todoRoutes from './routes/todos.routes.js';
import cors from 'cors';
import swaggerUi from 'swagger-ui-express';
import YAML from 'yamljs';
import path from 'path';
import { fileURLToPath } from 'url';
// import swaggerUiDist from 'swagger-ui-dist'; // Tidak lagi diperlukan, file disalin ke public

// Untuk ESM, __dirname tidak tersedia, jadi kita mendapatkannya
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = process.env.PORT || 3000;

// Muat file spesifikasi Swagger YAML
const swaggerSpec = YAML.load(path.join(__dirname, 'docs/swagger.yaml'));

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => res.json({ message: 'Hello World!' }));
app.use('/api/todos', todoRoutes);

// Sajikan aset statis Swagger UI dari direktori public yang disalin
app.use('/api-docs', express.static(path.join(__dirname, '..' , 'public', 'swagger-ui-assets')));

// Kemudian, setup Swagger UI itu sendiri
app.use('/api-docs', swaggerUi.setup(swaggerSpec));

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
    // console.log(`Swagger UI static files served from: ${swaggerUiDist.getAbsoluteFSPath()}`); // Tidak lagi relevan
});
