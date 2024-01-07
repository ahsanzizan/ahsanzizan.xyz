import { compare, hashSync } from "bcrypt";

export function validate(text: string, hash: string) {
  return compare(text, hash);
}

export function generate(text: string) {
  const saltOrRounds = 12;
  return hashSync(text, saltOrRounds);
}
