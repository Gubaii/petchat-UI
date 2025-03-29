/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,html}"
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FF7043', // 更温暖的橙色，与图片中的按钮相符
        secondary: '#2B3040', // 深蓝灰色，用于底部导航栏
        background: {
          light: '#FFFFFF', // 白色，主背景
          dark: '#F8F9FA'   // 更浅的灰色，更加柔和
        },
        text: {
          primary: '#2B3040', // 深蓝灰，主文本
          secondary: '#6B7280' // 中灰，次要文本
        },
        success: '#4CAF50', // 绿色，成功
        warning: '#F44336', // 红色，警告
        system: '#EFF3F8', // 系统消息背景
        pet: '#FFF8E8'    // 宠物消息背景，更加温暖
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem'
      },
      boxShadow: {
        'card': '0 4px 12px rgba(0, 0, 0, 0.05)',
        'button': '0 2px 8px rgba(255, 112, 67, 0.3)'
      }
    },
  },
  plugins: [],
} 