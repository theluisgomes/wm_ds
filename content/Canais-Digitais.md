# Wisemetrics — Canais Digitais

> Estratégia de presença digital: site, LinkedIn, SEO e newsletter.  
> Princípio: cada canal tem um papel único — não replicamos o mesmo conteúdo em todo lugar.

---

## Índice

1. [Arquitetura de canais](#1-arquitetura-de-canais)
2. [Site — wisemetrics.com.br](#2-site--wisemetricscomebr)
3. [LinkedIn](#3-linkedin)
4. [Newsletter — Wisemetrics Weekly](#4-newsletter--wisemetrics-weekly)
5. [SEO e conteúdo orgânico](#5-seo-e-conteúdo-orgânico)
6. [Ferramentas e stack](#6-ferramentas-e-stack)
7. [Rastreamento e métricas](#7-rastreamento-e-métricas)

---

## 1. Arquitetura de canais

```
TOPO DE FUNIL (awareness)
├── LinkedIn (feed editorial)
├── Newsletter (curadoria semanal)
├── SEO (páginas de categoria + blog analítico)
└── Consumer Pulse Report (isca de autoridade)

MEIO DE FUNIL (consideração)
├── Site — /insights (artigos longos, cases)
├── Site — /servicos (proposta de valor detalhada)
├── Webinar mensal
└── LinkedIn (carrosséis de metodologia)

FUNDO DE FUNIL (decisão)
├── Site — /contato + /cases
├── Proposta comercial (PDF)
├── Referral e indicação
└── Advisory call (1:1)
```

**Regra de ouro:** O site é o destino. Todos os canais apontam para ele ou nutrem relacionamento.

---

## 2. Site — wisemetrics.com.br

### Arquitetura de informação

```
/ (Home)
│
├── /sobre
│   ├── Quem somos (narrativa, não lista de bullets)
│   ├── Manifesto (por que existimos)
│   └── Time
│
├── /servicos
│   ├── Intelligence (consumer pulse, brand health, competitive)
│   ├── Analytics (segmentação, atribuição, churn)
│   ├── Product Research (concept testing, UX sprint, pricing)
│   └── Advisory (insight sprint, embedded, treinamento)
│
├── /casos
│   ├── [Case 1: Varejo — segmentação antes do lançamento]
│   ├── [Case 2: Saúde — reposicionamento baseado em dado]
│   └── [Case N: ...]
│
├── /insights
│   ├── Consumer Pulse Report (download com cadastro)
│   ├── Blog analítico (artigos longos, metodologia aberta)
│   └── Arquivo de "Leitura de número"
│
├── /newsletter (landing de inscrição)
│
└── /contato
```

### Princípios de UX e copy do site

**Tom:** Editorial e preciso. Cada página tem 1 hipótese central, não 3 benefícios genéricos.

**Hero da home:**
```
Headline:    "Leitura de consumidor que chega antes da planilha."
Subheadline: "Medimos padrão de comportamento. Entregamos hipótese
              estratégica. O dado que orienta a reunião de board."
CTA primário: "Ver como trabalhamos →"
CTA secundário: "Baixar Consumer Pulse Report"
```

**Regras de copy:**
- Sem "[Empresa] é uma empresa de..." — mostrar, não dizer
- Sem bullet list de 6 itens genéricos ("✓ Rigoroso ✓ Ágil ✓ Orientado a dados")
- Com dado real na página: "Analisamos X marcas, Y respondentes, Z categorias até hoje"
- Provas concretas: case com número, não depoimento vago

### Identidade visual no site

Seguir o Design System v0.2 fielmente. Referência canônica: **`→ Identidade-Visual-Guia.md`**.

### Performance

- Lighthouse score ≥ 90 (Performance, Acessibilidade, SEO)
- LCP < 2,5s em mobile
- CLS < 0,1
- Imagens: WebP, lazy-load, alt descritivo

---

## 3. LinkedIn

### Posicionamento do canal

LinkedIn é o canal principal de B2B da Wisemetrics. É onde o ICP (CMOs, CPOs, heads de dados) passa tempo profissional. É onde a autoridade de marca se constrói dia a dia.

**Regra:** Nenhum post genérico de "aprenda 5 dicas para usar dados". Toda publicação tem um ponto de vista analítico + dado específico + implicação prática.

### Perfis e página

| Ativo | Papel | Frequência |
|---|---|---|
| **Página Wisemetrics** | Conteúdo institucional, relatórios, cases | 3–4 posts/semana |
| **Perfil do(s) fundador(es)** | Leituras pessoais, thread analítica, bastidores | 2–3 posts/semana |
| **Comentários estratégicos** | Participar de debates de mercado com opinião embasada | Diário |

### Formatos por objetivo

| Formato | Objetivo | Frequência |
|---|---|---|
| **Leitura de número** | Awareness + engajamento | 2x por semana |
| **Carrossel de metodologia** | Consideração + autoridade | 1x por semana |
| **Dado do Consumer Pulse** | Lead generation (link para relatório) | 1x por quinzena |
| **Thread analítica (fundador)** | Relacionamento + alcance pessoal | 1x por semana |
| **Case study (resumo)** | Conversão + prova social | 1x por mês |

### Estrutura de um "Leitura de número" (template)

```
[Dado específico com fonte e período]

[Linha de contexto — o que isso significa]

[Hipótese: por que isso está acontecendo]

[Implicação para empresas desse setor]

[CTA sutil ou pergunta aberta para engajamento]

#wisemetrics #consumidor #[categoria]
```

**Exemplo:**
```
O ticket médio do e-commerce de saúde cresceu 23% em Q1 2026
(vs. Q1 2025, ABCOMM).

Não é inflação — a cesta está mudando.

A hipótese: consumidores estão migrando de itens de conveniência
para produtos de rotina preventiva. Fitofármacos, suplementos e
monitores de saúde pessoal concentram o crescimento.

Para marcas de saúde: a comunicação de custo-benefício funciona
menos do que a de rotina e comprometimento.

O dado diz qual categoria cresce. A pergunta é: o que está
mudando na mentalidade do comprador?

#wisemetrics #ecommerce #saude #consumidor
```

### Gestão e publicação

- Ferramentas: Later ou Buffer para agendamento
- Aprovação: todo post da página passa por revisão antes de publicar
- Monitoramento: relatório semanal de alcance, engajamento e leads gerados

---

## 4. Newsletter — Wisemetrics Weekly

### Conceito

A newsletter mais analítica sobre consumidor e mercado no Brasil. Semanal, toda quinta-feira.

Não é curadoria de links. É leitura proprietária: escolhemos 1 dado, analisamos, contextualizamos e entregamos implicação prática.

### Estrutura de cada edição

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
WISEMETRICS WEEKLY — Nº XX · [data]
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

[ABERTURA]
1–2 parágrafos de contexto editorial.
Tom: conversa com um colega analítico.

[O NÚMERO]
Um dado específico, com fonte, período, base amostral.
Máximo 1 número por edição — o número certo, não vários.

[A LEITURA]
Por que esse número é interessante.
Hipótese de causa. Hipótese de consequência.
Comparações quando relevantes.

[TRÊS PONTOS]
1. [Implicação para empresas de X]
2. [Implicação para empresas de Y]
3. [Pergunta que fica em aberto]

[PARA APROFUNDAR]
2–3 links de fontes primárias (não artigos de blog).
Leitura recomendada da semana (livro, paper, relatório).

[FECHAMENTO]
1 frase. Com voz.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

### Crescimento da base

| Estratégia | Fase | Impacto esperado |
|---|---|---|
| Rede pessoal dos fundadores (convite direto) | 1 | 200 assinantes |
| Post no LinkedIn com link de inscrição | Recorrente | +50/semana (meses 1–3) |
| Consumer Pulse Report (cadastro obrigatório) | 1 | +300 na semana de lançamento |
| Parcerias de newsletter (cross-promo) | 2 | +100–200 por parceria |
| Webinar (inscrição cadastra na newsletter) | 2 | +80–150 por edição |
| SEO (landing /newsletter otimizada) | 2–3 | +30–80/mês (gradual) |

### KPIs da newsletter

| Métrica | Benchmark referência | Meta 6m | Meta 12m |
|---|---|---|---|
| Taxa de abertura | 25–35% (B2B) | 42% | 45% |
| CTR (cliques únicos) | 3–5% | 6% | 8% |
| Taxa de cancelamento | < 1%/envio | < 0,5% | < 0,5% |
| Assinantes | — | 800 | 2.500 |

### Plataforma recomendada

**Beehiiv** (plataforma principal) — by reference and analytics; permite monetização futura.  
Alternativas: Substack (mais distribuição orgânica), Ghost (mais controle).

---

## 5. SEO e conteúdo orgânico

### Estratégia geral

SEO não é canais de topo de funil para a Wisemetrics no curto prazo — é investimento de 9–18 meses. Mas começar cedo é mandatório.

**Abordagem:** Pillar pages por linha de serviço + cluster de conteúdo analítico por categoria de mercado.

### Estrutura de palavras-chave

**Tier 1 — Intenção de compra (fundo de funil):**
- "consultoria de pesquisa de consumidor"
- "empresas de consumer insights brasil"
- "pesquisa de mercado qualitativa e quantitativa"
- "analytics de comportamento de consumidor"

**Tier 2 — Problema/solução (meio de funil):**
- "como segmentar audiência de clientes"
- "análise de churn de clientes"
- "como fazer teste de conceito de produto"
- "brand health tracking"

**Tier 3 — Informacional (topo de funil / educação):**
- "o que é consumer insights"
- "diferença entre pesquisa qualitativa e quantitativa"
- "como interpretar dados de nps"
- "van westendorp price sensitivity"

### Calendário editorial do blog

**Frequência:** 2 artigos por mês (longo, > 1.500 palavras)

| Tipo | Exemplo | Objetivo SEO |
|---|---|---|
| **Guia metodológico** | "Como conduzir um Insight Sprint em 5 dias" | Tier 2 + autoridade |
| **Análise de categoria** | "Comportamento do consumidor de saúde em 2026" | Tier 2 + lead |
| **Conceito explicado** | "O que é Media Mix Modeling e quando usar" | Tier 3 + nutrição |
| **Case com dado** | "Como uma empresa de varejo descobriu seu segmento oculto" | Tier 1 + conversão |

### On-page e técnico

- Meta title e description únicos por página
- Schema markup: Organization, Article, FAQ
- Internal linking estruturado (pillar → cluster)
- Imagens com alt descritivo (JetBrains Mono para dados visuais, sem imagens decorativas sem sentido)
- Core Web Vitals como critério de desenvolvimento desde o início

---

## 6. Ferramentas e stack

| Categoria | Ferramenta(s) | Custo estimado/mês |
|---|---|---|
| **CRM** | HubSpot (Starter) ou Pipedrive | R$ 300–600 |
| **Newsletter** | Beehiiv ou Ghost | R$ 100–300 |
| **Publicação social** | Later ou Buffer | R$ 150–300 |
| **Analytics do site** | Google Analytics 4 + Hotjar Observe | R$ 0–200 |
| **SEO** | Ahrefs (Lite) ou Semrush | R$ 500–900 |
| **Webinar** | Zoom Webinars ou Butter | R$ 200–500 |
| **Design** | Figma + Design System Wisemetrics | R$ 100 |
| **Automação de marketing** | HubSpot ou ActiveCampaign | R$ 300–600 |
| **Total estimado** | | **R$ 1.650–3.400/mês** |

---

## 7. Rastreamento e métricas

### Eventos de conversão no site (GA4)

| Evento | Trigger |
|---|---|
| `generate_lead` | Preenchimento de formulário /contato |
| `report_download` | Download do Consumer Pulse (com cadastro) |
| `newsletter_subscribe` | Inscrição na newsletter |
| `proposal_request` | Clique em "Solicitar proposta" |
| `case_view` | Acesso a /casos/[slug] |

### Dashboard semanal de canais

Relatório interno toda segunda-feira:

```
SITE
  - Sessões (semana / mês / YoY)
  - Taxa de conversão para lead
  - Top 5 páginas e páginas de saída

LINKEDIN
  - Alcance total
  - Impressões por formato
  - Cliques para o site
  - Novos seguidores
  - Leads gerados (formulário lead gen LinkedIn)

NEWSLETTER
  - Taxa de abertura (vs. edição anterior)
  - CTR
  - Novos assinantes / cancelamentos
  - Cliques para site ou lead

SEO
  - Posição média (Google Search Console)
  - Cliques orgânicos
  - Páginas na primeira página
```

### North Star Metric por canal

| Canal | North Star Metric |
|---|---|
| Site | Leads qualificados/mês (formulário de contato + download com cadastro) |
| LinkedIn | Conversas de discovery iniciadas via LinkedIn |
| Newsletter | Taxa de abertura mantida acima de 40% |
| SEO | Tráfego orgânico para páginas de serviço |

---

*Wisemetrics · Estratégia de canais digitais · Abril 2026*
