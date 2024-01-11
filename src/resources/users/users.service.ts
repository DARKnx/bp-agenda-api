import { UserSignIn, UserSignUp } from "./dtos/user.dtos.ts";
import userModel from "../../models/user.ts";

export default class Service {
    async signUp({ name, email, password } : UserSignUp): Promise<any> {
      try {
          var findUserEmail = await userModel.findOne({email});
          if (findUserEmail) return { error: 'email_already_exists'};

          

      } catch (err) {
        console.error(err);
        return { error: 'internal_error' };
      }
    }
    async signIn({ email, password }: UserSignIn): Promise<any> {
      try {

        return { email, password };
      } catch (err) {
        return { error: 'internal_error' };
      }
    }
  }