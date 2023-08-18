export const testFunctios = async (data: any, context: any) => {
  try {
    return { message: 'Hola Test' };
  } catch (error) {
    return error;
  }
};
