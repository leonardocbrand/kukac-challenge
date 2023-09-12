export interface CustomError extends Error {
  statusCode?: number,
}

const customError = ({ statusCode, message }: CustomError) => {
  return Object.assign(new Error(message), {statusCode})
}

export default customError;
