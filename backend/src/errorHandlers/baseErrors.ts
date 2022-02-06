
class ApplicationError extends Error {
  get name() {
    return this.constructor.name;
  }

  constructor(message:string, options = {}) {
    super(message);

    for (const [key, value] of Object.entries(options)) {
      this[key] = value;
    }
  }
}

export class DatabaseError extends ApplicationError {
  get statusCode() {
    return 500;
  }
}

export class ServerError extends ApplicationError {
  get statusCode() {
    return 500;
  }
}

export class UserFacingError extends ApplicationError {}
