export function Card({ children, ...props }) {
  return <div {...props} className="rounded-md shadow-md p-2 bg-white text-black">{children}</div>;
}
export function CardContent({ children }) {
  return <div>{children}</div>;
}
