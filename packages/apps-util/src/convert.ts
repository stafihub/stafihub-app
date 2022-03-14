export function uint8ArrToInt(input: Uint8Array): number {
  var length = input.length;

  let buffer = Buffer.from(input);
  var result = buffer.readUIntBE(0, length);

  return result;
}
