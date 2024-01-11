import jwt, { Secret }from 'jsonwebtoken';
import bcrypt from 'bcrypt';

import { Event, EventUpdate } from "./dtos/events.dtos.ts";
import userModel from "../../models/user.ts";

export default class Service {
    async create({  } : Event): Promise<any> {
      try {
         
      } catch (err) {
        return { error: 'internal_error' };
      }
    }
    async get({ authorization, id }: EventUpdate): Promise<any> {
      try {
       
      } catch (err) {
        return { error: 'internal_error' };
      }
    }
    async getAll({ authorization }: EventUpdate): Promise<any> {
      try {
       
      } catch (err) {
        return { error: 'internal_error' };
      }
    }
    async update({ id, data }: EventUpdate): Promise<any> {
      try {
      

      } catch (err) {
        return { error: 'internal_error' };
      }
    }
    async delete({ id }: EventUpdate): Promise<any> {
      try {
      
      } catch (err) {
        return { error: 'internal_error' };
      }
    }
  }