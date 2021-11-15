/**
 * Action types
 */
export enum FormListTypes {
  SAVE_DATA = 'form/SAVE_DATA',
  SAVE_RESULT = 'form/SAVE_RESULT',
}

/**
 * Data Types
 */

/**
 * State type
 */
export interface FormListState {
  readonly data?: any;
  readonly result?: any;
}
