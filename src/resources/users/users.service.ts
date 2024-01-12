import jwt, { Secret }from 'jsonwebtoken';
import bcrypt from 'bcrypt';

import { UserSignIn, UserSignUp, UserGet } from "./dtos/user.dtos.ts";
import createHistoric from '../../util/createHistoric.ts';
import userModel from "../../models/user.ts";

export default class Service {
    async signUp({ name, email, password, role } : UserSignUp): Promise<any> {
      try {
          const findUserEmail = await userModel.findOne({email});
          if (findUserEmail) return { error: 'email_already_exists'};

          const salt = await bcrypt.genSalt(10);
          const hash = await bcrypt.hash(password, salt);

          const user = new userModel({
            password: hash,
            name, 
            email,
            role
          });
          user.save();

          const payload = {
            id: user._id
          }
          createHistoric({description: `Efetuou um cadastro pela primeira vez`, author: user._id as any})
          const token = jwt.sign(payload,  process.env.JWT as Secret, { expiresIn : '60 days'})
          return { token }
      } catch (err) {
        console.error(err);
        return { error: 'internal_error' };
      }
    }
    async signIn({ email, password }: UserSignIn): Promise<any> {
      try {
        const findUser = await userModel.findOne({email});
        if (!findUser) return { error: 'user_not_found'};

        var isMatch = await bcrypt.compare(password, findUser.password);
        if (!isMatch)  return { error: "invalid_credentials" };

        const payload = {
          id: findUser._id
        }

        createHistoric({description: `Efetuou um login.`, author: findUser._id as any})
        const token = jwt.sign(payload, process.env.JWT as Secret, { expiresIn : '60 days'})
        return { token }
      } catch (err) {
        return { error: 'internal_error' };
      }
    }

    async getUser({ authorization }: UserGet): Promise<any> {
      try {
        const findUser = await userModel.findById(authorization).select('-password');
        if (!findUser) return { error: 'user_not_found'};
        return { user: findUser }

      } catch (err) {
        return { error: 'internal_error' };
      }
    }
  }