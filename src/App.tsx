import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="relative min-h-screen bg-[#FDFBF9] text-slate-800">
      {/* 全屏固定背景：粉绿柔和光晕 + 呼吸气泡 + 颗粒噪点 */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden" aria-hidden>
        {/* 大面积模糊光晕（#F9D2E4 / #67C9B5 / 淡蓝点缀） */}
        <div className="absolute -left-40 -top-40 h-[38rem] w-[38rem] rounded-full bg-[#F9D2E4] opacity-80 blur-3xl" />
        <div className="absolute -right-48 top-1/4 h-[34rem] w-[34rem] rounded-full bg-[#67C9B5] opacity-40 blur-3xl" />
        <div className="absolute -bottom-40 left-1/4 h-[30rem] w-[30rem] rounded-full bg-[#F9D2E4] opacity-60 blur-3xl" />
        <div className="absolute right-1/3 top-16 h-72 w-72 rounded-full bg-sky-200 opacity-40 blur-3xl" />
        {/* 呼吸感气泡 */}
        <div className="animate-float absolute left-[8%] top-[32%] h-24 w-24 rounded-full bg-white/40" />
        <div className="animate-float absolute right-[12%] top-[18%] h-16 w-16 rounded-full bg-white/50 [animation-delay:1.5s]" />
        <div className="animate-float absolute bottom-[22%] left-[45%] h-12 w-12 rounded-full bg-[#F9D2E4]/60 [animation-delay:3s]" />
        {/* 颗粒噪点叠加 */}
        <div className="noise-overlay absolute inset-0" />
      </div>

      <Navbar />

      {/* 单页滚动布局：首屏 → 关于我 → 个人作品 → 联系我 */}
      <main className="relative">
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>

      <Footer />
    </div>
  )
}
