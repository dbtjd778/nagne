export function Icon({ name, size = 20, ...props }) {
  const paths = {
    search: <><circle cx="10.5" cy="10.5" r="6.5" /><path d="m16 16 4.5 4.5" /></>,
    arrow: <><path d="M6 18 18 6M6 6h12v12" /></>,
    right: <><path d="M4 12h16m-6-6 6 6-6 6" /></>,
    down: <path d="m6 9 6 6 6-6" />,
    globe: <><circle cx="12" cy="12" r="9" /><ellipse cx="12" cy="12" rx="4" ry="9" /><path d="M3 12h18" /></>,
    bookmark: <path d="M6 4h12v17l-6-4-6 4z" />,
    shuffle: <><path d="m17 3 4 4-4 4M3 17l5-5m5-1 4-4h4M3 7h3l11 10h4m-4-4 4 4-4 4" /></>,
    grid: <><rect x="3" y="3" width="6" height="6" rx="1" /><rect x="15" y="3" width="6" height="6" rx="1" /><rect x="3" y="15" width="6" height="6" rx="1" /><rect x="15" y="15" width="6" height="6" rx="1" /></>,
    list: <><path d="M8 5h13M8 12h13M8 19h13M3 5h.01M3 12h.01M3 19h.01" /></>,
    close: <path d="m6 6 12 12M6 18 18 6" />,
    spark: <><path d="m12 3 2.5 6.5L21 12l-6.5 2.5L12 21l-2.5-6.5L3 12l6.5-2.5z" /></>,
    check: <path d="m5 12 4 4L19 6" />,
    compass: <><circle cx="12" cy="12" r="9.5" /><path d="m16 8-2.5 5.5L8 16l2.5-5.5z" /></>,
  }
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.65" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>{paths[name] || paths.compass}</svg>
}
