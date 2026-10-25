import { heroConfig } from '../data/config'

/** 页脚：姓名 + 版权年份（姓名取自 config.ts，与首屏联动） */
export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="relative border-t border-white/60 bg-white/50 px-6 py-8 backdrop-blur-2xl">
      <p className="text-center text-xs text-slate-400">
        © {year} {heroConfig.name} · 保留所有权利
      </p>
    </footer>
  )
}
