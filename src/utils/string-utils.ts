export const camelCase = (str: string): string => {
  return str.substring(0, 1).toUpperCase() + str.substring(1)
}
