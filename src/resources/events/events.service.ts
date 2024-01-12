import { Event, EventUpdate } from "./dtos/events.dtos.ts";
import createHistoric from "../../util/createHistoric.ts";
import eventModel from '../../models/event.ts';

export default class Service {
    async create({ description, consultant, startDate, endDate, name, client, authorization} : Event): Promise<any> {
      try {
         const event = new eventModel({
            description,
            consultant,
            startDate,
            endDate,
            client,
            name,
         })
         await event.save();

        createHistoric({description: `Criou um evento com o consultor *${consultant.name}*, iniciando em %${startDate}% e finalizando as %${endDate}%.`, author: authorization})

         return event;
      } catch (err) {
        return { error: 'internal_error' };
      }
    }
    async get({ id }: EventUpdate): Promise<any> {
      try {
        const findEvent = await eventModel.findById(id);
        if (!findEvent) return { error: "event_not_found"};

        return { event: findEvent }
      } catch (err) {
        return { error: 'internal_error' };
      }
    }
    async getAll({ authorization }: EventUpdate): Promise<any> {
      try {
        return await eventModel.find().sort({date: -1});
      } catch (err) {
        return { error: 'internal_error' };
      }
    }
    async update({ id, data, authorization}: EventUpdate): Promise<any> {
      try {
        const findEvent = await eventModel.findById(id);
        if (!findEvent) return { error: "event_not_found"};

        const event = await eventModel.findByIdAndUpdate(id, { $set: { ...data }}, { new: true});
        createHistoric({description: `Atualizou os dados *${Object.keys(data as any).join('')}* do evento *${findEvent.name}*.`, author: authorization})
        return { event }; 
      } catch (err) {
        return { error: 'internal_error' };
      }
    }
    async delete({ id, authorization }: EventUpdate): Promise<any> {
      try {
        const findEvent = await eventModel.findById(id);
        if (!findEvent) return { error: "event_not_found"};

        createHistoric({description: `Apagou o evento *${findEvent.name}*`, author: authorization})
        await eventModel.findByIdAndDelete(id);
        return {}; 

      } catch (err) {
        return { error: 'internal_error' };
      }
    }
  }