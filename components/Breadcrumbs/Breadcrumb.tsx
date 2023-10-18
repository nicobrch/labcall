"use client"
import Link from "next/link";
import { usePathname } from 'next/navigation'

interface BreadcrumbProps {
  pageName: string;
}
const Breadcrumb = ({ pageName }: BreadcrumbProps) => {
  const currentPath = usePathname();
  // @ts-ignore
  const pathParts = currentPath.split('/').filter(Boolean);
  const lastPartIndex = pathParts.length - 1;
  
  return (
    <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
      <h2 className="text-title-md2 font-semibold text-black dark:text-white">
        {pageName}
      </h2>

      <nav>
        <ol className="flex items-center gap-2">
          <li>
            <Link className="font-medium" href="/">
              Dashboard
            </Link>
          </li>
          {pathParts.map((part, index) => (
            <li key={index} className={`font-medium ${index === lastPartIndex ? 'text-primary' : ''}`}>
              <Link
                href={`/${pathParts.slice(0, index + 1).join('/')}`}>
                / {part.charAt(0).toUpperCase() + part.slice(1)}
              </Link>
            </li>
          ))}
        </ol>
      </nav>
    </div>
  );
};

export default Breadcrumb;
