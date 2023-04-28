// Base Error Class
abstract class CustomError extends Error {
  abstract statusCode: number;

  constructor(message: string) {
    super(message);
    Object.setPrototypeOf(this, CustomError.prototype);
  }

  abstract serializeErrors(): { message: string; field?: string }[];
}

// Authentication Error
export class AuthenticationError extends CustomError {
  statusCode = 401;

  constructor() {
    super('Kullanıcı kimlik doğrulaması hatası');
    Object.setPrototypeOf(this, AuthenticationError.prototype);
  }

  serializeErrors() {
    return [{ message: 'Kullanıcı kimlik doğrulaması hatası' }];
  }
}

// Bad Request Error
export class BadRequestError extends CustomError {
  statusCode = 400;

  constructor(public message: string, public field?: string) {
    super(message);
    Object.setPrototypeOf(this, BadRequestError.prototype);
  }

  serializeErrors() {
    return [{ message: this.message, field: this.field }];
  }
}

// Request Validation Error
export class RequestValidationError extends CustomError {
  statusCode = 400;

  constructor(public errors: { message: string; field?: string }[]) {
    super('İstek doğrulama hatası');
    Object.setPrototypeOf(this, RequestValidationError.prototype);
  }

  serializeErrors() {
    return this.errors;
  }
}
