import { Mail } from 'lucide-react'
import { contactConfig } from '../data/config'
import SectionTitle from './SectionTitle'

/** GitHub 图标（新版 lucide-react 已移除品牌图标，使用内联 SVG） */
function GithubIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12Z" />
    </svg>
  )
}

/** 联系我：邮箱 + GitHub 两张毛玻璃卡片 */
export default function Contact() {
  return (
    <section id="contact" className="relative scroll-mt-24 px-6 py-20 sm:py-24">
      <div className="mx-auto max-w-3xl">
        <SectionTitle title={contactConfig.title} subtitle={contactConfig.subtitle} />

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {/* 邮箱卡片 */}
          <a
            href={`mailto:${contactConfig.email}`}
            className="group flex items-center gap-4 rounded-3xl bg-white/60 p-6 shadow-sm ring-1 ring-white/70 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
          >
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#67C9B5]/15 text-[#007E79]">
              <Mail className="h-5 w-5" />
            </span>
            <span className="min-w-0">
              <span className="block text-xs font-medium text-slate-400">邮箱</span>
              <span className="block truncate text-sm font-semibold text-slate-800 group-hover:text-[#007E79]">
                {contactConfig.email}
              </span>
            </span>
          </a>

          {/* GitHub 卡片 */}
          <a
            href={contactConfig.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-4 rounded-3xl bg-white/60 p-6 shadow-sm ring-1 ring-white/70 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
          >
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#F9D2E4]/60 text-slate-700">
              <GithubIcon className="h-5 w-5" />
            </span>
            <span className="min-w-0">
              <span className="block text-xs font-medium text-slate-400">GitHub</span>
              <span className="block truncate text-sm font-semibold text-slate-800 group-hover:text-[#007E79]">
                {contactConfig.githubUrl.replace('https://', '')}
              </span>
            </span>
          </a>
        </div>
      </div>
    </section>
  )
}
