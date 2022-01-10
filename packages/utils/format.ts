const humpRE = /-(\w)/g
export const hump = (str: string): string =>
  str.replace(humpRE, (_, c) => c.toUpperCase())

export const tuple = <T extends string[]>(...args: T) => args
