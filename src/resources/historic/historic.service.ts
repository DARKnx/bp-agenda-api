import { HistoricData } from "./dtos/historic.dtos.ts";
import historicModel from '../../models/historic.ts';

export default class Service {
    async getAll({ authorization }: HistoricData): Promise<any> {
      try {
        return await historicModel.find({author: authorization}).sort({date: -1});
      } catch (err) {
        return { error: 'internal_error' };
      }
    }
}