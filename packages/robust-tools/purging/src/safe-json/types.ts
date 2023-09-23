export interface SafeJSONOptions {
  object: unknown; // The JavaScript object to be serialized to JSON.
  replacerFunction?: (key: string, value: unknown) => unknown; // Optional callback function to transform or exclude values during serialization.
  indentation?: string | number; // Optional indentation string or number of spaces for pretty-printing the resulting JSON string.
}
