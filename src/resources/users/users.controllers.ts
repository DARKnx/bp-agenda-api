import { Request, Response } from 'express';
import sendError from '../../util/error.ts';
import Service from './users.service.js';

export default class UsersController {
  private readonly service: Service;

  constructor() {
    this.service = new Service();
  }

  private async handleRequest(req: Request, res: Response, serviceMethod: (data: any) => Promise<any>) {
    try {
      const requestData = req.user ? { ...req.body, user: req.user } : { ...req.body };
      const response = await serviceMethod.call(this.service, requestData);
      
      if (response?.error) {
        return sendError(res, response.error);
      }
      
      return res.status(200).json(response);
    } catch (error) {
      console.error(error);
      return sendError(res, 'internal_error');
    }
  }

  async signUp(req: Request, res: Response) {
    return this.handleRequest(req, res, this.service.signUp);
  }

  async signIn(req: Request, res: Response) {
    return this.handleRequest(req, res, this.service.signIn);
  }
}
