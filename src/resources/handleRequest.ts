import { Request, Response } from 'express';
import sendError from '../util/error.ts';

const handleRequest = async (
  req: Request,
  res: Response,
  serviceMethod: (data: any) => Promise<any>
) => {
  try {
    const requestData = { ...req.body };
    const response = await serviceMethod(requestData);

    if (response?.error) {
      return sendError(res, response.error);
    }

    return res.status(200).json(response);
  } catch (error) {
    return sendError(res, 'internal_error');
  }
};

export default handleRequest;