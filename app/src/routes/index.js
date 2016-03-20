import categoryRouter from './category';
import dishRouter from './dish';

const routes = function routes(app) {
  app.use('/category', categoryRouter);
  app.use('/dish', dishRouter);
};

export default routes;
