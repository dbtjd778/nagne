import { motion } from 'framer-motion'
import Hero from '../components/Hero'
import Directory from '../components/Directory'

const EASE = [0.16, 1, 0.3, 1]

const PRINCIPLES = [
  {
    title: '가입 없이 열리는가',
    body: '첫 화면에서 로그인부터 요구하는 곳은 대부분 뺐습니다. 궁금해서 눌렀는데 회원가입 폼이 뜨면 그 흥미는 대개 거기서 끝나기 때문입니다.',
  },
  {
    title: '설명이 한 줄로 되는가',
    body: '무엇을 하는 곳인지 한 문장으로 정리되지 않으면 목록에 넣지 않았습니다. 이 목록의 설명은 모두 직접 들어가 본 뒤 쓴 것입니다.',
  },
  {
    title: '오래 살아남을 것인가',
    body: '유행을 타고 사라지는 서비스보다, 몇 년 뒤에도 같은 주소에서 열릴 확률이 높은 곳을 우선했습니다. 그럼에도 사라지는 곳은 생기며, 발견하면 정리합니다.',
  },
]

export default function Home() {
  return (
    <>
      <Hero />

      <section className="wrap pb-6 pt-16 md:pb-16 md:pt-28">
        <div className="grid grid-cols-1 gap-10 border-t pt-10 rule md:grid-cols-12 md:gap-6">
          <div className="md:col-span-4">
            <span className="eyebrow">How it is picked</span>
            <h2 className="mt-3 font-display text-[clamp(1.5rem,3vw,2.4rem)] leading-tight tracking-tight">
              무엇을 남기고
              <br />
              무엇을 뺐는가
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-8 md:col-span-8 md:grid-cols-3">
            {PRINCIPLES.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.7, ease: EASE, delay: i * 0.09 }}
              >
                <p className="mb-3 text-[14px] font-semibold tracking-tight">{p.title}</p>
                <p className="text-[13.5px] leading-[1.85]" style={{ color: 'var(--muted)' }}>
                  {p.body}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Directory />
    </>
  )
}
