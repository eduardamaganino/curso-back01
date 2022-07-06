import { Router } from 'express';

abstract class Controller {
    protected path: string;
    public router: Router;

    constructor(path: string) {
      this.router = Router();
      this.path = path;

      setTimeout(() => {
        this.initRouters();
      }, 0);
    }

    protected abstract initRouters(): void;
}

export default Controller;
