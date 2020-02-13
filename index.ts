import * as express from 'express';
// tslint:disable-next-line: no-duplicate-imports

const app = express();

app.get('/', (req: any, res: any) => { res.json({ test: 'Api is alive !' }); });
app.get('/Test', (req: any, res: any) => { res.json({ exTest: 'Expected this !' }); });

app.listen(process.env.OPTIC_API_PORT || 3000, () => { console.log('My API is running...'); });

export default app;