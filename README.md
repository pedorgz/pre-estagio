# Pré-Estágio Seguro

Aplicativo web (PWA) de revisão rápida dos procedimentos do Pronto-Socorro para estudantes de Enfermagem em estágio supervisionado. Funciona 100% offline depois do primeiro acesso e pode ser instalado na tela inicial do celular.

> Material de estudo. Não substitui o protocolo da instituição nem a supervisão do enfermeiro/preceptor. Peça para um docente revisar o conteúdo de `js/data.js` antes de divulgar para a turma.

---

## 1. Estrutura de pastas

```
pre-estagio/
├── index.html             # Página única do app
├── manifest.webmanifest   # Nome, ícones e cores para instalar no celular
├── sw.js                  # Service Worker: guarda o app para uso offline
├── css/
│   └── styles.css         # Visual mobile-first, tema claro/escuro
├── js/
│   ├── app.js             # Telas, busca, simulados, progresso, calculadora
│   └── data.js            # TODO o conteúdo clínico (fácil de editar)
└── icons/
    ├── icon-192.png
    ├── icon-512.png
    ├── maskable-512.png   # Ícone adaptável do Android
    └── apple-touch-icon.png
```

Não há `npm install`, build nem dependências externas.

---

## 2. Rodar no computador

O Service Worker só funciona em `http://localhost` ou em `https://`. Abrir o `index.html` com duplo clique (`file://`) não ativa o modo offline.

Escolha **uma** das opções, dentro da pasta `pre-estagio`:

```bash
# Opção A: Python (já vem no Mac/Linux; no Windows instale em python.org)
python -m http.server 8080

# Opção B: Node.js
npx serve -l 8080

# Opção C: VS Code
# Instale a extensão "Live Server" e clique em "Go Live"
```

Abra `http://localhost:8080`.

### Testar o modo offline no computador (Chrome ou Edge)

1. Abra o app e pressione `F12` (DevTools).
2. Aba **Application** → **Service Workers**: deve aparecer `sw.js` como *activated and is running*.
3. Aba **Application** → **Cache storage** → `pes-v1.0.0`: confira os 10 arquivos.
4. Aba **Network** → marque **Offline**.
5. Recarregue a página e navegue: tudo deve funcionar, e o indicador no topo mostra "Offline".
6. Aba **Lighthouse** → categoria **Progressive Web App** (ou "Best practices") → gere o relatório para ver se o app é instalável.

---

## 3. Testar no celular

### Rápido, na mesma rede Wi-Fi (sem offline)

1. Rode o servidor no computador (passo 2).
2. Descubra o IP do computador (`ipconfig` no Windows, `ifconfig` ou `ip a` no Mac/Linux), por exemplo `192.168.0.15`.
3. No celular, acesse `http://192.168.0.15:8080`.

Isso serve para ver o layout. O modo offline **não** ativa porque o endereço não é HTTPS.

### Completo, com offline e instalação (recomendado)

Publique gratuitamente (passo 4) e abra o link HTTPS no celular.

**Android (Chrome):**
1. Abra o link. Na tela inicial do app aparece o botão **Instalar** (ou use o menu ⋮ → *Instalar app*).
2. Abra pelo ícone criado na tela inicial.
3. Ative o modo avião e abra o app de novo: o conteúdo continua disponível.

**iPhone (Safari):**
1. Abra o link no **Safari** (outros navegadores no iPhone não instalam PWA da mesma forma).
2. Toque em **Compartilhar** → **Adicionar à Tela de Início**.
3. Abra pelo ícone, ative o modo avião e teste.

Dica: abra o app uma vez com internet logo após instalar, para garantir que tudo foi baixado.

---

## 4. Publicar (deploy) gratuitamente com HTTPS

### Opção A: Netlify Drop (mais fácil, 2 minutos)

1. Acesse https://app.netlify.com/drop
2. Arraste a pasta `pre-estagio` inteira para a página.
3. Pronto: você recebe um link `https://nome-aleatorio.netlify.app`. Em *Site settings* dá para trocar o nome.

