import express from 'express';
import mapRoutes from './routes';

const port = 1245;
const app = express();

mapRoutes(app);

app.listen(port, () => console.log(`Server listening on port ${port}`));

export default app;
