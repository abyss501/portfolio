import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { navConfig } from '../data/config'

/** GitHub 图标（新版 lucide-react 已移除品牌图标，使用内联 SVG） */
function GithubIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12Z" />
    </svg>
  )
}

/** 悬浮胶囊式导航栏：毛玻璃 + 全圆角，移动端折叠为汉堡菜单 */
export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="fixed inset-x-0 top-4 z-50 px-4">
      <nav className="mx-auto flex h-14 max-w-3xl items-center justify-between gap-4 rounded-full bg-white/60 pl-2 pr-3 shadow-sm ring-1 ring-white/70 backdrop-blur-md">
        {/* 左：头像 + 品牌文字 */}
        <a href="#home" className="flex items-center gap-2.5">
          <img
            src={navConfig.avatar}
            alt="头像"
            className="h-10 w-10 rounded-full object-cover ring-2 ring-white"
          />
          <span className="text-sm font-bold tracking-widest text-slate-800">
            {navConfig.brand}
          </span>
        </a>

        {/* 中：导航链接（桌面端），选中项深色胶囊 */}
        <ul className="hidden items-center gap-0.5 text-xs font-medium text-slate-600 sm:flex">
          {navConfig.links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={
                  link.active
                    ? 'rounded-full bg-slate-900 px-4 py-2 text-white'
                    : 'rounded-full px-4 py-2 transition-colors hover:bg-white/80 hover:text-[#007E79]'
                }
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* 右：GitHub 图标 + 移动端汉堡 */}
        <div className="flex items-center gap-2">
          <a
            href={navConfig.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub 主页"
            className="flex h-9 w-9 items-center justify-center rounded-full bg-white/80 text-slate-700 ring-1 ring-slate-200/70 transition-colors hover:text-[#007E79]"
          >
            <GithubIcon className="h-4.5 w-4.5" />
          </a>
          <button
            type="button"
            aria-label={menuOpen ? '关闭菜单' : '打开菜单'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
            className="flex h-9 w-9 items-center justify-center rounded-full text-slate-700 transition-colors hover:bg-white/80 sm:hidden"
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {/* 移动端下拉菜单 */}
      {menuOpen && (
        <div className="mx-auto mt-2 max-w-3xl rounded-3xl bg-white/90 p-3 shadow-lg ring-1 ring-white/70 backdrop-blur-md sm:hidden">
          {navConfig.links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className={`block rounded-full px-5 py-3 text-sm transition-colors ${
                link.active
                  ? 'bg-slate-900 text-white'
                  : 'text-slate-600 hover:bg-white hover:text-[#007E79]'
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </header>
  )
}
