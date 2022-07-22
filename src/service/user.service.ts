import store from '@/store/index';
import { api } from './api.service'

export default class UserService {
  static async fetchUser(): Promise<void> {
    const { userInput } = store.getters;
    try {
      const { data } = await api.get(`/users/${userInput}`)

      store.dispatch('updateUserData', data);
    } catch (err) {
      console.log(err);
    }
  }
}
