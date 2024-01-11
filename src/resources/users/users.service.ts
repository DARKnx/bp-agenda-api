export default class Service {
    async signUp({ name, email, password }: { name: string; email: string; password: string }): Promise<any> {
      try {

        return { success: true  };
      } catch (err) {
        console.error(err);
        return { error: 'internal_error' };
      }
    }
    async signIn({ email, password }: { email: string; password: string }): Promise<any> {
      try {

        return { email, password };
      } catch (err) {
        return { error: 'internal_error' };
      }
    }
  }