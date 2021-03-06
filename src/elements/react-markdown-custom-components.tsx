/**
 * These componets are used to react-markdown library.
 * Reffer https://github.com/remarkjs/react-markdown#appendix-b-components
 */
import React from 'react'

export const A = (
  props: JSX.IntrinsicAttributes &
    React.ClassAttributes<HTMLAnchorElement> &
    React.AnchorHTMLAttributes<HTMLAnchorElement>
): React.ReactElement => (
  // eslint-disable-next-line jsx-a11y/anchor-has-content
  <a {...props} target="_blank" className="text-blue-700"></a>
)
export const P = (
  props: JSX.IntrinsicAttributes &
    React.ClassAttributes<HTMLParagraphElement> &
    React.HTMLAttributes<HTMLParagraphElement>
): React.ReactElement => <p {...props} className="pb-4"></p>

export const UL: React.FC = ({ ...props }) => (
  <ul className="list-disc pl-5 pb-5" {...props}></ul>
)

export const H1: React.FC = ({ children }) => (
  <div className="mb-3 flex items-center">
    <h1 className="text-3xl"># {children}</h1>
  </div>
)