### Opção B: GitHub Pages (bom para a turma colaborar)

1. Crie uma conta em github.com e um repositório público, por exemplo `pre-estagio`.
2. Envie os arquivos: *Add file* → *Upload files* → arraste o **conteúdo** da pasta (não a pasta em si) → *Commit changes*.
3. *Settings* → *Pages* → em *Source* escolha **Deploy from a branch**, branch `main`, pasta `/ (root)` → *Save*.
4. Em 1 a 2 minutos o app estará em `https://SEU-USUARIO.github.io/pre-estagio/`.

Os caminhos do projeto são relativos (`./`), então funciona também em subpastas como a do GitHub Pages.

### Opção C: Vercel ou Cloudflare Pages

Importe o repositório do GitHub e deixe *Build command* vazio e *Output directory* como `/`.

---

## 5. Atualizar o conteúdo

1. Edite os textos em `js/data.js` (categorias, tópicos e simulados).
2. Em `sw.js`, aumente a versão: `const CACHE_VERSION = 'pes-v1.0.1';`
3. Publique de novo.
4. Na próxima vez que o aluno abrir o app com internet, aparece o aviso **"Nova versão do conteúdo disponível"** com o botão **Atualizar**.

Se esquecer o passo 2, os celulares continuam com a versão antiga guardada.

### Formato de um tópico

```js
{
  id: 'meu-topico',            // único, só letras minúsculas, números e hífen
  cat: 'dispositivos',         // id de uma categoria
  titulo: 'Título',
  resumo: 'Uma frase.',
  tags: ['sinônimos', 'para', 'a busca'],
  secoes: [
    { tipo: 'passos', titulo: 'Passo a passo', itens: ['...', '...'] },   // lista numerada
    { tipo: 'lista',  titulo: 'Cuidados', itens: ['...'] },               // marcadores
    { tipo: 'alerta', titulo: 'Atenção', itens: ['...'] },                // caixa vermelha
    { tipo: 'tabela', titulo: 'Referências', linhas: [['Item', 'Valor']] },
    { tipo: 'texto',  titulo: 'Exemplo', texto: '...' },
  ],
}
```

---

## 6. Como o modo offline funciona

| Etapa | O que acontece |
|---|---|
| 1º acesso com internet | `app.js` registra o `sw.js`. No evento `install`, o Service Worker baixa todos os arquivos da lista `PRECACHE` e guarda no Cache Storage do navegador. |
| `activate` | Apaga caches de versões antigas. |
| Acessos seguintes | No evento `fetch`, cada arquivo é entregue **direto do cache** (cache-first), sem depender de rede. Abrir o app devolve sempre o `index.html` guardado. |
| Atualização | O navegador confere o `sw.js` a cada visita online. Se `CACHE_VERSION` mudou, baixa tudo de novo em segundo plano e o app oferece o botão **Atualizar**. |
| Progresso do aluno | Temas revisados, favoritos e notas dos simulados ficam no `localStorage` do aparelho. Nada é enviado para servidor. |

---

## 7. Checklist antes de divulgar

- [ ] Conteúdo revisado por docente/preceptor
- [ ] Teste no Android (Chrome) e no iPhone (Safari)
- [ ] Teste em modo avião depois de instalar
- [ ] Lighthouse sem erros de PWA
- [ ] Link HTTPS divulgado para a turma

## 8. Próximos passos sugeridos

- Mais tópicos: cuidados com dreno de tórax, intubação (papel da enfermagem), transfusão, contenção mecânica, coleta de gasometria.
- Imagens explicativas (salvas em `icons/` ou numa pasta `img/`, e adicionadas à lista `PRECACHE`).
- Se o projeto crescer muito (login, painel do professor, sincronização), migrar para React + Vite com `vite-plugin-pwa` reaproveitando o `data.js`.
