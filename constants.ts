export const AGE_GROUPS = {
  YOUNG: { min: 3, max: 4, targetMVPA: 180 }, // 3-4岁：建议全天180分钟任意强度活动
  OLD: { min: 5, max: 6, targetMVPA: 60 },    // 5-6岁：建议至少60分钟中高强度活动(MVPA)
};

export const COLORS = {
  primary: '#3b82f6', // blue-500
  success: '#22c55e', // green-500
  warning: '#f59e0b', // amber-500
  danger: '#ef4444', // red-500
  bg: '#f8fafc', // slate-50
  text: '#1e293b', // slate-800
};

export const GRADE_CONFIG = {
  A: { color: 'bg-green-100 text-green-800 border-green-200', label: '优秀 (A)', description: '运动量非常充足，符合WHO幼儿健康建议。' },
  B: { color: 'bg-blue-100 text-blue-800 border-blue-200', label: '良好 (B)', description: '运动量达标，建议适当增加户外中高强度活动。' },
  C: { color: 'bg-orange-100 text-orange-800 border-orange-200', label: '待改进 (C)', description: '运动量不足，建议家长积极引导，减少静坐时间。' },
};
