# ⚔️ JS Classificador de Nível de Herói: Descubra o Poder do seu Aventureiro com JavaScript! ✨

[![GitHub last commit](https://img.shields.io/github/last-commit/miriaamaral/JS-Classificador-Nivel-Heroi)](https://github.com/miriaamaral/JS-Classificador-Nivel-Heroi/commits/main)
[![GitHub contributors](https://img.shields.io/github/contributors/miriaamaral/JS-Classificador-Nivel-Heroi)](https://github.com/miriaamaral/JS-Classificador-Nivel-Heroi/graphs/contributors)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

E aí, meu 🐙! Você tem um herói e quer saber qual é o seu nível? 🛡️ Este repositório apresenta a minha solução para o **Desafio da Digital Innovation One (DIO): um Classificador de Nível de Herói** desenvolvido em **JavaScript puro e HTML**!

O objetivo principal deste desafio é utilizar **estruturas condicionais** para apresentar o nível de um herói com base em sua experiência (XP). Dado o número de vitórias e derrotas (ou diretamente a XP, dependendo da sua implementação final) de um herói, o classificador calcula o seu saldo de vitórias e, com base nesse saldo/XP, determina e exibe a sua patente.

Este projeto é uma demonstração clara e prática de conceitos fundamentais da programação:

* **Lógica Condicional (`if/else if/else`):** Como tomar decisões no código.
* **Operadores:** Utilização de operadores matemáticos para cálculos.
* **Variáveis e Tipos de Dados:** Armazenamento e manipulação de informações.
* **Manipulação do DOM (básica):** Exibição dos resultados diretamente na página HTML.

Este script é perfeito para quem está começando a mergulhar no mundo da programação e quer ver a lógica em ação, com um toque de Front-end! Vem descobrir o quão épico é o seu herói! 😉

---

### **✨ Destaques do Classificador e Funcionalidade:**

A funcionalidade central do classificador é utilizar uma estrutura de decisão para apresentar o nível de um herói com base em sua experiência (XP). Os níveis são definidos da seguinte forma:

* **Ferro:** XP < 1.000
* **Bronze:** 1.001 <= XP <= 2.000
* **Prata:** 2.001 <= XP <= 5.000
* **Ouro:** 5.001 <= XP <= 7.000
* **Platina:** 7.001 <= XP <= 8.000
* **Ascendente:** 8.001 <= XP <= 9.000
* **Imortal:** 9.001 <= XP <= 10.000
* **Radiante:** XP >= 10.001

Ao final, o classificador apresenta uma mensagem com o nome do herói e seu nível correspondente diretamente na interface.

Outros destaques incluem:

* **Cálculo de Saldo (se aplicável):** Determina a diferença entre vitórias e derrotas. *(Ajuste se o foco for apenas XP direto)*
* **Patente Dinâmica:** Atribui um nível de herói com base no saldo de vitórias/XP.
* **Estrutura `if/else if/else`:** Implementação clara e didática de múltiplos caminhos de decisão.
* **JavaScript Puro:** Demonstração dos fundamentos da linguagem sem dependências externas.
* **Código Simples e Legível:** Fácil de entender, ideal para estudos e referência.

---

### **💡 Minha Jornada de Desenvolvimento: Lições Aprendidas e Desafios Superados:**

Este foi o meu primeiro desafio da DIO que fiz de forma **totalmente independente**, o que o tornou uma experiência incrivelmente valiosa! No processo, enfrentei alguns desafios para tornar o código funcional, mas nada que uma boa dose de pesquisa e o auxílio da **IA do WhatsApp** como material de consulta e ferramenta de depuração não pudessem resolver. A IA foi crucial para me ajudar a identificar bugs e testar as soluções.

Essa experiência de "mão na massa" me permitiu aprender muito mais sobre:

1.  **Pensamento Lógico e Algorítmico:** Desenvolver um passo a passo claro para resolver o problema de classificação.
2.  **Lógica Condicional (`if/else if/else`):** Aprofundar o entendimento sobre como encadear condições complexas para cobrir todas as faixas de XP e garantir que cada nível de herói seja atribuído corretamente.
3.  **Depuração com Ferramentas de IA:** Uma habilidade prática essencial para encontrar e corrigir erros de forma mais eficiente. A colaboração com a IA me ajudou a entender trechos do código e a testar diferentes cenários.
4.  **Resolução de Problemas e Persistência:** A importância de não desistir diante dos bugs e buscar ativamente por soluções, usando todas as ferramentas disponíveis.
5.  **Integração Básica HTML/JS:** Como fazer o JavaScript interagir com a página HTML para obter dados e exibir resultados.

No final, o projeto deu super certo e ainda consegui personalizar e testar o código! Essa experiência me permitiu aprender mais sobre a resolução de problemas e a importância da persistência no desenvolvimento de software, tornando o conhecimento adquirido ainda mais sólido.

---

### **🚀 Tecnologias Envolvidas:**

* **JavaScript (ES6+):** Linguagem principal utilizada para implementar toda a lógica do classificador, desde o cálculo do saldo/XP até a determinação do nível do herói.
* **HTML5:** Estrutura básica da interface onde o classificador será exibido e interagirá com o usuário.
* **Ferramentas de IA:** Utilização da IA do WhatsApp como recurso de consulta e depuração durante o desenvolvimento.

---

### **⚙️ Como Rodar o Projeto (Localmente):**

Este projeto inclui uma interface HTML, tornando-o fácil de executar diretamente no navegador.

1.  **Clone este repositório:**
    ```bash
    git clone [https://github.com/miriaamaral/JS-Classificador-Nivel-Heroi.git](https://github.com/miriaamaral/JS-Classificador-Nivel-Heroi.git)
    ```
2.  **Entre na pasta do projeto:**
    ```bash
    cd JS-Classificador-Nivel-Heroi
    ```
3.  **Abra o arquivo `index.html` no seu navegador.**
    * Você pode simplesmente arrastar o `index.html` para a janela do navegador. Ou, se preferir uma experiência de desenvolvimento local mais robusta (com live-reload), **abra o repositório no VS Code e execute o arquivo `index.html` com a extensão "Live Server"**, como eu fiz.
    * Interaja diretamente na página HTML para inserir os dados e ver o resultado!

---

### **🤝 Como Contribuir (Opcional):**

Sinta-se à vontade para explorar o código, sugerir melhorias na lógica, novas patentes, adicionar mais funcionalidades na interface HTML, ou correções de bugs! Toda contribuição é bem-vinda e apreciada! ✨

Para contribuir:

1.  Faça um `fork` deste repositório.
2.  Crie uma nova `branch` para sua feature (`git checkout -b feature/nova-patente`).
3.  Faça suas alterações e `commit` as mudanças (`git commit -m 'feat: adicao de nova patente'`).
4.  Envie para sua `branch` (`git push origin feature/nova-patente`).
5.  Abra um `Pull Request` detalhando suas alterações.

Vamos juntos construir o futuro da tecnologia e nivelar muitos heróis! 🚀💻

---

### **📝 Licença:**

Este projeto está sob a licença MIT.

---

### **Conecte-se Comigo! 👋**

Gostou do Classificador, tem ideias para aprimorá-lo, ou quer trocar uma ideia sobre JavaScript, lógica de programação e desafios? Ficarei super feliz!

* **LinkedIn:** [https://www.linkedin.com/in/miriaamaralcs](https://www.linkedin.com/in/miriaamaralcs)
* **GitHub:** [https://github.com/miriaamaral](https://github.com/miriaamaral)
* **Plataforma de Estudos (DIO):** [https://www.dio.me/sign-up?ref=6F1F401485F9459BA6AC879FEA95D1B5](https://www.dio.me/sign-up?ref=6F1F401485F9459BA6AC879FEA95D1B5)

Vamos juntos construir o futuro da tecnologia (e alcançar o nível Radiante)! ✨

---
