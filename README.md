# RegiFlex Landing Page

Landing page institucional e comercial do RegiFlex, um SaaS para clínicas e consultórios que digitaliza o check-in de pacientes, organiza filas de atendimento e melhora o fluxo operacional da recepção.

## Objetivo

Apresentar o RegiFlex como uma solução moderna para recepções clínicas, mantendo os requisitos acadêmicos do projeto:

- apresentação do produto;
- problema e solução;
- funcionalidades e diferenciais;
- público-alvo;
- Flux, mascote e identidade visual;
- sobre a startup;
- missão, visão e valores;
- equipe e organograma;
- contato e CTA final.

## Stack

- React
- TypeScript
- Vite
- Tailwind CSS
- shadcn/ui
- Lucide React
- Framer Motion

## Como Rodar

```bash
npm install
npm run dev
```

O projeto ficará disponível em `http://localhost:5173`.

## Scripts

```bash
npm run dev       # inicia o servidor local
npm run build     # gera build de produção
npm run preview   # visualiza o build
npm run lint      # executa lint
npm run test      # executa testes
```

## Estrutura da Página

1. Hero
2. Problema
3. Solução
4. Como funciona
5. Funcionalidades
6. Diferenciais
7. Público-alvo
8. Sobre o RegiFlex
9. Missão, Visão e Valores
10. Equipe e Organograma
11. Contato
12. CTA final

## Produto

O RegiFlex ajuda clínicas médicas, odontológicas, psicológicas, fisioterapêuticas, estéticas e consultórios especializados a reduzir retrabalho na recepção por meio de:

- check-in via QR Code;
- cadastro digital;
- gestão de filas;
- dashboard operacional;
- TV display;
- relatórios;
- controle de pacientes;
- fluxo visual com apoio do Flux.

## Desenvolvimento

Os componentes principais ficam em:

```text
src/components/regiflex
```

A composição da landing fica em:

```text
src/pages/Index.tsx
```

## Build

```bash
npm run build
```

O resultado de produção é gerado na pasta `dist`.
