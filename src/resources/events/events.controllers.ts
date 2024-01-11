import { Request, Response } from 'express';

import handleRequest from '../handleRequest.ts';
import Service from './events.service.ts';

export default class EventsController {
  private readonly service: Service;

  constructor() {
    this.service = new Service();
  }

  create = async (req: Request, res: Response) => {
    return handleRequest(req, res, this.service.create);
  }
  get = async (req: Request, res: Response) => {
    return handleRequest(req, res, this.service.get);
  }
  getAll = async (req: Request, res: Response) => {
    return handleRequest(req, res, this.service.getAll);
  }
  update = async (req: Request, res: Response) => {
    return handleRequest(req, res, this.service.update);
  }
  delete = async (req: Request, res: Response) => {
    return handleRequest(req, res, this.service.delete);
  }
}
