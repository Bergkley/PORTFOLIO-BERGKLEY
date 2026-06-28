# Portfólio | Bergkley Ferreira Brasil

Portfólio pessoal desenvolvido com HTML, CSS e JavaScript puro para apresentar minha trajetória, habilidades, serviços, tecnologias e projetos em destaque.

O projeto foi modernizado com foco em visual profissional, experiência de usuário, acessibilidade, responsividade e suporte multilíngue.

## Demonstração

- Site: [portfolio-bergkley.netlify.app](https://portfolio-bergkley.netlify.app/)
- GitHub: [@Bergkley](https://github.com/Bergkley)
- LinkedIn: [Bergkley Ferreira Brasil](https://br.linkedin.com/in/bergkley-ferreira-brasil-008680245)

## Recursos

- Layout moderno, responsivo e minimalista.
- Versões em português, inglês e espanhol.
- Tema claro/escuro com preferência salva no navegador.
- Hero section com chamada principal, CTAs e foto de perfil.
- Seções de sobre mim, serviços, habilidades, projetos, experiência, tecnologias e contato.
- Carrossel suave de tecnologias na seção Sobre Mim.
- Filtros para habilidades e projetos.
- Cards de projetos renderizados via JavaScript a partir de uma lista centralizada.
- Modal acessível para detalhes dos projetos.
- Formulário de contato integrado ao FormSubmit.
- Navegação por teclado, foco visível e skip link.
- Animações leves com suporte a `prefers-reduced-motion`.

## Tecnologias

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

## Estrutura

```text
PORTFOLIO-BERGKLEY/
|-- image/          # Imagens, ícones de idioma e capturas dos projetos
|-- index.html      # Versão em português
|-- indexUs.html    # Versão em inglês
|-- indexEs.html    # Versão em espanhol
|-- main.js         # Interações, filtros, projetos, modais e traduções dinâmicas
|-- style.css       # Design system, layout, responsividade e animações
`-- README.md
```

## Como Executar

Este é um projeto estático, então não precisa instalar dependências.

1. Clone o repositório:

```bash
git clone https://github.com/Bergkley/PORTFOLIO-BERGKLEY.git
```

2. Abra a pasta do projeto:

```bash
cd PORTFOLIO-BERGKLEY
```

3. Abra `index.html` no navegador.

Também é possível usar a extensão Live Server no VS Code para uma experiência melhor durante o desenvolvimento.

## Internacionalização

O conteúdo base das páginas está separado em três arquivos:

- `index.html`: português
- `indexUs.html`: inglês
- `indexEs.html`: espanhol

Os textos dinâmicos dos projetos, botões, modais e mensagens do formulário são controlados no objeto `i18n` dentro de `main.js`, detectando o idioma pelo atributo `lang` da página.

## Acessibilidade e UX

O projeto inclui boas práticas como:

- HTML semântico;
- textos alternativos em imagens;
- navegação por teclado;
- foco visível;
- contraste adequado;
- `aria-label`, `aria-live` e modal com comportamento acessível;
- suporte a usuários que preferem reduzir animações.

## Autor

Desenvolvido por **Bergkley Ferreira Brasil**.

- GitHub: [@Bergkley](https://github.com/Bergkley)
- LinkedIn: [Bergkley Ferreira Brasil](https://br.linkedin.com/in/bergkley-ferreira-brasil-008680245)
