<script lang="ts">
</script>

<section class="py-40 bg-black text-white relative overflow-hidden border-t border-white/5">
    <!-- Fundo Grade com gradiente dinâmico -->
    <div class="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_0%,#000_20%,transparent_100%)] pointer-events-none"></div>

    <div class="absolute -bottom-[400px] left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-blue-600/30 rounded-full blur-[150px] pointer-events-none"></div>

	<div class="max-w-6xl mx-auto px-6 relative z-10 w-full">
        <div class="bg-slate-900/40 backdrop-blur-3xl border border-white/10 rounded-[3.5rem] p-10 md:p-24 text-center shadow-[0_30px_100px_-20px_rgba(0,0,0,0.5)] relative overflow-hidden group">
            
            <div class="absolute inset-0 bg-gradient-to-b from-white/[0.04] to-transparent pointer-events-none"></div>
            <div class="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"></div>

            <!-- Ícone Elegante -->
            <div class="w-24 h-24 mx-auto bg-blue-500/10 border border-blue-500/20 rounded-[2rem] flex items-center justify-center mb-12 relative group-hover:scale-110 group-hover:rotate-3 transition-transform duration-700">
                <div class="absolute inset-0 bg-blue-400/20 rounded-[2rem] animate-ping opacity-50"></div>
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" class="text-blue-400 drop-shadow-lg" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
            </div>

            <h2 class="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter mb-8 text-white drop-shadow-sm">
                Vamos Construir <br/> <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">Juntos.</span>
            </h2>
            
            <p class="text-lg md:text-xl text-slate-400 font-light mb-16 max-w-2xl mx-auto text-balance">
                Seu projeto precisa de escalabilidade técnica, alta conversão e infraestrutura de ponta? Dê o próximo passo hoje mesmo.
            </p>

            <div class="flex flex-col sm:flex-row items-center justify-center gap-6">
                <!-- Botão Primário (Email) -->
                <a href="mailto:calebe.araujo101@gmail.com" class="group/btn relative px-8 md:px-10 py-5 bg-white text-black rounded-full font-bold text-lg hover:scale-105 transition-all duration-500 flex items-center justify-center gap-4 w-full sm:w-auto overflow-hidden shadow-[0_0_30px_rgba(255,255,255,0.3)]">
                    <div class="absolute inset-0 bg-gradient-to-r from-transparent via-black/10 to-transparent translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-700"></div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                    <span>calebe.araujo101@gmail.com</span>
                </a>
                
                <!-- Botão Secundário (WhatsApp) -->
                <a href="https://wa.me/5511988385247" target="_blank" rel="noopener noreferrer" class="group/wa px-8 md:px-10 py-5 bg-white/5 hover:bg-[#25D366]/20 text-white hover:text-[#25D366] hover:border-[#25D366]/50 rounded-full font-bold text-lg border border-white/10 backdrop-blur-md transition-all duration-500 flex items-center justify-center gap-3 w-full sm:w-auto shadow-lg hover:shadow-[0_0_30px_rgba(37,211,102,0.3)]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                    <span>WhatsApp</span>
                </a>

                <!-- Botão Terciário (LinkedIn) -->
                <a href="https://www.linkedin.com/in/calebe-dev" target="_blank" rel="noopener noreferrer" class="group/in px-8 md:px-10 py-5 bg-white/5 hover:bg-[#0a66c2]/20 text-white hover:text-[#0a66c2] hover:border-[#0a66c2]/50 rounded-full font-bold text-lg border border-white/10 backdrop-blur-md transition-all duration-500 flex items-center justify-center gap-3 w-full sm:w-auto shadow-lg hover:shadow-[0_0_30px_rgba(10,102,194,0.3)]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                    <span>LinkedIn</span>
                </a>
            </div>
        </div>
	</div>
</section>
