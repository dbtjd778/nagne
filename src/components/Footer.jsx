import { Link } from 'react-router-dom'
import { regions, totalSiteCount, totalCategoryCount } from '../data/sites'

const POLICY = [
  { to: '/about', label: '사이트 소개' },
  { to: '/contact', label: '문의하기' },
  { to: '/privacy', label: '개인정보처리방침' },
  { to: '/terms', label: '이용약관' },
]

export default function Footer() {
  return (
    <footer className="border-t rule">
      <div className="wrap py-14 md:py-20">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
          <div className="md:col-span-4">
            <p className="font-display text-2xl tracking-tight">나그네</p>
            <p
              className="mt-4 max-w-[34ch] text-[13.5px] leading-[1.8]"
              style={{ color: 'var(--muted)' }}
            >
              심심할 때 열어보라고 만든 웹사이트 큐레이션입니다. {totalCategoryCount}개 카테고리,{' '}
              {totalSiteCount}개의 링크를 직접 확인해 정리했습니다.
            </p>
          </div>

          {regions.map((region) => (
            <nav key={region.id} className="md:col-span-3">
              <p className="eyebrow mb-5">{region.label}</p>
              <ul className="space-y-2.5">
                {region.categories.map((c) => (
                  <li key={c.id}>
                    <Link
                      to={`/c/${c.id}`}
                      className="text-[13.5px] leading-snug transition-opacity hover:opacity-60"
                      style={{ color: 'var(--muted)' }}
                    >
                      {c.category}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}

          <nav className="md:col-span-2">
            <p className="eyebrow mb-5">Information</p>
            <ul className="space-y-2.5">
              {POLICY.map((p) => (
                <li key={p.to}>
                  <Link
                    to={p.to}
                    className="text-[13.5px] transition-opacity hover:opacity-60"
                    style={{ color: 'var(--muted)' }}
                  >
                    {p.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div
          className="mt-14 flex flex-col gap-3 border-t pt-6 font-mono text-[11px] rule md:flex-row md:items-center md:justify-between"
          style={{ color: 'var(--muted)' }}
        >
          <span>© {new Date().getFullYear()} 나그네. All rights reserved.</span>
          <span>
            외부 링크의 내용과 서비스에 대한 권리는 각 사이트 운영자에게 있습니다.
          </span>
        </div>
      </div>
    </footer>
  )
}
