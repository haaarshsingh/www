import Link from 'next/link'
import Image, { ImageProps } from 'next/image'
import { useMDXComponent } from 'next-contentlayer/hooks'
import type {
  AnchorHTMLAttributes,
  DetailedHTMLProps,
  FC,
  ImgHTMLAttributes,
} from 'react'

const BlogLink: FC<
  DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>
> = ({ href, children }) => {
  if (href && (href.startsWith('/') || href.startsWith('#')))
    return <Link href={href}>{children}</Link>
  return <a target='_blank' rel='noreferrer' href={href} />
}

const BlogImage: FC<
  DetailedHTMLProps<ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>
> = (props) => <Image {...(props as ImageProps)} />

const components = { img: BlogImage, a: BlogLink }
type MdxProps = { code: string }

const MDX: FC<MdxProps> = ({ code }) => {
  const Component = useMDXComponent(code)
  return <Component components={{ ...components }} />
}

export default MDX
