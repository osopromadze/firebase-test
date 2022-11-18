// Dependencies
import NextLink, { LinkProps as LinkNextProps } from 'next/link'

type LinkProps = React.ComponentProps<'a'> & LinkNextProps

const Link: React.FC<LinkProps> = ({
  href,
  as,
  passHref,
  replace,
  scroll,
  shallow,
  locale,
  ...rest
}) => (
  <NextLink
    href={href}
    as={as}
    replace={replace}
    scroll={scroll}
    shallow={shallow}
    passHref={passHref}
    locale={locale}
  >
    {/* eslint-disable-next-line */}
    <a {...rest} />
  </NextLink>
)

export default Link
