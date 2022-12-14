/**
 * @license EUPL-1.2
 */

import { ChevronRight } from '@amsterdam/icons-react'
import clsx from 'clsx'
import { AnchorHTMLAttributes, PropsWithChildren, ReactElement } from 'react'
import { Icon } from './Icon'

export interface LinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: 'standalone' | 'inList' | 'inline' // TODO: standalone can't have an icon, only inList and inline can. Fix this with type unions?
  icon?: ReactElement
}

export const Link = ({ children, className, icon, variant, ...restProps }: PropsWithChildren<LinkProps>) => (
  <a
    className={clsx(
      'amsterdam-link',
      variant === 'standalone' && 'amsterdam-link-standalone',
      variant === 'inList' && 'amsterdam-link-inlist',
      variant === 'inline' && 'amsterdam-link-inline',
      className,
    )}
    {...restProps}
  >
    {variant === 'inList' && <Icon size={icon ? 'medium' : 'small'}>{icon ? icon : <ChevronRight />}</Icon>}
    {children}
    {variant === 'inline' && icon && <Icon>{icon}</Icon>}
  </a>
)
