import { ArrowDown, Mail } from 'lucide-react'
import { heroConfig } from '../data/config'

/** 首屏：左右分栏布局（移动端上下堆叠），数据全部来自 src/data/config.ts */
export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center px-6 pb-24 pt-28"
    >
      <div className="mx-auto grid w-full max-w-6xl items-center gap-14 lg:grid-cols-2">
        {/* ================= 左侧：信息与交互 ================= */}
        <div>
          {/* 打招呼胶囊 */}
          <span className="inline-flex items-center gap-2 rounded-full bg-white/70 px-4 py-1.5 text-xs font-semibold text-[#007E79] ring-1 ring-white/80 backdrop-blur-sm">
            <span className="h-2 w-2 rounded-full bg-[#67C9B5]" />
            {heroConfig.greeting}
          </span>

          {/* 超大主标题 */}
          <h1 className="mt-6 text-6xl font-black leading-[1.05] tracking-tight text-slate-900 sm:text-7xl lg:text-8xl">
            {heroConfig.titleLine1}
            <br />
            {heroConfig.titleLine2}
            {heroConfig.name}
          </h1>

          {/* 专业定位：深青色文字 */}
          <p className="mt-5 text-xl font-bold text-[#007E79] sm:text-2xl">
            {heroConfig.role}
          </p>

          {/* 一句话简介 */}
          <p className="mt-6 max-w-md leading-relaxed text-slate-500">
            {heroConfig.bio}
          </p>

          {/* 技能标签：白底黑字 */}
          <ul className="mt-6 flex flex-wrap gap-2.5">
            {heroConfig.skills.map((skill) => (
              <li
                key={skill}
                className="rounded-lg bg-white px-4 py-2 text-sm font-medium text-slate-800 shadow-sm"
              >
                {skill}
              </li>
            ))}
          </ul>

          {/* 行动按钮：深色实心（滚动到作品区）+ 白色空心 */}
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href={heroConfig.primaryButton.href}
              className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-7 py-3.5 text-sm font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl"
            >
              {heroConfig.primaryButton.label}
              <ArrowDown className="h-4 w-4" />
            </a>
            <a
              href={heroConfig.secondaryButton.href}
              className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-medium text-slate-800 ring-1 ring-slate-200 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
            >
              {heroConfig.secondaryButton.label}
              <Mail className="h-4 w-4" />
            </a>
          </div>
        </div>

        {/* ================= 右侧：人物展示 ================= */}
        <div className="relative mx-auto w-full max-w-sm lg:max-w-md">
          {/* 巨大圆形渐变色块背景 */}
          <div
            className="absolute inset-x-2 top-6 aspect-square rounded-full bg-gradient-to-br from-[#F9D2E4] via-[#e6def7] to-[#67C9B5]/70"
            aria-hidden
          />
          {/* 人物图片：圆形裁剪，缓慢浮动 */}
          <img
            src={heroConfig.portrait}
            alt={`${heroConfig.name}的照片`}
            className="animate-float relative mx-auto aspect-square w-[88%] rounded-full object-cover shadow-2xl shadow-[#67C9B5]/30 ring-8 ring-white/50"
          />
          {/* 悬浮徽章：毛玻璃卡片 */}
          <div className="absolute bottom-4 right-0 rounded-2xl bg-white/60 px-5 py-4 shadow-lg ring-1 ring-white/70 backdrop-blur-md sm:-right-4">
            <p className="text-[10px] font-bold tracking-widest text-[#007E79]">
              {heroConfig.badge.title}
            </p>
            <p className="mt-1 text-sm font-bold text-slate-900">{heroConfig.badge.line1}</p>
            <p className="text-xs text-slate-500">{heroConfig.badge.line2}</p>
          </div>
        </div>
      </div>

      {/* 底部浮动胶囊：继续下滑 */}
      <a
        href="#projects"
        className="animate-float absolute bottom-6 left-1/2 -translate-x-1/2 rounded-full bg-white/70 px-6 py-2.5 text-xs font-medium text-slate-600 shadow-sm ring-1 ring-white/80 backdrop-blur-md transition-colors hover:text-[#007E79]"
      >
        {heroConfig.scrollHint}
      </a>
    </section>
  )
}
