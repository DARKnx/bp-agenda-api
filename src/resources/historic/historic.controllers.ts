import { Request, Response } from 'express';

import handleRequest from '../handleRequest.ts';
import Service from './historic.service.ts';

export default class EventsController {
  private readonly service: Service;

  constructor() {
    this.service = new Service();
  }
  getAll = async (req: Request, res: Response) => {
    return handleRequest(req, res, this.service.getAll);
  }
}
