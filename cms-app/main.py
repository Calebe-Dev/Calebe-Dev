import customtkinter as ctk
import os
import re
from datetime import datetime

# Configuracao global CustomTkinter 
ctk.set_appearance_mode("dark")
ctk.set_default_color_theme("blue")

class CalebeCMS(ctk.CTk):
    def __init__(self):
        super().__init__()

        # Configuracoes da Janela Principal
        self.title("Sistema de Postagens • Calebe-Dev")
        self.geometry("1000x800")
        self.minsize(900, 700)

        # Configuracao do Grid Base
        self.grid_columnconfigure(1, weight=1)
        self.grid_rowconfigure(0, weight=1)

        # ====================
        # SIDEBAR (ESQUERDA) - SEO & Metadados
        # ====================
        self.sidebar_frame = ctk.CTkFrame(self, width=320, corner_radius=0)
        self.sidebar_frame.grid(row=0, column=0, rowspan=2, sticky="nsew")
        self.sidebar_frame.grid_rowconfigure(7, weight=1)

        self.logo_label = ctk.CTkLabel(self.sidebar_frame, text="CMS Dashboard", font=ctk.CTkFont(size=24, weight="bold"))
        self.logo_label.grid(row=0, column=0, padx=20, pady=(30, 20))

        # Title
        self.title_label = ctk.CTkLabel(self.sidebar_frame, text="Título do Artigo", font=ctk.CTkFont(weight="bold"))
        self.title_label.grid(row=1, column=0, padx=20, pady=(10, 0), sticky="w")
        self.title_entry = ctk.CTkEntry(self.sidebar_frame, placeholder_text="Digite o título...")
        self.title_entry.grid(row=2, column=0, padx=20, pady=(5, 10), sticky="ew")
        self.title_entry.bind("<KeyRelease>", self.update_slug_auto)

        # Slug
        self.slug_label = ctk.CTkLabel(self.sidebar_frame, text="URL Slug", font=ctk.CTkFont(weight="bold"))
        self.slug_label.grid(row=3, column=0, padx=20, pady=(10, 0), sticky="w")
        self.slug_entry = ctk.CTkEntry(self.sidebar_frame, placeholder_text="meu-artigo-seo")
        self.slug_entry.grid(row=4, column=0, padx=20, pady=(5, 10), sticky="ew")

        # Excerpt
        self.excerpt_label = ctk.CTkLabel(self.sidebar_frame, text="Resumo (Excerpt)", font=ctk.CTkFont(weight="bold"))
        self.excerpt_label.grid(row=5, column=0, padx=20, pady=(10, 0), sticky="w")
        self.excerpt_textbox = ctk.CTkTextbox(self.sidebar_frame, height=80)
        self.excerpt_textbox.grid(row=6, column=0, padx=20, pady=(5, 10), sticky="ew")

        # Outros Campos (Scrollable para caber tudo)
        self.scroll_meta = ctk.CTkScrollableFrame(self.sidebar_frame, fg_color="transparent")
        self.scroll_meta.grid(row=7, column=0, sticky="nsew", padx=10, pady=10)

        # Tags
        self.tags_label = ctk.CTkLabel(self.scroll_meta, text="Tags (separadas por vírgula)", font=ctk.CTkFont(weight="bold"))
        self.tags_label.grid(row=0, column=0, padx=10, pady=(10, 0), sticky="w")
        self.tags_entry = ctk.CTkEntry(self.scroll_meta, placeholder_text="Svelte, FrontEnd, SEO")
        self.tags_entry.grid(row=1, column=0, padx=10, pady=(5, 10), sticky="ew")

        # Read Time
        self.readtime_label = ctk.CTkLabel(self.scroll_meta, text="Tempo de Leitura", font=ctk.CTkFont(weight="bold"))
        self.readtime_label.grid(row=2, column=0, padx=10, pady=(10, 0), sticky="w")
        self.readtime_entry = ctk.CTkEntry(self.scroll_meta, placeholder_text="5 min")
        self.readtime_entry.grid(row=3, column=0, padx=10, pady=(5, 10), sticky="ew")
        
        # Imagem Capa
        self.cover_label = ctk.CTkLabel(self.scroll_meta, text="URL Capa Imagem", font=ctk.CTkFont(weight="bold"))
        self.cover_label.grid(row=4, column=0, padx=10, pady=(10, 0), sticky="w")
        self.cover_entry = ctk.CTkEntry(self.scroll_meta, placeholder_text="/blog/images/capa.jpg")
        self.cover_entry.grid(row=5, column=0, padx=10, pady=(5, 10), sticky="ew")

        # Botao IA
        self.ai_btn = ctk.CTkButton(self.sidebar_frame, text="✨ Gerar Artigo com IA", fg_color="#6366f1", hover_color="#4f46e5", font=ctk.CTkFont(weight="bold"), command=self.placeholder_ai)
        self.ai_btn.grid(row=8, column=0, padx=20, pady=(10, 20), sticky="ew")

        # ====================
        # AREA CENTRAL (EDITOR MARKDOWN)
        # ====================
        self.main_frame = ctk.CTkFrame(self, fg_color="transparent")
        self.main_frame.grid(row=0, column=1, sticky="nsew", padx=20, pady=20)
        self.main_frame.grid_columnconfigure(0, weight=1)
        self.main_frame.grid_rowconfigure(1, weight=1)

        self.editor_label = ctk.CTkLabel(self.main_frame, text="Corpo do Artigo (Markdown)", font=ctk.CTkFont(size=20, weight="bold"))
        self.editor_label.grid(row=0, column=0, pady=(0, 10), sticky="w")

        self.editor_textbox = ctk.CTkTextbox(self.main_frame, font=ctk.CTkFont(family="monospace", size=14), wrap="word")
        self.editor_textbox.grid(row=1, column=0, sticky="nsew")

        # Botão Salvar
        self.save_btn = ctk.CTkButton(self.main_frame, text="✅ Publicar no SvelteKit", height=50, fg_color="#10b981", hover_color="#059669", font=ctk.CTkFont(size=16, weight="bold"), command=self.save_to_sveltekit)
        self.save_btn.grid(row=2, column=0, pady=(20, 0), sticky="ew")

    def create_slug(self, text):
        text = text.lower()
        text = re.sub(r'[^a-z0-9]+', '-', text)
        return text.strip('-')

    def update_slug_auto(self, event):
        title = self.title_entry.get()
        new_slug = self.create_slug(title)
        self.slug_entry.delete(0, 'end')
        self.slug_entry.insert(0, new_slug)
        # Tenta sugerir a pasta de imagem também
        image_path = f"/blog/images/{new_slug}.jpg"
        self.cover_entry.delete(0, 'end')
        self.cover_entry.insert(0, image_path)

    def placeholder_ai(self):
        print("Botão AI Clicado - Funcionalidade Mapeada para Integrações Futuras.")

    def save_to_sveltekit(self):
        title = self.title_entry.get().strip()
        slug = self.slug_entry.get().strip()
        date = datetime.now().strftime("%Y-%m-%d")
        excerpt = self.excerpt_textbox.get("1.0", "end-1c").strip()
        read_time = self.readtime_entry.get().strip()
        cover = self.cover_entry.get().strip()
        tags_raw = self.tags_entry.get().strip()
        body = self.editor_textbox.get("1.0", "end-1c")

        if not title or not slug:
            print("Erro: Titulo e Slug são obrigatórios.")
            return

        tags_list = [f'"{t.strip()}"' for t in tags_raw.split(',')] if tags_raw else []
        tags_str = "[" + ", ".join(tags_list) + "]"

        # Frontmatter Format SvelteKit
        markdown_content = f"""---
title: "{title}"
slug: "{slug}"
date: "{date}"
excerpt: "{excerpt}"
coverImage: "{cover}"
readTime: "{read_time if read_time else '5 min'}"
tags: {tags_str}
---

{body}
"""
        # Calcular path correto baseado onde o app Python roda. 
        # Ele roda em cms-app/ então subimos 1 dir para a raiz do Svelte.
        base_dir = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
        posts_dir = os.path.join(base_dir, 'src', 'lib', 'data', 'posts')
        
        os.makedirs(posts_dir, exist_ok=True)
        file_path = os.path.join(posts_dir, f"{slug}.md")

        try:
            with open(file_path, "w", encoding="utf-8") as f:
                f.write(markdown_content)
            
            # Limpar form
            print(f"✅ Artigo Publicado/Salvo em: {file_path}")
            self.save_btn.configure(text="✅ Artigo Publicado com Sucesso!", fg_color="#059669")
            self.after(3000, lambda: self.save_btn.configure(text="✅ Publicar no SvelteKit", fg_color="#10b981"))
        except Exception as e:
            print(f"❌ Erro ao salvar: {e}")

if __name__ == "__main__":
    app = CalebeCMS()
    app.mainloop()
