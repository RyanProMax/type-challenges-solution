type MapTypes<T extends unknown, R extends { mapFrom: unknown, mapTo: unknown }> = {
  [P in keyof T]: T[P] extends R['mapFrom'] ? R extends { mapFrom: T[P], mapTo: infer U } ? U : never : T[P];
}
