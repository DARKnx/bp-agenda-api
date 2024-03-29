import { Request, Response } from 'express';
import handleRequest from '../handleRequest.ts';
import Service from './users.service.ts';

export default class UsersController {
  private readonly service: Service;

  constructor() {
    this.service = new Service();
  }

  signUp = async (req: Request, res: Response) => {
    return handleRequest(req, res, this.service.signUp);
  }

  signIn = async (req: Request, res: Response) => {
    return handleRequest(req, res, this.service.signIn);
  }

  getUser = async (req: Request, res: Response) => {
    return handleRequest(req, res, this.service.getUser);
  }

  getAllUser = async (req: Request, res: Response) => {
    return handleRequest(req, res, this.service.getAllUser);
  }
  deleteUser = async (req: Request, res: Response) => {
    return handleRequest(req, res, this.service.deleteUser);
  }
  updateUser = async (req: Request, res: Response) => {
    return handleRequest(req, res, this.service.updateUser);
  }
}
