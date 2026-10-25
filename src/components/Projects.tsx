import { useEffect, useState } from 'react'
import { Code2, ExternalLink, Plus, X } from 'lucide-react'
import { projects as defaultProjects, type Project } from '../data/config'
import SectionTitle from './SectionTitle'

/** localStorage 键名：存放用户通过网页动态添加的项目 */
const STORAGE_KEY = 'portfolio-custom-projects'

/** 弹窗表单字段 */
interface ProjectForm {
  title: string
  description: string
  techStack: string
  demoLink: string
  githubLink: string
}

const EMPTY_FORM: ProjectForm = { title: '', description: '', techStack: '', demoLink: '', githubLink: '' }

/** 从 localStorage 读取用户动态添加的项目（读取失败时返回空数组） */
function loadCustomProjects(): Project[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    return raw ? (JSON.parse(raw) as Project[]) : []
  } catch {
    return []
  }
}

/**
 * 个人作品展示区
 * - 默认项目来自 src/data/config.ts，用户添加的项目来自 localStorage，两者合并展示
 * - 第一个项目（速记卡）跨 2 列显示为大卡，其余为小卡
 * - 末尾固定一张虚线「添加新项目」卡片，点击弹出模态框
 */
export default function Projects() {
  // 用户动态添加的项目列表
  const [customProjects, setCustomProjects] = useState<Project[]>(loadCustomProjects)
  // 模态框开关 & 表单内容
  const [showModal, setShowModal] = useState(false)
  const [form, setForm] = useState<ProjectForm>(EMPTY_FORM)

  // 合并默认配置与动态项目
  const allProjects = [...defaultProjects, ...customProjects]

  // ESC 键关闭弹窗
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setShowModal(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  /** 保存新项目：写入 localStorage 并即时刷新列表 */
  const handleSave = () => {
    // 简单必填校验
    if (!form.title.trim() || !form.description.trim() || !form.demoLink.trim()) {
      alert('请填写：项目名称、项目描述、在线体验链接')
      return
    }
    const newProject: Project = {
      id: Date.now(), // 用时间戳生成唯一 id
      title: form.title.trim(),
      description: form.description.trim(),
      techStack: form.techStack
        .split(/[,，]/) // 支持中英文逗号分隔
        .map((s) => s.trim())
        .filter(Boolean),
      coverImage: '',
      emoji: '🧩',
      demoLink: form.demoLink.trim(),
      githubLink: form.githubLink.trim(),
      custom: true,
    }
    const next = [...customProjects, newProject]
    // 写入 localStorage 持久化，下次打开仍在
    localStorage.setItem(STORAGE_KEY, JSON.stringify(next))
    setCustomProjects(next)
    setShowModal(false)
    setForm(EMPTY_FORM)
  }

  /** 删除动态添加的项目（默认配置里的项目不可删除） */
  const handleDelete = (id: number) => {
    if (!confirm('确定删除这个项目吗？')) return
    const next = customProjects.filter((p) => p.id !== id)
    localStorage.setItem(STORAGE_KEY, JSON.stringify(next))
    setCustomProjects(next)
  }

  return (
    <section id="projects" className="relative scroll-mt-20 px-6 py-20 sm:py-24">
      <div className="mx-auto max-w-5xl">
        <SectionTitle title="个人作品" />

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {allProjects.map((project, index) => (
            /* 项目卡片：第一个项目跨 2 列为大卡，其余占 1 列 */
            <article
              key={project.id}
              className={`group relative flex flex-col overflow-hidden rounded-3xl bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-[#67C9B5]/20 ${
                index === 0 ? 'md:col-span-2' : ''
              }`}
            >
              {/* 动态添加的项目：右上角删除按钮 */}
              {project.custom && (
                <button
                  onClick={() => handleDelete(project.id)}
                  title="删除此项目"
                  className="absolute right-3 top-3 z-10 flex h-7 w-7 items-center justify-center rounded-full bg-white/90 text-slate-400 shadow-sm transition hover:bg-red-50 hover:text-red-500"
                >
                  <X className="h-4 w-4" />
                </button>
              )}

              {/* 封面：有图用图，无图用「渐变背景 + Emoji」 */}
              {project.coverImage ? (
                <div className={`overflow-hidden ${index === 0 ? 'h-52' : 'h-40'}`}>
                  <img
                    src={project.coverImage}
                    alt={project.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              ) : (
                <div
                  className={`flex items-center justify-center bg-gradient-to-br from-[#F9D2E4] via-white to-[#67C9B5]/70 ${
                    index === 0 ? 'h-52 text-7xl' : 'h-40 text-6xl'
                  }`}
                >
                  {project.emoji ?? '🗂️'}
                </div>
              )}

              <div className="flex flex-1 flex-col p-7">
                <h3 className="text-xl font-bold text-slate-800">{project.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-500">
                  {project.description}
                </p>

                {/* 技术栈标签 */}
                {project.techStack.length > 0 && (
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                      <li
                        key={tech}
                        className="rounded-full bg-[#67C9B5]/10 px-3 py-1 text-xs font-medium text-[#007E79]"
                      >
                        {tech}
                      </li>
                    ))}
                  </ul>
                )}

                {/* 按钮：在线体验 / 查看源码（源码链接为空时隐藏），新窗口打开 */}
                <div className="mt-6 flex gap-3">
                  <a
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-full bg-[#007E79] px-5 py-2.5 text-xs font-medium text-white transition-all hover:-translate-y-0.5 hover:shadow-lg"
                  >
                    在线体验
                    <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                  {project.githubLink && (
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-full bg-white px-5 py-2.5 text-xs font-medium text-slate-700 ring-1 ring-slate-200 transition-all hover:-translate-y-0.5 hover:shadow-md"
                    >
                      查看源码
                      <Code2 className="h-3.5 w-3.5" />
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}

          {/* 「添加新项目」虚线卡片：始终保留在网格末尾 */}
          <button
            onClick={() => setShowModal(true)}
            className="flex min-h-[16rem] flex-col items-center justify-center gap-3 rounded-3xl border-2 border-dashed border-[#67C9B5]/70 bg-white/50 p-8 text-center transition-all hover:-translate-y-1 hover:border-[#67C9B5] hover:bg-white/80"
          >
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#67C9B5]/15 text-[#007E79]">
              <Plus className="h-6 w-6" />
            </span>
            <p className="font-semibold text-slate-500">添加新项目</p>
            <p className="text-xs text-slate-400">点击这里，随时补充你的作品</p>
          </button>
        </div>
      </div>

      {/* ============ 添加项目模态框 ============ */}
      {showModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/40 p-4 backdrop-blur-sm"
          onClick={() => setShowModal(false)} // 点击遮罩关闭
        >
          <div
            className="w-full max-w-md rounded-3xl bg-white p-7 shadow-2xl"
            onClick={(e) => e.stopPropagation()} // 阻止冒泡，点卡片不关闭
          >
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-bold text-slate-800">添加新项目</h3>
              <button
                onClick={() => setShowModal(false)}
                className="flex h-8 w-8 items-center justify-center rounded-full text-slate-400 transition hover:bg-slate-100"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="mt-5 space-y-4">
              <label className="block">
                <span className="text-xs font-medium text-slate-500">项目名称 *</span>
                <input
                  value={form.title}
                  onChange={(e) => setForm({ ...form, title: e.target.value })}
                  placeholder="如：校园二手交易数据分析"
                  className="mt-1.5 w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm outline-none transition focus:border-[#67C9B5] focus:ring-2 focus:ring-[#67C9B5]/20"
                />
              </label>
              <label className="block">
                <span className="text-xs font-medium text-slate-500">项目描述 *</span>
                <textarea
                  value={form.description}
                  onChange={(e) => setForm({ ...form, description: e.target.value })}
                  rows={3}
                  placeholder="一句话介绍这个项目做了什么…"
                  className="mt-1.5 w-full resize-none rounded-xl border border-slate-200 px-4 py-2.5 text-sm outline-none transition focus:border-[#67C9B5] focus:ring-2 focus:ring-[#67C9B5]/20"
                />
              </label>
              <label className="block">
                <span className="text-xs font-medium text-slate-500">技术栈标签（逗号分隔）</span>
                <input
                  value={form.techStack}
                  onChange={(e) => setForm({ ...form, techStack: e.target.value })}
                  placeholder="如：Python, 数据分析, 可视化"
                  className="mt-1.5 w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm outline-none transition focus:border-[#67C9B5] focus:ring-2 focus:ring-[#67C9B5]/20"
                />
              </label>
              <label className="block">
                <span className="text-xs font-medium text-slate-500">在线体验链接 *</span>
                <input
                  value={form.demoLink}
                  onChange={(e) => setForm({ ...form, demoLink: e.target.value })}
                  placeholder="https://…"
                  className="mt-1.5 w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm outline-none transition focus:border-[#67C9B5] focus:ring-2 focus:ring-[#67C9B5]/20"
                />
              </label>
              <label className="block">
                <span className="text-xs font-medium text-slate-500">源码链接（可选）</span>
                <input
                  value={form.githubLink}
                  onChange={(e) => setForm({ ...form, githubLink: e.target.value })}
                  placeholder="https://github.com/…"
                  className="mt-1.5 w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm outline-none transition focus:border-[#67C9B5] focus:ring-2 focus:ring-[#67C9B5]/20"
                />
              </label>
            </div>

            <div className="mt-6 flex gap-3">
              <button
                onClick={handleSave}
                className="flex-1 rounded-full bg-[#007E79] py-2.5 text-sm font-medium text-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg"
              >
                保存项目
              </button>
              <button
                onClick={() => setShowModal(false)}
                className="rounded-full bg-slate-100 px-6 py-2.5 text-sm font-medium text-slate-600 transition hover:bg-slate-200"
              >
                取消
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
