export const pageNameNormalizer = (pageName: string): string => {
  if (pageName === 'home') {
    return 'index'
  }

  return pageName
}
