import { v3 as uuidv3 } from 'uuid';

export default function stringToPseudoUUID(input: string): string {
    const hashedUUID = uuidv3(input, "f47ac10b-58cc-4372-a567-0e02b2c3d479");
    return hashedUUID;
  }