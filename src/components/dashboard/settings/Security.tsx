export default function Security() {
  return (
    <div className="space-y-6  mx-auto">
      <div className="bg-[#1C1C1C] p-6 rounded-3xl border border-[#262626]">
        <h3 className="text-lg font-bold mb-2">Google Authenticator</h3>
        <p className="text-gray-500 text-sm mb-6 leading-relaxed">
          Используется для ввода кода подтверждения Google при снятии и изменении настроек безопасности.
        </p>
        <button className="w-full md:w-auto px-8 py-3 bg-red-600 rounded-xl font-medium hover:bg-red-700 transition">
          Включить
        </button>
      </div>
    </div>
  )
}