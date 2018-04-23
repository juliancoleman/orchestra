import { BaseError } from "./BaseError";

/**
 * OrchestraTypeError
 *
 * _The internal Orchestra TypeError._
 */

export class OrchestraTypeError extends BaseError {
  constructor(message: any) {
    super(`Expected String, got ${message}`);
  }
}
