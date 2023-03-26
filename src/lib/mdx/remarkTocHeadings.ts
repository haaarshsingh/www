import { VFile } from 'vfile'
import { Parent } from 'unist'
import { visit } from 'unist-util-visit'
import { slug } from 'github-slugger'
import { toString } from 'mdast-util-to-string'
import { remark } from 'remark'

export type Toc = {
  value: string
  depth: number
  url: string
}

export const remarkTocHeadings = () => (tree: Parent, file: VFile) => {
  const toc: Toc[] = []

  visit(tree, 'heading', (node: { depth: number }) => {
    const textContent = toString(node)
    toc.push({
      value: textContent,
      url: '#' + slug(toString(node)),
      depth: node.depth,
    })
  })

  file.data.toc = toc
}

export const extractTocHeadings = async (markdown: string): Promise<Toc> =>
  (await remark().use(remarkTocHeadings).process(markdown)).data as any
