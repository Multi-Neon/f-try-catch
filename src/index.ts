export interface Success<T> {
  data: T;
  error: null;
}

export interface Failed {
  data: null;
  error: Error;
}

export type Result<T> = Success<T> | Failed;

export function readError(error: any): string {
  if (typeof error === "string") return error;

  if (typeof error?.msg === "string") return error.msg;
  if (typeof error?.message === "string") return error.message;

  return JSON.stringify(error);
}

export function cleanFunction<T extends any[], U>(
  fn: (...args: T) => Promise<U>,
): (...args: T) => Promise<Result<U>> {
  return async (...args: T): Promise<Result<U>> => {
    try {
      const data = await fn(...args);
      return { data, error: null };
    } catch (error) {
      return {
        data: null,
        error: error instanceof Error ? error : new Error(String(error)),
      };
    }
  };
}

export function cleanFunctionSync<T extends any[], U>(
  fn: (...args: T) => U,
): (...args: T) => Result<U> {
  return (...args: T): Result<U> => {
    try {
      const data = fn(...args);
      return { data, error: null };
    } catch (error) {
      return {
        data: null,
        error: error instanceof Error ? error : new Error(String(error)),
      };
    }
  };
}
