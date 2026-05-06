# Changelog - RegiFlex Polish

## [2026-05-05] - Implementação da Seção Conceitual Flux

### Adicionado
- **Novo Componente `RFFluxSection.tsx`**: Implementação completa da seção dedicada ao mascote Flux, tratando-o como uma extensão funcional e conceitual do sistema, não apenas um elemento decorativo.
- **Estados Interativos do Flux**: Adicionado bloco de comportamento que permite ao usuário visualizar os estados reais do sistema através do mascote:
  - **Aguardando**: Fila organizada (estado neutro).
  - **Chamado**: Transição do paciente (estado de movimento).
  - **Em atendimento**: Fluxo ativo (estado de execução).
- **Estrutura de Conteúdo em 3 Camadas**:
  - **Definição**: O Flux como representação do estado em tempo real.
  - **Função**: Tradução visual do fluxo da clínica.
  - **Consequência**: Estabilidade vs. Evidência de fluxo em andamento.
- **Seção de Integração**: Detalhamento de como o Flux conecta o Dashboard da recepção, a TV de espera e a experiência cognitiva do paciente.
- **Navegação**: Adicionado link "Flux" ao Header e Footer para acesso direto à nova seção.

### Alterado
- **`Index.tsx`**: Reordenado para posicionar a seção Flux estrategicamente após "Como funciona" e antes de "Benefícios", permitindo que o usuário entenda o sistema antes de ver sua representação visual.
- **`RFHeader.tsx` & `RFFooter.tsx`**: Atualizados para incluir a nova âncora de navegação `#flux`.

### Design e Regras Visuais
- Implementado com fundo limpo e alto contraste para garantir foco no mascote.
- Uso de `framer-motion` para transições suaves entre estados e animações de entrada.
- Alinhamento rigoroso com a estratégia de marca: evitar tom infantil ou humanização exagerada, focando na utilidade como interface.
