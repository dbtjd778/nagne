import Link from 'next/link'
export default function PageHeading({ title, description, eyebrow, updated }) {
  return <header className="page-heading"><nav className="breadcrumb" aria-label="현재 위치"><Link href="/">← 전체 탐방</Link></nav>{eyebrow?.includes("·") && <span className="eyebrow">{eyebrow}</span>}<h1>{title}</h1>{description && <p>{description}</p>}{updated && <small>업데이트 {updated}</small>}</header>
}
