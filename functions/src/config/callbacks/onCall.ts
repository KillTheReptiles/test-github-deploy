import { region, https } from 'firebase-functions';
import type { Runnable, HttpsFunction } from 'firebase-functions';

// this is a helper function to create a callable function with the correct region

// TODO: Find a way to not use "https" import but importing CallableContext directly
export const onCall = (
  callback: (data: any, context: https.CallableContext) => any,
  middlewares?: ((data: any, context: https.CallableContext) => Promise<void>)[],
  worldRegion = 'southamerica-east1'
): HttpsFunction & Runnable<any> => {
  return region(worldRegion).https.onCall(async (data, context) => {
    // if there are middlewares, execute them in order
    if (middlewares) {
      for (const middleware of middlewares) {
        await middleware(data, context);
      }
    }

    // execute the callback function
    return callback(data, context);
  });
};
