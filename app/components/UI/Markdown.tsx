import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

export default function Markdown({ content }: { content: string }) {
  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      components={{
        h1: ({ children }) => (
          <h3 className="text-lg font-bold mt-4 first:mt-0">{children}</h3>
        ),
        h2: ({ children }) => (
          <h3 className="text-lg font-bold mt-4 first:mt-0">{children}</h3>
        ),
        h3: ({ children }) => (
          <h4 className="text-sm font-bold mt-3">{children}</h4>
        ),
        p: ({ children }) => (
          <p className="text-xs mt-2 leading-relaxed">{children}</p>
        ),
        ul: ({ children }) => (
          <ul className="mt-2 ml-4 list-disc space-y-1">{children}</ul>
        ),
        ol: ({ children }) => (
          <ol className="mt-2 ml-4 list-decimal space-y-1">{children}</ol>
        ),
        li: ({ children }) => <li className="text-xs">{children}</li>,
        strong: ({ children }) => (
          <strong className="font-bold">{children}</strong>
        ),
        code: ({ children }) => (
          <code className="bg-slate-700 rounded px-1 py-0.5 text-[0.7rem]">
            {children}
          </code>
        ),
        a: ({ href, children }) => (
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:no-underline"
          >
            {children}
          </a>
        ),
        hr: () => <hr className="border-slate-600 my-4" />,
      }}
    >
      {content}
    </ReactMarkdown>
  );
}
