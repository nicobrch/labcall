export interface IAbility {
  id?: number;
  name?: string;
  description?: string;
}
export interface ICreateAbility extends IAbility {}
export interface IUpdateAbility extends IAbility {}
