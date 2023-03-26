import Link from 'next/link'
import Image, { ImageProps } from 'next/image'
import { useMDXComponent } from 'next-contentlayer/hooks'
import type {
  AnchorHTMLAttributes,
  DetailedHTMLProps,
  FC,
  ImgHTMLAttributes,
} from 'react'

const keyStr =
  'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/='

const triplet = (e1: number, e2: number, e3: number) =>
  keyStr.charAt(e1 >> 2) +
  keyStr.charAt(((e1 & 3) << 4) | (e2 >> 4)) +
  keyStr.charAt(((e2 & 15) << 2) | (e3 >> 6)) +
  keyStr.charAt(e3 & 63)

export const rgbDataURL = (r: number, g: number, b: number) =>
  `data:image/gif;base64,R0lGODlhAQABAPAA${
    triplet(0, r, g) + triplet(b, 255, 255)
  }/yH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==`

const BlogLink: FC<
  DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>
> = ({ href, children }) => {
  if (href) {
    if (href.startsWith('#')) return <a href={href}>{children}</a>
    else if (href.startsWith('/')) return <Link href={href}>{children}</Link>
  }

  return (
    <a target='_blank' rel='noreferrer' href={href}>
      {children}
    </a>
  )
}

const BlogImage: FC<
  DetailedHTMLProps<ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>
> = (props) => (
  <Image
    {...(props as ImageProps)}
    placeholder='blur'
    blurDataURL={rgbDataURL(255, 255, 255)}
    draggable={false}
  />
)

const components = { BlogImage, a: BlogLink }
type MdxProps = { code: string }

const MDX: FC<MdxProps> = ({ code }) => {
  const Component = useMDXComponent(code)
  return <Component components={{ ...components }} />
}

export default MDX
