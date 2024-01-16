
import UsersController from "../resources/users/users.controllers";
import Service from "../resources/users/users.service";

jest.mock("../resources/users/users.service");

describe('UsersController', () => {
  let usersController: UsersController;

  beforeEach(() => {
    usersController = new UsersController();
  });

  it('signup', async () => {
    const req: any = { body:{ email: 'joaovitor', password: 12345678, role: 'cliente', name: 'joao vitor'} };
    const res: any = { 
        status:  () => {
            
        },
        json:  () => {

        }
     };

    await usersController.signUp(req, res);

    expect(Service.prototype.signUp).toHaveBeenCalled();
  });

});
