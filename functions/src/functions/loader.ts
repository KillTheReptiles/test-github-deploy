import { onCall } from '../config/callbacks/onCall';
import { testFunctios } from './test';

export const loader = (exports: any): void => {
  exports.testFunctios = onCall(testFunctios);
};
