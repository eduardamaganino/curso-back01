import HttpStatusCode from '../responses/HttpStatusCode ';
import HttpException from './HttpException';

class UserContainTaskException extends HttpException {
  constructor() {
    super(HttpStatusCode.CONFLICT, 'Impossivel excluir, pois o usuario apresenta tarefas relacionadas.');
  }
}

export default UserContainTaskException;
