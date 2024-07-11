import AsyncStorage from "@react-native-async-storage/async-storage";
import { UserEntity } from "../api/types";

export type StorageUser = UserEntity;

class Storage {
  private async saveItem(key: string, value: string): Promise<void> {
    return await AsyncStorage.setItem(key, value.toString());
  }

  private async getItem(key: string): Promise<string | null> {
    const value = await AsyncStorage.getItem(key);
    return value;
  }

  async saveObject(objectToSave: any): Promise<any> {
    for (const key in objectToSave) {
      await this.saveItem(`@wallet:${key}`, objectToSave[key]);
    }
  }

  private async getObject(emptyObject: any): Promise<any> {
    for (const key in emptyObject) {
      const result = await this.getItem(`@wallet:${key}`);
      emptyObject[key] =
        typeof emptyObject[key] === "number" ? Number(result) : result;
    }

    return emptyObject;
  }

  async saveUser(user: StorageUser): Promise<void> {
    await this.saveObject(user);
  }

  async getUser(): Promise<StorageUser> {
    const user: StorageUser = {
      user_id: 0,
      name: "",
      email: "",
    };

    await this.getObject(user);

    return user;
  }
}

export const storage = new Storage();
