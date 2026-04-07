"use client"

import { useState } from "react"
import { Check, Loader2 } from "lucide-react"

type VerificationState = "idle" | "verifying" | "verified"

export default function VerificationPage() {
  const [state, setState] = useState<VerificationState>("idle")

  const handleVerification = () => {
    setState("verifying")
    
    setTimeout(() => {
      setState("verified")
      
      setTimeout(() => {
        window.location.href = "https://t.me/brunopalestinooficial"
      }, 1500)
    }, 2000)
  }

  return (
    <main className="min-h-screen flex items-center justify-center bg-[#0a0a0a] p-4">
      <div 
        className="w-full max-w-md animate-in fade-in zoom-in-95 duration-500"
      >
        <div 
          className="bg-[#0d1117] rounded-[20px] border border-blue-600/30 p-8 text-center shadow-[0_0_40px_rgba(37,99,235,0.15)]"
        >
          {/* Robot Emoji */}
          <div className="mb-6 flex justify-center">
            <span 
              className={`
                text-6xl transition-all duration-500
                ${state === "verified" ? "scale-110" : ""}
              `}
            >
              {state === "verified" ? "✅" : "🤖"}
            </span>
          </div>

          {/* Title */}
          <h1 className="text-2xl font-bold text-white mb-2">
            Verificação de Segurança
          </h1>
          
          {/* Subtitle */}
          <p className="text-[#94a3b8] mb-8">
            {state === "verified" 
              ? "Verificado! Redirecionando..."
              : "Confirme que você é humano para continuar"
            }
          </p>

          {/* Verification Button/Checkbox */}
          {state === "idle" && (
            <button
              onClick={handleVerification}
              className="group w-full flex items-center gap-4 py-4 px-5 rounded-full bg-[#1a1f2e] hover:bg-[#1e2538] border border-[#2a3548] hover:border-blue-500/50 transition-all duration-300 cursor-pointer"
            >
              <div className="w-6 h-6 rounded border-2 border-[#3b4559] group-hover:border-blue-500 flex items-center justify-center transition-all duration-300">
              </div>
              <span className="text-white font-medium">Não sou um robô</span>
            </button>
          )}

          {state === "verifying" && (
            <div className="w-full flex items-center gap-4 py-4 px-5 rounded-full bg-[#1a1f2e] border border-blue-500/50 animate-in fade-in duration-300">
              <div className="w-6 h-6 rounded border-2 border-blue-500 flex items-center justify-center">
                <Loader2 className="w-4 h-4 text-blue-500 animate-spin" />
              </div>
              <span className="text-white font-medium">Verificando...</span>
            </div>
          )}

          {state === "verified" && (
            <div className="w-full flex items-center gap-4 py-4 px-5 rounded-full bg-[#1a1f2e] border border-emerald-500/50 animate-in fade-in scale-in-95 duration-300">
              <div className="w-6 h-6 rounded bg-emerald-500 flex items-center justify-center">
                <Check className="w-4 h-4 text-white" />
              </div>
              <span className="text-white font-medium">Verificação concluída</span>
            </div>
          )}

          {/* Footer */}
          <div className="mt-8 pt-6 border-t border-[#1e2538]">
            <p className="text-xs text-[#4a5568]">
              Proteção contra bots automatizados
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}
