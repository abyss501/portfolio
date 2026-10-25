import { aboutConfig, heroConfig } from '../data/config'
import SectionTitle from './SectionTitle'

/** 关于我：磨砂白卡 + 介绍段落 + 技能标签（与首屏技能联动） */
export default function About() {
  return (
    <section id="about" className="relative scroll-mt-24 px-6 py-20 sm:py-24">
      <div className="mx-auto max-w-3xl">
        <SectionTitle title={aboutConfig.title} />

        <div className="mt-12 rounded-3xl bg-white/60 p-8 shadow-sm ring-1 ring-white/70 backdrop-blur-md sm:p-10">
          {aboutConfig.paragraphs.map((text) => (
            <p key={text} className="leading-loose text-slate-600 [&:not(:first-child)]:mt-4">
              {text}
            </p>
          ))}

          {/* 技能标签 */}
          <ul className="mt-8 flex flex-wrap gap-2.5">
            {heroConfig.skills.map((skill) => (
              <li
                key={skill}
                className="rounded-lg bg-white px-4 py-2 text-sm font-medium text-slate-800 shadow-sm"
              >
                {skill}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
