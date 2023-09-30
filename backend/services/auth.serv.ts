import { SALT_ROUNDS } from "@/config";
import bcrypt from "bcrypt";

export const bcryptHash = async (data: string): Promise<string> => {
  return new Promise((resolve, reject) => {
    bcrypt.genSalt(SALT_ROUNDS, function (err, salt) {
      bcrypt.hash(data, salt, function (err, hash) {
        if (err || !hash) {
          reject(err);
        }
        resolve(hash);
      });
    });
  });
};
export const compare = async (data: string, cryptedData: string) => {
  return new Promise((resolve, reject) => {
    bcrypt.compare(data, cryptedData, (err, check) => {
      if (err) {
        reject(err);
      }
      resolve(check);
    });
  });
};
