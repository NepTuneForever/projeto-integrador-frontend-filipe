# Elo

Este projeto é um CRM voltado para a gestão de atendimento de farmácias. A proposta é centralizar o cadastro de clientes, o histórico de atendimentos e o acompanhamento de compras recorrentes, facilitando o relacionamento entre a farmácia e seus clientes. O sistema pretende resolver a falta de organização no acompanhamento de clientes, permitindo um atendimento mais ágil e personalizado. O foco inicial é o desenvolvimento do frontend da aplicação.

## Avaliação 1 - José Paulo - 27/08/2026
O repositório atende aos requisitos das atividades.

### Pontos positivos:
- `<header>`, `<main>` (único) e `<footer>` presentes no `index.html`
- UI sofisticada, parece até de produto real
- O link para a ANVISA no formulário de cadastro de cliente é um detalhe muito bom, pois conecta o repositório fictício com algo da realidade.
- Uso de `preconnect` para as fontes do Google é uma otimização muito boa em um frontend.
- `label` e `input` estão corretamente associados via `for`/`id` idênticos (`email`/`email`, `password`/`password`)
- O botão usa `<button type="submit">`, nunca `<div>`/`<span>` sem semântica

### O que faltou:
- O `<video>` em `front.html` usa um único vídeo. Não tem o fallback exigido na aula 4, nem poster e nem atributo `preload` com comentário justificando a escolha como exigido na aula 4.
- O formulário de login tem só **2 campos** (email, senha); o mínimo pedido é 4 campos com tipos semanticamente corretos como exigido na aula 3.
