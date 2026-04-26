# Wisemetrics — Identidade Visual: Guia de Aplicação

> Resumo executivo do Design System v0.2 para uso por time criativo, agências e parceiros.  
> Fonte canônica completa: `wisemetrics-design-system-v2.html`

---

## Índice

1. [Princípios de design](#1-princípios-de-design)
2. [Logo e símbolo](#2-logo-e-símbolo)
3. [Paleta de cores](#3-paleta-de-cores)
4. [Tipografia](#4-tipografia)
5. [Espaço e grid](#5-espaço-e-grid)
6. [Componentes de interface](#6-componentes-de-interface)
7. [Linguagem visual de dado](#7-linguagem-visual-de-dado)
8. [Motion e animação](#8-motion-e-animação)
9. [Aplicações — social media](#9-aplicações--social-media)
10. [Aplicações — apresentações](#10-aplicações--apresentações)
11. [O que nunca fazer](#11-o-que-nunca-fazer)

---

## 1. Princípios de design

### Dado com alma
Toda visualização de dado carrega contexto, hipótese e consequência. Não plotamos dado sem interpretação.

### Tecnologia visível, nunca gratuita
WebGL, canvas generativo e micro-animação existem para tornar a presença do dado perceptível. Se o efeito visual não acrescenta significado, não vai.

### Clareza antes de rebuscamento
Linha limpa. Densidade é permitida (somos uma empresa de dados). Ruído visual, não.

### Calor brasileiro, disciplina editorial
O teal vibrante é deliberado. A serifa Fraunces é deliberada. O jeito que escrevemos conversa enquanto é exato — é uma empresa brasileira com rigor internacional.

### Acessibilidade por padrão
Contraste WCAG AA mínimo em todos os pares semânticos. Foco visível, alvos táteis ≥ 44px.

---

## 2. Logo e símbolo

### Wordmark

**Fonte:** Fraunces, weight 500, letter-spacing -0.02em  
**Ponto final:** `#1DB5A3` (Signal-400) — este é o único elemento em teal no lockup  
**Leitura:** "Wisemetrics" — sempre em caixa-título, nunca todo maiúsculo, nunca todo minúsculo

```
Wisemetrics.
         ↑ teal
```

### Símbolo

O símbolo é um **mini-histograma** com 4 barras em escada ascendente e um ponto de insight em teal com anel-eco.

**Leitura do símbolo:**
- As barras = dado em movimento, distribuição, análise
- O ponto teal = o insight que emerge do ruído
- O anel-eco = o sinal que se propaga, a descoberta que irradia

**Construção (grid 4pt, viewBox 40×40):**
```
Barra 1: x=3, y=22, w=5, h=14   (mais curta)
Barra 2: x=11, y=16, w=5, h=20
Barra 3: x=19, y=10, w=5, h=26  (mais alta)
Barra 4: x=27, y=18, w=5, h=18
Ponto:   cx=34.5, cy=6, r=3.5   (teal)
Anel:    cx=34.5, cy=6, r=6     (teal, opacity 0.5)
```

### Variações aprovadas

| Variação | Fundo | Texto | Ponto |
|---|---|---|---|
| **Default (light)** | `#F7F5F0` (Paper-50) | `#132A44` (Ink-500) | `#1DB5A3` (Signal-400) |
| **Dark** | `#141318` (Ink-800) | `#ECE7DC` (Paper-50) | `#42CCBB` (Signal-300) |
| **Accent** | `#1DB5A3` (Signal-400) | `#040D18` (Ink-900) | `#071524` (Ink-700) |

### Zona de exclusão e tamanho mínimo

- **Zona de exclusão:** margem mínima = altura do "W" (x-cap do Fraunces 500) em todos os lados
- **Tamanho mínimo em tela:** 120px de largura (lockup completo)
- **Tamanho mínimo em impressão:** 30mm de largura
- **Uso isolado do símbolo:** permitido apenas em avatars e favicons — nunca no mesmo bloco onde o wordmark aparece completo

---

## 3. Paleta de cores

### Cores de marca

| Nome | Token | Hex | Uso |
|---|---|---|---|
| **Signal** (teal) | `--wm-signal-400` | `#1DB5A3` | Acento principal — CTA, insight, ponto de dado |
| **Signal hi** | `--wm-signal-300` | `#42CCBB` | Hover e variação dark do acento |
| **Ink** | `--wm-ink-500` | `#132A44` | Azul-marinho — fundo institucional, texto |
| **Paper** | `--wm-paper-50` | `#F7F5F0` | Fundo claro, canvas editorial |
| **Night** | `--wm-paper-900` | `#0A0907` | Fundo escuro profundo |
| **Amber** | `--wm-amber-400` | `#E8A33A` | Acento secundário — alertas, série B |

### Regra de proporção 60/30/10

```
60% ← Neutros (Paper-50 em light / Ink-800 em dark)
30% ← Tipografia, ícones, bordas (Ink-500 / Paper-50)
10% ← Signal teal — máximo 1 uso destacado por tela
```

**O teal é evento.** Quando aparece em todo lugar, perde o poder. Uma tela com 4 elementos teal não tem nenhum destaque.

### Variações semânticas

| Nome | Hex | Uso |
|---|---|---|
| Success | `#1DB5A3` | Reutiliza Signal — não há terceiro verde |
| Warning | `#E8A33A` | Amber-400 |
| Danger | `#D94B45` | Vermelho específico |
| Info | `#4A7CB8` | Azul-céu |

### Paleta de dados (categórica — para gráficos)

Usar sempre nesta ordem, da mais importante à menos:

| Série | Token | Hex |
|---|---|---|
| 1 | `--wm-data-1` | `#1DB5A3` (teal) |
| 2 | `--wm-data-2` | `#132A44` (ink) |
| 3 | `--wm-data-3` | `#E8A33A` (amber) |
| 4 | `--wm-data-4` | `#A1306F` (magenta) |
| 5 | `--wm-data-5` | `#6F4FA3` (violet) |
| 6 | `--wm-data-6` | `#4A7CB8` (sky) |
| 7 | `--wm-data-7` | `#D9D1BF` (paper neutral) |

---

## 4. Tipografia

### Famílias

| Família | Fonte | Peso | Papel |
|---|---|---|---|
| **Fraunces** | Variable serif, opsz 9–144 | 300–900 | Display editorial — headlines, KPIs, momentos de impacto |
| **Inter Tight** | Sans-serif | 300–800 | Interface e corpo — texto corrido, botões, formulários |
| **JetBrains Mono** | Monospace | 400–700 | Dado e técnico — kickers, labels, HUDs, métricas |

**Import Google Fonts:**
```html
<link href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300..900;1,9..144,300..900&family=Inter+Tight:wght@300..800&family=JetBrains+Mono:wght@400;500;700&display=swap" rel="stylesheet">
```

### Escala tipográfica

| Token | Valor | Uso |
|---|---|---|
| `--wm-text-6xl` | 128px | Hero máximo, capa |
| `--wm-text-5xl` | 96px | Hero grande |
| `--wm-text-4xl` | 68px | H1 de landing |
| `--wm-text-3xl` | 48px | H1 de seção |
| `--wm-text-2xl` | 36px | H2, subtítulo |
| `--wm-text-xl` | 28px | H3, card title, KPI |
| `--wm-text-lg` | 22px | Lead, lede |
| `--wm-text-md` | 18px | Corpo de leitura |
| `--wm-text-base` | 16px | Corpo padrão de interface |
| `--wm-text-sm` | 14px | Legendas, captions |
| `--wm-text-xs` | 12px | Kickers, labels, mono |
| `--wm-text-2xs` | 11px | HUD, metadata técnica |

### Hierarquia editorial (como combinar)

```
[KICKER — JetBrains Mono, 11–12px, uppercase, teal]
[HEADLINE — Fraunces, 48–96px, weight 350, italic em teal para destaques]
[LEDE — Fraunces, 22px, weight 350, muted]
[CORPO — Inter Tight, 16–18px, weight 400]
[LABEL/DADO — JetBrains Mono, 12px, cor muted ou teal]
```

### Configurações de Fraunces

Para uso display/editorial:
```css
font-variation-settings: "opsz" 144, "SOFT" 20;
font-weight: 350;
letter-spacing: -0.03em;
line-height: 0.95;
```

Para itálico (palavras de impacto):
```css
font-style: italic;
font-variation-settings: "opsz" 144, "SOFT" 100;
font-weight: 300;
color: var(--wm-signal-400);
```

---

## 5. Espaço e grid

### Escala de espaçamento

| Token | Valor |
|---|---|
| `--wm-s-1` | 4px |
| `--wm-s-2` | 8px |
| `--wm-s-3` | 12px |
| `--wm-s-4` | 16px |
| `--wm-s-5` | 24px |
| `--wm-s-6` | 32px |
| `--wm-s-7` | 48px |
| `--wm-s-8` | 64px |
| `--wm-s-9` | 96px |
| `--wm-s-10` | 128px |
| `--wm-s-11` | 160px |

**Regra:** Nunca usar valores de espaço fora da escala em novos componentes. Se parece certo mas não está na escala, mover para o valor mais próximo.

### Grid

- **Container máximo:** 1280px
- **Gutter:** 24px
- **Colunas:** 12 colunas
- **Breakpoints:** mobile < 760px, tablet < 960px, desktop ≥ 960px

### Raios de borda

| Token | Valor | Uso |
|---|---|---|
| `--wm-r-0` | 0 | Elementos sem raio (tabela, divisor) |
| `--wm-r-1` | 2px | Elementos muito pequenos |
| `--wm-r-2` | 4px | Badges, tags, nav items |
| `--wm-r-3` | 8px | Inputs, alerts |
| `--wm-r-4` | 12px | Cards, specimens |
| `--wm-r-5` | 18px | Containers maiores, dashboard |
| `--wm-r-full` | 999px | Botões pill, badges redondos |

---

## 6. Componentes de interface

### Botões

**4 variações:**

```
Primary   → fundo: --fg / texto: --bg        (alta hierarquia, ação principal)
Accent    → fundo: --accent / glow teal      (CTA mais importante da tela — 1 por tela)
Ghost     → transparente / borda --border     (ação secundária)
Link      → sem fundo / borda-bottom em teal  (inline, ação terciária)
```

**Regra:** 1 botão Accent por tela/card. Se há 2 CTAs, o principal é Accent e o secundário é Ghost ou Link.

### Cards

- Fundo: `--bg-raised`
- Borda: `--border`
- Raio: `--wm-r-4`
- Hover: `translateY(-3px)` + `shadow-card` + `border-color: --border-strong`
- Gradient sutil do Accent ao hover (opacity 0→1)

### Badges

- Default: `--fg-muted` com borda `--border-strong`
- Accent: teal com backlground `color-mix(accent 12%, transparent)`
- Warning: amber
- Primary: ink

### Inputs

- Borda: `--border-strong`
- Focus: `border-color: --accent` + `box-shadow: 0 0 0 3px color-mix(accent 25%, transparent)`
- Sem outline nativo — substituir pelo estilo acima

---

## 7. Linguagem visual de dado

### Gráficos e visualizações

- **Usar a paleta de dados categorical** sempre que houver múltiplas séries
- A série principal é sempre `data-1` (teal)
- Linhas mais finas que 1,5px tendem a desaparecer — usar mínimo 2px
- Labels de eixo: JetBrains Mono, 11–12px, cor `--fg-muted`
- Título de gráfico: Fraunces + interTight para subtítulo
- Nunca usar gradiente dentro de barras — clareza sobre efeito

### KPI cards

```
[LABEL — Mono, uppercase, 10–11px, muted]
[VALOR — Fraunces, 28px, weight 450]
[DELTA — Mono, 12px, teal (up) ou red (down), com ícone ▲/▼]
```

### HUDs e readouts técnicos

- Fundo: `color-mix(--bg-raised 80%, transparent)` + backdrop-filter blur
- Borda: `--border`
- Fonte: JetBrains Mono, 10px uppercase
- Cores: label em `--fg-muted`, valor em `--accent`

---

## 8. Motion e animação

### Curvas de easing

| Token | Valor | Uso |
|---|---|---|
| `--wm-ease-standard` | `cubic-bezier(.2,.6,.2,1)` | A maioria das transições |
| `--wm-ease-entrance` | `cubic-bezier(.16,.84,.24,1)` | Elementos que entram na tela |
| `--wm-ease-exit` | `cubic-bezier(.4,0,1,1)` | Elementos que saem |

### Durações

| Token | Valor | Uso |
|---|---|---|
| `--wm-dur-1` | 120ms | Micro-interações (hover state, foco) |
| `--wm-dur-2` | 200ms | Botões, badges, transições de componente |
| `--wm-dur-3` | 320ms | Cards, overlays |
| `--wm-dur-4` | 520ms | Entrada de seção, animações mais longas |

### Padrões de animação aprovados

**Fade up (entrada de conteúdo):**
```css
opacity: 0; transform: translateY(16px);
animation: wmFadeUp 1s ease-entrance forwards;
/* atraso por elemento: d1: 0.08s, d2: 0.18s, d3: 0.3s, d4: 0.45s */
```

**Pulse (indicadores de live/ativo):**
```css
@keyframes wmPulse {
  0%, 100% { opacity: 0.5; transform: scale(1); }
  50%       { opacity: 1;   transform: scale(1.3); }
}
animation: wmPulse 2s ease-standard infinite;
```

**Shimmer em botão accent (CTAs):**
```css
/* Gradient translúcido se move da esquerda para a direita no hover */
transition: transform dur-4 ease-standard;
```

### `prefers-reduced-motion`

**Obrigatório:** quando o sistema do usuário pede menos movimento:
```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation: none !important;
    transition: none !important;
  }
}
```

---

## 9. Aplicações — social media

### Três variações de post aprovadas

| Variação | Fundo | Texto | Uso |
|---|---|---|---|
| **Ink** | `#071524` (Ink-700) | Branco + Signal-300 | Dados críticos, relatórios |
| **Paper** | `#F7F5F0` (Paper-50) | Ink-500 + Signal-500 | Conteúdo editorial, citações |
| **Signal** | `#1DB5A3` (Signal-400) | Ink-900 + Ink-700 | Destaque, lançamento, capa |

### Estrutura de post quadrado (1:1)

```
[Kicker — Mono, 11px, uppercase, opacity 0.8]    → canto superior esq.
[Headline — Fraunces, 28px, max 14ch]            → centro
[Footer — Mono, 10px, opacity 0.7]               → canto inferior
│ esq: wisemetrics.com.br
│ dir: @wisemetrics
```

**Elemento decorativo:** Canvas generativo (SVG ou canvas 2D) com ruído de dados em opacity 0.6, sempre atrás do conteúdo.

### Proporções para diferentes redes

| Rede | Proporção | Uso |
|---|---|---|
| LinkedIn (feed) | 1:1 (1200×1200) | Post padrão |
| LinkedIn (documento/carrossel) | 4:3 (1600×1200) | Slides de metodologia |
| LinkedIn (artigo — cover) | 2:1 (1200×628) | Artigos publicados |
| Instagram (feed) | 1:1 (1080×1080) | Reforço de marca |
| Instagram (stories) | 9:16 (1080×1920) | Lançamentos |

---

## 10. Aplicações — apresentações

### Paleta de slides

**Slide de abertura / capa:**
- Fundo: `#060A12` (bg dark)
- Headline: Fraunces, 68px, ink-100
- Accent em itálico: Signal-400
- Elemento visual: símbolo grande (40–80% do slide) em fundo, opacity 0.05–0.1

**Slide de dados / KPI:**
- Fundo: `#0C121D` (bg-raised dark)
- KPI em Fraunces, 64px
- Label em Mono, 11px, uppercase, muted
- Delta em Mono, 16px, teal ou danger

**Slide de texto / metodologia:**
- Fundo: `#F7F5F0` (Paper) ou `#0C121D` (dark)
- Texto em Inter Tight, 18–22px
- Headline em Fraunces, 36px
- Máximo 120 palavras por slide

**Slide de transição / seção:**
- Fundo: Signal-400 (teal) ou Ink-700
- Número de seção em Mono, 96px, opacity 0.15
- Título da seção em Fraunces, 48px

### Regras de apresentação

- Máximo 1 dado principal por slide — se há 6 números, são 6 slides
- Sem bullet lists de 6 itens — máximo 3, ou transformar em grid visual
- Fonte mínima em tela: 16px (sempre legível a 3 metros)
- Logo no canto inferior direito em variação Dark ou Default — nunca maior que 120px

---

## 11. O que nunca fazer

### Com o logo

- ❌ Alterar as proporções do símbolo
- ❌ Mudar a cor do ponto teal para qualquer outra cor
- ❌ Usar o wordmark sem o ponto final teal
- ❌ Colocar sobre fundo de textura complexa sem área de respiro
- ❌ Adicionar shadow ou efeito glow ao wordmark (só ao símbolo em contextos específicos)
- ❌ Usar o logo em cores fora das variações aprovadas

### Com as cores

- ❌ Usar o Signal teal como cor de fundo de página inteira
- ❌ Usar mais de 1 elemento em teal em destaque por tela
- ❌ Usar Amber como cor de destaque principal (é apenas para alertas / série B)
- ❌ Misturar papel claro e ink escuro no mesmo bloco de fundo (sem separação clara)
- ❌ Usar gradientes de cor nos gráficos de barras

### Com a tipografia

- ❌ Usar Fraunces em body text corrido (cansa com mais de 3–4 linhas)
- ❌ Usar Inter Tight como fonte de display em headlines de impacto
- ❌ Misturar 3 fontes no mesmo bloco de conteúdo
- ❌ Usar letra maiúscula em todo o headline (nunca ALL CAPS em Fraunces no contexto de marca)
- ❌ Usar font-weight abaixo de 300 em Inter Tight (perde legibilidade)

### Com as animações

- ❌ Usar bounce ou spring físico exagerado — não é estilo Wisemetrics
- ❌ Animar mais de 3 elementos simultaneamente na mesma seção
- ❌ Animações em loop constante além de indicators de "live" (pulse, etc.)
- ❌ Ignorar `prefers-reduced-motion`

---

*Wisemetrics · Guia de identidade visual executivo · Abril 2026*  
*Design System completo: `wisemetrics-design-system-v2.html`*  
*Tokens em JSON: seção 17 do Design System*
