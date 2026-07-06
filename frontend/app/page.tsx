'use client'

import React from 'react'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-600 to-blue-800">
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center text-white">
          <h1 className="text-5xl font-bold mb-4">منصة نبض المدارس</h1>
          <p className="text-xl mb-8">School Pulse</p>
          <p className="text-lg text-blue-100 mb-8">منصة حكومية متقدمة لإدارة التواصل بين مديري المدارس والإدارة العامة</p>
          <button className="px-8 py-3 bg-white text-primary-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            تسجيل الدخول
          </button>
        </div>
      </div>
    </div>
  )
}