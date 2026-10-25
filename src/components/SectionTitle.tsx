interface SectionTitleProps {
  title: string
  subtitle?: string
}

/** 各区块统一的标题样式：居中大标题 + 薄荷绿 → 深青渐变短下划线 */
export default function SectionTitle({ title, subtitle }: SectionTitleProps) {
  return (
    <div className="text-center">
      <h2 className="text-3xl font-bold tracking-tight text-slate-800 sm:text-4xl">
        {title}
      </h2>
      <div className="mx-auto mt-4 h-1.5 w-12 rounded-full bg-gradient-to-r from-[#67C9B5] to-[#007E79]" />
      {subtitle && (
        <p className="mx-auto mt-4 max-w-xl text-slate-500">{subtitle}</p>
      )}
    </div>
  )
}
