/**
 * ============================================================
 *  个人作品集 · 全站数据配置（唯一数据入口）
 * ------------------------------------------------------------
 *  想改内容？只改这个文件：
 *  · navConfig    → 导航栏（品牌、头像、链接、GitHub）
 *  · heroConfig   → 首屏（姓名、专业、简介、技能、按钮、照片、徽章）
 *  · projects     → 个人作品列表（往后添加项目就在这里加对象）
 * ============================================================
 */

// ---------------------------------------------------------------
//  导航栏
// ---------------------------------------------------------------
export const navConfig = {
  /** 品牌文字（头像右侧） */
  brand: 'PORTFOLIO',
  /** 左侧小头像图片 URL */
  avatar:
    'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=cheerful%20young%20asian%20female%20college%20student%2C%20upper%20body%20portrait%2C%20twin%20braids%2C%20light%20lavender%20dress%2C%20holding%20a%20small%20camera%2C%20clean%20pastel%20gradient%20background%2C%20modern%20flat%20illustration%20with%20soft%20shading%2C%20bright%20and%20fresh&image_size=square',
  /** 导航链接：active 的项会用深色胶囊高亮 */
  links: [
    { label: '关于我', href: '#about', active: true },
    { label: '个人作品', href: '#projects', active: false },
    { label: '联系我', href: '#contact', active: false },
  ],
  /** 右上角 GitHub 链接 */
  githubUrl: 'https://github.com/zhangsan',
}

// ---------------------------------------------------------------
//  首屏（Hero）
// ---------------------------------------------------------------
export const heroConfig = {
  /** 打招呼胶囊文字 */
  greeting: 'HELLO / 你好',
  /** 超大主标题：分三行显示「Hi,」/「我是」/ 姓名 */
  titleLine1: 'Hi,',
  titleLine2: '我是',
  name: '张鑫',
  /** 专业定位（深青色文字） */
  role: 'Digital Economy / 数字经济专业大二学生',
  /** 一句话简介 */
  bio: '对数字经济与数据分析充满热情，喜欢用代码把想法变成真实可用的产品。',
  /** 技能标签（白底黑字小标签） */
  skills: ['数据分析', 'Python', '宏观经济', '算法逻辑'],
  /** 主按钮（深色实心）：平滑滚动到作品区 */
  primaryButton: { label: '查看我的作品', href: '#projects' },
  /** 次按钮（白色空心）：平滑滚动到联系区 */
  secondaryButton: { label: '联系我', href: '#contact' },
  /** 右侧人物照片 URL */
  portrait:
    'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=cheerful%20young%20asian%20female%20college%20student%2C%20upper%20body%20portrait%2C%20twin%20braids%2C%20light%20lavender%20dress%2C%20holding%20a%20small%20camera%2C%20clean%20pastel%20gradient%20background%2C%20modern%20flat%20illustration%20with%20soft%20shading%2C%20bright%20and%20fresh&image_size=square',
  /** 人物右下角悬浮徽章 */
  badge: { title: 'NOW', line1: '探索数字经济', line2: '正在用代码构建世界' },
  /** 底部浮动胶囊文字 */
  scrollHint: '继续下滑，探索更多 ↓',
}

// ---------------------------------------------------------------
//  个人作品列表（以后新增项目，往数组里加对象即可）
// ---------------------------------------------------------------
export interface Project {
  id: number
  title: string
  description: string
  techStack: string[]
  /** 封面图 URL；留空 '' 时自动使用「渐变背景 + Emoji」封面 */
  coverImage: string
  /** 渐变封面上显示的 Emoji（仅 coverImage 为空时生效） */
  emoji?: string
  /** 在线演示链接 */
  demoLink: string
  /** 源码链接；留空 '' 时隐藏「查看源码」按钮 */
  githubLink: string
  /** 用户通过网页动态添加的项目标记（localStorage 来源），默认可省略 */
  custom?: boolean
}

export const projects: Project[] = [
  {
    id: 1,
    title: '期末重点提炼 / 考前速记卡生成器',
    description:
      '一款纯前端实现的复习辅助工具。通过正则表达式和关键词权重算法模拟AI逻辑，自动从长文本中提炼核心考点，并生成3D翻转速记卡。',
    techStack: ['原生 JS', '算法模拟', 'LocalStorage', 'Netlify'],
    coverImage: '',
    emoji: '📇',
    demoLink: 'https://funny-panda-28a937.netlify.app/',
    githubLink: '',
  },
  // --- 前端小项目（静态 HTML，存放在 public/ 目录，随站点一起部署） ---
  {
    id: 2,
    title: '待办事项应用',
    description: '支持任务添加、勾选完成、删除与「全部/进行中/已完成」筛选，界面清新的任务管理小工具。',
    techStack: ['原生 JS', 'Tailwind CSS', 'DOM 操作'],
    coverImage: '',
    emoji: '✅',
    demoLink: './todo.html',
    githubLink: '',
  },
  {
    id: 3,
    title: 'Markdown 笔记',
    description: '左右分栏的 Markdown 编辑器，输入即时渲染预览，代码块自动语法高亮。',
    techStack: ['Marked.js', 'Highlight.js', '实时渲染'],
    coverImage: '',
    emoji: '📝',
    demoLink: './markdown.html',
    githubLink: '',
  },
  {
    id: 4,
    title: '番茄钟计时器',
    description: '深色质感界面，SVG 圆环进度条倒计时，支持开始、暂停、重置，专注模式切换。',
    techStack: ['SVG 动画', '原生 JS', '深色 UI'],
    coverImage: '',
    emoji: '🍅',
    demoLink: './pomodoro.html',
    githubLink: '',
  },
  {
    id: 5,
    title: '天气查询应用',
    description: '蓝色渐变背景与毛玻璃卡片，展示城市天气、未来三天预报与湿度风速等详细数据。',
    techStack: ['Tailwind CSS', 'Glassmorphism', '响应式'],
    coverImage: '',
    emoji: '🌤️',
    demoLink: './weather.html',
    githubLink: '',
  },
]

// ---------------------------------------------------------------
//  关于我
// ---------------------------------------------------------------
export const aboutConfig = {
  title: '关于我',
  paragraphs: [
    '我是张鑫，一名数字经济专业的大二学生。平时喜欢把课堂上学到的经济学理论和数据分析方法，应用到一个个真实的小项目里。',
    '目前正在自学前端开发，希望做出既好看又好用的产品，用代码把想法变成现实。',
  ],
}

// ---------------------------------------------------------------
//  联系我
// ---------------------------------------------------------------
export const contactConfig = {
  title: '联系我',
  subtitle: '欢迎随时找我交流学习、项目合作，或只是打个招呼。',
  email: 'zhangxin@example.com',
  githubUrl: 'https://github.com/zhangsan',
}
