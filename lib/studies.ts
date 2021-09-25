import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const studiesDirectory = path.join(process.cwd(), 'studies')

export const getAllStudyIds = () => {
  const fileNames = fs.readdirSync(studiesDirectory)
  return fileNames.map((fileName) => {
    return {
      params: {
        id: fileName.replace(/\.md$/, ''),
      },
    }
  })
}

export const getStudiesData = async (id: string) => {
  const fullPath = path.join(studiesDirectory, `${id}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')

  const matterResult = matter(fileContents)

  const contentHtml = matterResult.content

  return {
    id,
    contentHtml,
    ...matterResult.data,
  }
}
