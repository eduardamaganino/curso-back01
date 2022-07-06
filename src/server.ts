import App from './app';
import DashController from './controllers/DashController copy';
import TaskController from './controllers/TaskController';
import UserController from './controllers/UserController';
import Task from './schemas/Task';

const app = new App([
  new UserController(),
  new TaskController(),
  new DashController(),
]);

app.listen(3333);
