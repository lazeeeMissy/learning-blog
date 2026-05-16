import type { MDXComponents } from "mdx/types";

export const mdxComponents: MDXComponents = {
  h2: (props) => <h2 className="scroll-mt-24" {...props} />,
  h3: (props) => <h3 className="scroll-mt-24" {...props} />,
  a: (props) => <a {...props} className="font-medium text-ocean underline underline-offset-4" />,
  pre: (props) => (
    <pre
      {...props}
      className="overflow-x-auto rounded-lg border border-line bg-ink p-4 text-sm text-paper"
    />
  )
};
