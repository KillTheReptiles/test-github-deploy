import { onCall } from '../config/callbacks/onCall';
import { ymlTest } from './test';

export const loader = (exports: any): void => {
  exports.testFunctios = onCall(ymlTest);
};
