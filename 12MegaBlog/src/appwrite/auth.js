import conf from "../config/config";
import { Client, Account, ID } from "appwrite";

export class AuthSErvice {
  client = new Client();
  account;

  constructor() {
    this.client
      .setEndpoint(conf.appwriteUrl)
      .setProject(conf.appwriteProjectId);
    this.account = new Account(this.client);
  }

  // sign in
  async CreateAccount({ email, password, name }) {
    try {
      const userAccount = await this.account.create(
        ID.unique(),
        email,
        password,
        name
      );
      if (userAccount) {
        //call another method
        return this.login({ email, password });
      } else {
        return userAccount;
      }
    } catch (error) {
      throw error;
    }
  }

  // sign up
  async login({ email, password }) {
    try {
      return await this.account.createEmailPasswordSession(email, password);
    } catch (error) {
      throw error;
    }
  }

  // Checked user loge in or not
  async getCurrentUer() {
    try {
      return this.account.get();
    } catch (error) {
      console.log("Appwrite Service :: getCurrentUser :: error", error);
    }
    return null;
  }

  //Delete Session
  async logout(){
    try {
        return this.account.deleteSessions()
    } catch (error) {
        console.log("Appwrite Service :: Logout :: error", error);
    }
  }
}

const authService = new AuthSErvice();

export default authService;
