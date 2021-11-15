import { action } from 'typesafe-actions';
import { FormListTypes } from './types';

export const saveData = (data: any): any =>
  action(FormListTypes.SAVE_DATA, { data });
export const saveResult = (data: any): any =>
  action(FormListTypes.SAVE_RESULT, { data });
