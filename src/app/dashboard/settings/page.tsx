'use client'
import { useState } from 'react'
import PersonalData from '@/components/dashboard/settings/PersonalData'
import Verification from '@/components/dashboard/settings/Verification'
import Security from '@/components/dashboard/settings/Security'

type Tab = 'personal' | 'verification' | 'security'

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState<Tab>('personal')

  return (
    <div className="min-h-screen  text-white p-4 md:p-0">
      <div className="max-w-[1000px] mx-auto">
        
        <div className="inline-flex items-center p-1  rounded-full mb-8 overflow-x-auto no-scrollbar max-w-full">
          {[
            { id: 'personal', label: 'Персональные данные' },
            { id: 'verification', label: 'Верификация' },
            { id: 'security', label: 'Безопасность' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as Tab)}
              className={`px-4 md:px-6 py-2 rounded-full text-[11px] md:text-xs font-medium transition-all duration-200 whitespace-nowrap ${
                activeTab === tab.id 
                ? 'bg-[#262626] text-white shadow-sm' 
                : 'text-gray-500 hover:text-gray-300'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="bg-[#161616] rounded-[32px] p-6 md:p-10 min-h-[500px]">
          <div className="animate-in fade-in duration-300">
            {activeTab === 'personal' && <PersonalData />}
            {activeTab === 'verification' && <Verification />}
            {activeTab === 'security' && <Security />}
          </div>
        </div>
        
      </div>
    </div>
  )
}