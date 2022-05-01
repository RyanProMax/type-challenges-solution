type StartsWith<T extends string, U extends string> = U extends `${infer UL}${infer UR}`
  ? T extends `${infer TL}${infer TR}`
    ? TL extends UL 
      ? StartsWith<TR, UR>
      : false
    : false
  : true

