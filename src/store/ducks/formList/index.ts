import { Reducer } from 'redux';

import { FormListState, FormListTypes } from './types';

const INITIAL_STATE: FormListState = {
  data: {},
  result: {},
};

const FormListReducer: Reducer<FormListState> = (
  state = INITIAL_STATE,
  action,
) => {
  switch (action.type) {
    case FormListTypes.SAVE_DATA:
      return {
        ...state,
        data: action.payload?.data,
      };
    case FormListTypes.SAVE_RESULT:
      return {
        ...state,
        result: action.payload?.data,
      };
    default:
      return state;
  }
};
export default FormListReducer;
