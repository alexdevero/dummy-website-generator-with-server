import { writeFile } from 'fs';

import { content } from './../data/index-content'
import { pages } from './../data/pages'
import { camelCase } from './../utils/string-utils'
import { pageNameNormalizer } from './../utils/page-name-normalizer'

export const generatePages = (): void => {
  pages.forEach((page: string) => {
    writeFile(`output/${pageNameNormalizer(page)}.html`, content(camelCase(page)), (err: NodeJS.ErrnoException | null) => {
      if (err) throw err

      console.log(`Created ${pageNameNormalizer(page)}.html`)
    })
  })
}
