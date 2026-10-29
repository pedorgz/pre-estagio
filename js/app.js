/* =========================================================
   Pré-Estágio Seguro — App
   JavaScript puro (ES2020+), sem dependências.
   Rotas por hash: #inicio, #buscar, #simulados, #progresso,
   #calculadora, #cat-<id>, #t-<id>
   ========================================================= */

import { CATEGORIAS, TOPICOS, SIMULADOS, VITAIS_REF, CONTENT_VERSION } from './data.js';

/* ---------- Ícones (SVG inline: funcionam offline) ---------- */
const svg = (d, extra = '') =>
  `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" ${extra}>${d}</svg>`;

const ICON = {
  pulse: svg('<path d="M3 12h4l2-6 4 12 2-6h6"/>'),
  tube: svg('<path d="M6 3v7a4 4 0 0 0 8 0V7a2 2 0 0 1 4 0v14"/><circle cx="6" cy="3" r="0.5"/><path d="M15 21h6"/>'),
  pill: svg('<rect x="2.5" y="8.5" width="19" height="7" rx="3.5" transform="rotate(-45 12 12)"/><path d="m8.5 8.5 7 7"/>'),
  drip: svg('<path d="M8 2h8v6a4 4 0 0 1-8 0z"/><path d="M12 12v4"/><path d="M12 16c0 3 3 3 3 5"/><path d="M10 5h4"/>'),
  bandage: svg('<rect x="2" y="7.5" width="20" height="9" rx="4.5" transform="rotate(-45 12 12)"/><path d="M10 10h.01M14 10h.01M10 14h.01M14 14h.01"/>'),
  notes: svg('<path d="M6 3h9l4 4v14H6z"/><path d="M14 3v5h5"/><path d="M9 12h7M9 16h5"/>'),
  heart: svg('<path d="M12 20s-7-4.4-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.6-7 10-7 10z"/>'),
  ribbon: svg('<path d="M12 3a4 4 0 0 0-4 4c0 3 4 7 4 7s4-4 4-7a4 4 0 0 0-4-4z"/><path d="m10 12-4 9 3-1 2 2 1.5-6M14 12l4 9-3-1-2 2-1.5-6"/>'),
  ecg: svg('<path d="M12 20s-7-4.4-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.6-7 10-7 10z"/><path d="M7 11h3l1-2 2 4 1-2h3"/>'),
  body: svg('<circle cx="12" cy="4.5" r="2"/><path d="M5 9h14"/><path d="M12 9v6"/><path d="m9 22 3-7 3 7"/>'),
  siren: svg('<path d="M7 18v-6a5 5 0 0 1 10 0v6"/><path d="M5 18h14v3H5z"/><path d="M12 3v2M4.2 6.2l1.4 1.4M19.8 6.2l-1.4 1.4"/>'),
  home: svg('<path d="M3 11 12 4l9 7"/><path d="M5 10v10h14V10"/>'),
  search: svg('<circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/>'),
  quiz: svg('<rect x="5" y="3" width="14" height="18" rx="2"/><path d="M9 3v2h6V3"/><path d="m9 13 2 2 4-4"/>'),
  chart: svg('<path d="M4 20V10M10 20V4M16 20v-7M22 20H2"/>'),
  calc: svg('<rect x="5" y="2.5" width="14" height="19" rx="2"/><path d="M8 7h8M8 12h.01M12 12h.01M16 12h.01M8 16h.01M12 16h.01M16 16h.01"/>'),
  back: svg('<path d="m15 18-6-6 6-6"/>'),
  chev: svg('<path d="m9 18 6-6-6-6"/>'),
  check: svg('<path d="M20 6 9 17l-5-5"/>'),
  checkCircle: svg('<circle cx="12" cy="12" r="9"/><path d="m8 12 3 3 5-6"/>'),
  alert: svg('<path d="M12 3 2 20h20L12 3z"/><path d="M12 10v4M12 17h.01"/>'),
  star: svg('<path d="m12 3 2.8 5.7 6.2.9-4.5 4.4 1 6.2L12 17.3 6.5 20.2l1-6.2L3 9.6l6.2-.9z"/>'),
  starFill: svg('<path fill="currentColor" d="m12 3 2.8 5.7 6.2.9-4.5 4.4 1 6.2L12 17.3 6.5 20.2l1-6.2L3 9.6l6.2-.9z"/>'),
  download: svg('<path d="M12 3v12M7 10l5 5 5-5M5 21h14"/>'),
  sun: svg('<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/>'),
};

/* ---------- Armazenamento local (progresso do aluno) ---------- */
const STORE_KEY = 'pes:estado:v1';
const QUIZ_SIZE = 10; // questões sorteadas por rodada
const defaultState = () => ({ revisados: {}, favoritos: [], quiz: { melhorPct: null, tentativas: 0, ultima: null }, tema: 'auto' });

function loadState() {
  try {
    const raw = localStorage.getItem(STORE_KEY);
    if (!raw) return defaultState();
    const st = { ...defaultState(), ...JSON.parse(raw) };
    // migração da versão 1.0 (guardava acertos em 12 questões)
    if (st.quiz && st.quiz.melhorPct === undefined) {
      st.quiz.melhorPct = typeof st.quiz.melhor === 'number' ? Math.round((st.quiz.melhor / 12) * 100) : null;
    }
    return st;
  } catch {
    return defaultState();
  }
}
let state = loadState();
function saveState() {
  try { localStorage.setItem(STORE_KEY, JSON.stringify(state)); } catch { /* armazenamento indisponível: segue só em memória */ }
}

/* ---------- Utilidades ---------- */
const $ = (sel, root = document) => root.querySelector(sel);
const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const norm = (s) => String(s).normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
const topicById = (id) => TOPICOS.find((t) => t.id === id);
const catById = (id) => CATEGORIAS.find((c) => c.id === id);
const topicsOf = (catId) => TOPICOS.filter((t) => t.cat === catId);
const isRevisado = (id) => Boolean(state.revisados[id]);
const isFav = (id) => state.favoritos.includes(id);

function toast(msg, action) {
  const el = $('#toast');
  el.innerHTML = `<span>${esc(msg)}</span>${action ? `<button type="button">${esc(action.label)}</button>` : ''}`;
  if (action) $('button', el).addEventListener('click', () => { action.onClick(); el.classList.remove('show'); });
  el.classList.add('show');
  clearTimeout(toast.t);
  toast.t = setTimeout(() => el.classList.remove('show'), action ? 8000 : 2600);
}

/* ---------- Texto pesquisável de cada tópico ---------- */
const searchIndex = TOPICOS.map((t) => {
  const partes = [t.titulo, t.resumo, ...(t.tags || []), catById(t.cat)?.nome || ''];
  t.secoes.forEach((s) => {
    partes.push(s.titulo || '');
    (s.itens || []).forEach((i) => partes.push(i));
    (s.linhas || []).forEach((l) => partes.push(l.join(' ')));
    if (s.texto) partes.push(s.texto);
  });
  return { id: t.id, titulo: norm(t.titulo), tags: norm((t.tags || []).join(' ')), corpo: norm(partes.join(' ')) };
});

function buscar(q) {
  const termos = norm(q).split(/\s+/).filter(Boolean);
  if (!termos.length) return [];
  return searchIndex
    .map((d) => {
      let score = 0;
      for (const termo of termos) {
        if (!d.corpo.includes(termo)) return null;
        if (d.titulo.includes(termo)) score += 5;
        if (d.tags.includes(termo)) score += 3;
        score += 1;
      }
      return { id: d.id, score };
    })
    .filter(Boolean)
    .sort((a, b) => b.score - a.score)
    .map((r) => topicById(r.id));
}

/* ---------- Componentes ---------- */
function topicItem(t) {
  return `<li><a class="topic-link" href="#t-${t.id}">
    <span class="t-text"><strong>${esc(t.titulo)}</strong><small>${esc(t.resumo)}</small></span>
    ${isRevisado(t.id) ? `<span class="badge-ok" title="Revisado">${ICON.checkCircle}<span class="sr-only">Revisado</span></span>` : ''}
    <span class="chev">${ICON.chev}</span>
  </a></li>`;
}

function renderSecao(s) {
  switch (s.tipo) {
    case 'passos':
      return `<section class="block"><h3>${esc(s.titulo)}</h3><ol class="steps">${s.itens.map((i) => `<li>${esc(i)}</li>`).join('')}</ol></section>`;
    case 'lista':
      return `<section class="block"><h3>${esc(s.titulo)}</h3><ul class="bullets">${s.itens.map((i) => `<li>${esc(i)}</li>`).join('')}</ul></section>`;
    case 'alerta':
      return `<section class="block alert" role="note"><h3>${ICON.alert}${esc(s.titulo)}</h3><ul class="bullets">${s.itens.map((i) => `<li>${esc(i)}</li>`).join('')}</ul></section>`;
    case 'tabela':
      return `<section class="block"><h3>${esc(s.titulo)}</h3><table class="ref-table"><tbody>${s.linhas.map(([a, b]) => `<tr><th scope="row">${esc(a)}</th><td>${esc(b)}</td></tr>`).join('')}</tbody></table></section>`;
    case 'cores':
      return `<section class="block"><h3>${esc(s.titulo)}</h3><ul class="triage">${s.linhas.map(([cor, nome, tempo]) => `<li><span class="sw ${cor}" aria-hidden="true"></span><span><strong>${esc(nome)}</strong><small>${esc(cor[0].toUpperCase() + cor.slice(1))}</small></span><em>${esc(tempo)}</em></li>`).join('')}</ul></section>`;
    case 'texto':
      return `<section class="block"><h3>${esc(s.titulo)}</h3><p style="margin:0">${esc(s.texto)}</p></section>`;
    default:
      return '';
  }
}

const backLink = (href, label) => `<a class="back" href="${href}">${ICON.back}${esc(label)}</a>`;

/* ---------- Telas ---------- */
const views = {
  inicio() {
    const total = TOPICOS.length;
    const feitos = TOPICOS.filter((t) => isRevisado(t.id)).length;
    const favs = state.favoritos.map(topicById).filter(Boolean);
    return `
      <section class="hero">
        <h2>O que você vai revisar hoje?</h2>
        <p>Resumos dos procedimentos do Pronto-Socorro, disponíveis mesmo sem internet.</p>
        <form class="search" role="search" id="home-search">
          ${ICON.search}
          <label for="q-home" class="sr-only">Buscar procedimento</label>
          <input id="q-home" type="search" placeholder="Ex.: sonda, PCR, gotejamento" autocomplete="off" enterkeyhint="search">
        </form>
        <div class="vitals" aria-label="Sinais vitais de referência no adulto">
          ${VITAIS_REF.map((v) => `<div class="vital"><b>${esc(v.sigla)}</b><span>${esc(v.valor)}</span><small>${esc(v.unidade)}</small></div>`).join('')}
        </div>
      </section>

      ${favs.length ? `<h2 class="section-title">Seus favoritos</h2><ul class="topic-list">${favs.map(topicItem).join('')}</ul>` : ''}

      <h2 class="section-title">Temas</h2>
      <div class="cat-list">
        ${CATEGORIAS.map((c) => {
          const lista = topicsOf(c.id);
          const ok = lista.filter((t) => isRevisado(t.id)).length;
          return `<a class="cat-item" href="#cat-${c.id}">
            <span class="cat-icon">${ICON[c.icon] || ICON.notes}</span>
            <span><h3>${esc(c.nome)}</h3><p>${esc(c.desc)}</p></span>
            <span class="count ${ok === lista.length ? 'check' : ''}" aria-label="${ok} de ${lista.length} revisados">${ok}/${lista.length}</span>
          </a>`;
        }).join('')}
      </div>

      <h2 class="section-title">Ferramentas</h2>
      <div class="tools">
        <a class="tool" href="#simulados">${ICON.quiz}<strong>Simulados</strong><span>${QUIZ_SIZE} casos por rodada</span></a>
        <a class="tool" href="#calculadora">${ICON.calc}<strong>Gotejamento</strong><span>Calcule gotas e mL/h</span></a>
      </div>

      <div id="install-slot"></div>

      <p class="disclaimer">Você revisou ${feitos} de ${total} temas. Material de estudo: siga sempre o protocolo da instituição e a orientação do preceptor.</p>
    `;
  },

  buscar() {
    return `
      <div class="page-head"><h2>Buscar</h2></div>
      <form class="search on-page" role="search" id="page-search">
        ${ICON.search}
        <label for="q-page" class="sr-only">Buscar procedimento</label>
        <input id="q-page" type="search" placeholder="Procedimento, sintoma ou medicação" autocomplete="off" enterkeyhint="search" value="${esc(ui.query)}">
      </form>
      <div id="results"></div>
    `;
  },

  categoria(id) {
    const c = catById(id);
    if (!c) return views.naoEncontrado();
    return `
      ${backLink('#inicio', 'Início')}
      <div class="page-head"><h2>${esc(c.nome)}</h2><p>${esc(c.desc)}</p></div>
      <ul class="topic-list">${topicsOf(id).map(topicItem).join('')}</ul>
      ${id === 'medicacoes' ? `<div class="tools" style="margin-top:12px"><a class="tool" href="#calculadora">${ICON.calc}<strong>Calculadora de gotejamento</strong><span>Macro, micro e mL/h</span></a></div>` : ''}
    `;
  },

  topico(id) {
    const t = topicById(id);
    if (!t) return views.naoEncontrado();
    const c = catById(t.cat);
    const feito = isRevisado(id);
    return `
      ${backLink(`#cat-${c.id}`, c.nome)}
      <div class="page-head"><h2>${esc(t.titulo)}</h2><p>${esc(t.resumo)}</p></div>
      ${t.secoes.map(renderSecao).join('')}
      ${t.calculadora ? `<a class="btn" href="#calculadora" style="width:100%">${ICON.calc}Abrir calculadora</a>` : ''}
      <div class="actions">
        <button type="button" class="btn ${feito ? 'done' : 'primary'}" data-action="revisar" data-id="${id}">
          ${feito ? `${ICON.check}Revisado` : 'Marcar como revisado'}
        </button>
        <button type="button" class="btn icon-only ${isFav(id) ? 'on' : ''}" data-action="favoritar" data-id="${id}" aria-pressed="${isFav(id)}" aria-label="${isFav(id) ? 'Remover dos favoritos' : 'Adicionar aos favoritos'}">
          ${isFav(id) ? ICON.starFill : ICON.star}
        </button>
      </div>
      <p class="disclaimer">Material de estudo. Não substitui o protocolo institucional nem a supervisão do enfermeiro.</p>
    `;
  },

  simulados() {
    const q = ui.quiz;
    if (!q) {
      const m = state.quiz.melhorPct;
      return `
        <div class="page-head"><h2>Simulados</h2><p>A cada rodada, ${QUIZ_SIZE} casos fictícios sorteados entre ${SIMULADOS.length}, com explicação de cada resposta.</p></div>
        ${m !== null ? `<div class="stat-grid" style="margin-bottom:16px"><div class="stat"><b>${m}%</b><span>Melhor resultado</span></div><div class="stat"><b>${state.quiz.tentativas}</b><span>Tentativas</span></div></div>` : ''}
        <button type="button" class="btn primary" style="width:100%" data-action="quiz-iniciar">Começar simulado</button>
      `;
    }
    if (q.i >= q.ordem.length) {
      const pct = Math.round((q.acertos / q.ordem.length) * 100);
      const msg = pct >= 80 ? 'Ótimo domínio do conteúdo.' : pct >= 60 ? 'Bom caminho. Revise os temas que errou.' : 'Vale revisar os resumos antes de tentar de novo.';
      const errados = q.erros.map(topicById).filter(Boolean);
      const unicos = [...new Map(errados.map((t) => [t.id, t])).values()];
      return `
        <div class="score"><div class="big">${q.acertos}/${q.ordem.length}</div><p>${msg}</p></div>
        ${unicos.length ? `<h2 class="section-title">Revise estes temas</h2><ul class="topic-list">${unicos.map(topicItem).join('')}</ul>` : ''}
        <div class="actions"><button type="button" class="btn primary" data-action="quiz-iniciar">Refazer simulado</button></div>
      `;
    }
    const item = SIMULADOS[q.ordem[q.i]];
    const respondeu = q.resposta !== null;
    const letras = ['A', 'B', 'C', 'D', 'E'];
    return `
      <div class="quiz-count">Questão ${q.i + 1} de ${q.ordem.length}</div>
      <div class="quiz-progress" aria-hidden="true"><span style="width:${(q.i / q.ordem.length) * 100}%"></span></div>
      <div class="case"><p>${esc(item.caso)}</p></div>
      <p class="question">${esc(item.pergunta)}</p>
      <div class="options" role="group" aria-label="Alternativas">
        ${item.opcoes.map((op, idx) => {
          let cls = '';
          if (respondeu && idx === item.correta) cls = 'correct';
          else if (respondeu && idx === q.resposta) cls = 'wrong';
          return `<button type="button" class="option ${cls}" data-action="quiz-responder" data-idx="${idx}" ${respondeu ? 'disabled' : ''}><span class="letter">${letras[idx]}</span><span>${esc(op)}</span></button>`;
        }).join('')}
      </div>
      ${respondeu ? `
        <div class="feedback ${q.resposta === item.correta ? 'ok' : 'no'}" role="status">
          <strong>${q.resposta === item.correta ? 'Resposta correta' : 'Resposta incorreta'}</strong>
          ${esc(item.explicacao)}
          ${topicById(item.topico) ? ` <a href="#t-${item.topico}">Rever: ${esc(topicById(item.topico).titulo)}</a>` : ''}
        </div>
        <div class="actions"><button type="button" class="btn primary" data-action="quiz-proxima">${q.i + 1 < q.ordem.length ? 'Próxima questão' : 'Ver resultado'}</button></div>
      ` : ''}
    `;
  },

  progresso() {
    const total = TOPICOS.length;
    const feitos = TOPICOS.filter((t) => isRevisado(t.id)).length;
    const pct = Math.round((feitos / total) * 100);
    const pendentes = TOPICOS.filter((t) => !isRevisado(t.id));
    return `
      <div class="page-head"><h2>Meu progresso</h2><p>Fica salvo só neste aparelho.</p></div>
      <section class="block">
        <div class="meter-row"><strong>${pct}%</strong><span>${feitos} de ${total} temas revisados</span></div>
        <div class="meter" role="progressbar" aria-valuenow="${pct}" aria-valuemin="0" aria-valuemax="100"><span style="width:${pct}%"></span></div>
      </section>
      <div class="stat-grid">
        <div class="stat"><b>${state.quiz.melhorPct !== null ? `${state.quiz.melhorPct}%` : '—'}</b><span>Melhor simulado</span></div>
        <div class="stat"><b>${state.favoritos.length}</b><span>Favoritos</span></div>
      </div>
      ${pendentes.length ? `<h2 class="section-title">Ainda não revisados</h2><ul class="topic-list">${pendentes.map(topicItem).join('')}</ul>` : `<p class="empty"><strong>Todos os temas revisados</strong>Faça um simulado para testar o que aprendeu.</p>`}

      <h2 class="section-title">Aparência</h2>
      <div class="segmented" role="group" aria-label="Tema">
        ${[['auto', 'Automático'], ['light', 'Claro'], ['dark', 'Escuro']].map(([v, l]) => `<button type="button" data-action="tema" data-v="${v}" aria-pressed="${state.tema === v}">${l}</button>`).join('')}
      </div>

      <h2 class="section-title">Dados</h2>
      <button type="button" class="btn" style="width:100%" data-action="zerar">Apagar meu progresso</button>
      <p class="disclaimer">Conteúdo versão ${CONTENT_VERSION}.</p>
    `;
  },

  calculadora() {
    return `
      ${backLink('#cat-medicacoes', 'Medicações')}
      <div class="page-head"><h2>Calculadora de gotejamento</h2><p>Confira seu cálculo antes de regular o equipo.</p></div>
      <div class="field"><label for="c-vol">Volume (mL)</label><input id="c-vol" type="number" inputmode="decimal" min="0" placeholder="Ex.: 500"></div>
      <div class="field"><label for="c-h">Tempo: horas</label><input id="c-h" type="number" inputmode="decimal" min="0" placeholder="Ex.: 8"></div>
      <div class="field"><label for="c-min">Tempo: minutos (opcional)</label><input id="c-min" type="number" inputmode="numeric" min="0" placeholder="Ex.: 30"></div>
      <div class="calc-result" aria-live="polite">
        <div class="stat"><b id="r-gts">—</b><span>gotas/min</span></div>
        <div class="stat"><b id="r-mgts">—</b><span>microgotas/min</span></div>
        <div class="stat" style="grid-column:1/-1"><b id="r-mlh">—</b><span>mL/h na bomba de infusão</span></div>
      </div>
      <p class="calc-note">Fórmulas: macrogotas = volume ÷ (horas × 3); microgotas = volume ÷ horas. Resultado arredondado. Sempre confirme com a prescrição.</p>
    `;
  },

  naoEncontrado() {
    return `<div class="empty"><strong>Página não encontrada</strong>O link pode estar desatualizado. <a href="#inicio">Voltar ao início</a></div>`;
  },
};

/* ---------- Estado da interface (não persistido) ---------- */
const ui = { query: '', quiz: null };

/* ---------- Roteador ---------- */
function parseRoute() {
  const h = decodeURIComponent(location.hash.slice(1)) || 'inicio';
  if (h.startsWith('cat-')) return { tab: 'inicio', view: 'categoria', arg: h.slice(4) };
  if (h.startsWith('t-')) return { tab: 'inicio', view: 'topico', arg: h.slice(2) };
  if (['inicio', 'buscar', 'simulados', 'progresso', 'calculadora'].includes(h)) {
    return { tab: h === 'calculadora' ? 'inicio' : h, view: h };
  }
  return { tab: 'inicio', view: 'naoEncontrado' };
}

function render({ keepScroll = false } = {}) {
  const r = parseRoute();
  const main = $('#view');
  const y = window.scrollY;
  main.innerHTML = views[r.view](r.arg);
  main.classList.remove('enter');
  void main.offsetWidth;
  if (!keepScroll) main.classList.add('enter');

  document.querySelectorAll('.tabbar a').forEach((a) => {
    a.getAttribute('href') === `#${r.tab}` ? a.setAttribute('aria-current', 'page') : a.removeAttribute('aria-current');
  });

  const t = r.view === 'topico' ? topicById(r.arg) : null;
  document.title = t ? `${t.titulo} · Pré-Estágio Seguro` : 'Pré-Estágio Seguro';

  if (keepScroll) window.scrollTo(0, y); else window.scrollTo(0, 0);
  afterRender(r);
}

function afterRender(r) {
  if (r.view === 'inicio') {
    $('#home-search').addEventListener('submit', (e) => {
      e.preventDefault();
      ui.query = $('#q-home').value.trim();
      location.hash = 'buscar';
    });
    renderInstallCard();
  }
  if (r.view === 'buscar') {
    const input = $('#q-page');
    const atualizar = () => { ui.query = input.value; renderResults(); };
    input.addEventListener('input', atualizar);
    $('#page-search').addEventListener('submit', (e) => { e.preventDefault(); input.blur(); });
    renderResults();
    if (!ui.query) input.focus();
  }
  if (r.view === 'calculadora') {
    ['c-vol', 'c-h', 'c-min'].forEach((id) => $(`#${id}`).addEventListener('input', calcular));
  }
}

function renderResults() {
  const box = $('#results');
  const q = ui.query.trim();
  if (!q) {
    const sugestoes = ['PCR', 'sonda', 'gotejamento', 'AVC', 'sepse', 'glicemia', 'oxigênio'];
    box.innerHTML = `<div class="empty"><strong>O que você quer revisar?</strong>Digite um procedimento, sintoma ou medicação.<div class="chips">${sugestoes.map((s) => `<button type="button" class="chip" data-action="sugestao" data-q="${esc(s)}">${esc(s)}</button>`).join('')}</div></div>`;
    return;
  }
  const res = buscar(q);
  box.innerHTML = res.length
    ? `<p class="result-meta">${res.length} ${res.length === 1 ? 'resultado' : 'resultados'}</p><ul class="topic-list">${res.map(topicItem).join('')}</ul>`
    : `<div class="empty"><strong>Nada encontrado para “${esc(q)}”</strong>Tente outra palavra, como o nome do procedimento ou um sinal clínico.</div>`;
}

function calcular() {
  const vol = parseFloat($('#c-vol').value.replace(',', '.'));
  const h = parseFloat(($('#c-h').value || '0').replace(',', '.'));
  const m = parseFloat(($('#c-min').value || '0').replace(',', '.'));
  const horas = (isNaN(h) ? 0 : h) + (isNaN(m) ? 0 : m) / 60;
  const set = (id, v) => { $(`#${id}`).textContent = v; };
  if (!vol || vol <= 0 || horas <= 0) { set('r-gts', '—'); set('r-mgts', '—'); set('r-mlh', '—'); return; }
  set('r-gts', Math.round(vol / (horas * 3)));
  set('r-mgts', Math.round(vol / horas));
  const mlh = vol / horas;
  set('r-mlh', mlh.toLocaleString('pt-BR', { maximumFractionDigits: 1 }));
}

/* ---------- Ações (delegação de eventos) ---------- */
document.addEventListener('click', (e) => {
  const el = e.target.closest('[data-action]');
  if (!el) return;
  const { action, id } = el.dataset;

  if (action === 'revisar') {
    if (isRevisado(id)) delete state.revisados[id];
    else { state.revisados[id] = Date.now(); toast('Tema marcado como revisado'); }
    saveState(); render({ keepScroll: true });
  }
  if (action === 'favoritar') {
    state.favoritos = isFav(id) ? state.favoritos.filter((f) => f !== id) : [...state.favoritos, id];
    saveState(); render({ keepScroll: true });
  }
  if (action === 'sugestao') { ui.query = el.dataset.q; $('#q-page').value = ui.query; renderResults(); }
  if (action === 'quiz-iniciar') {
    const todas = SIMULADOS.map((_, i) => i);
    for (let i = todas.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [todas[i], todas[j]] = [todas[j], todas[i]]; }
    const ordem = todas.slice(0, QUIZ_SIZE);
    ui.quiz = { ordem, i: 0, resposta: null, acertos: 0, erros: [] };
    render();
  }
  if (action === 'quiz-responder') {
    const q = ui.quiz; const item = SIMULADOS[q.ordem[q.i]];
    q.resposta = Number(el.dataset.idx);
    if (q.resposta === item.correta) q.acertos++; else q.erros.push(item.topico);
    render({ keepScroll: true });
  }
  if (action === 'quiz-proxima') {
    const q = ui.quiz; q.i++; q.resposta = null;
    if (q.i >= q.ordem.length) {
      state.quiz.tentativas++;
      const pct = Math.round((q.acertos / q.ordem.length) * 100);
      state.quiz.ultima = pct;
      state.quiz.melhorPct = Math.max(state.quiz.melhorPct ?? 0, pct);
      saveState();
    }
    render();
  }
  if (action === 'tema') { state.tema = el.dataset.v; saveState(); aplicarTema(); render({ keepScroll: true }); }
  if (action === 'zerar') {
    if (confirm('Apagar temas revisados, favoritos e resultados dos simulados?')) {
      const tema = state.tema; state = defaultState(); state.tema = tema; saveState(); render(); toast('Progresso apagado');
    }
  }
  if (action === 'instalar') instalar();
});

function aplicarTema() {
  const root = document.documentElement;
  if (state.tema === 'auto') root.removeAttribute('data-theme'); else root.setAttribute('data-theme', state.tema);
  const escuro = state.tema === 'dark' || (state.tema === 'auto' && matchMedia('(prefers-color-scheme: dark)').matches);
  $('meta[name="theme-color"]').setAttribute('content', escuro ? '#08151c' : '#f4f7f8');
}

/* ---------- Status online/offline ---------- */
function atualizarStatus() {
  const pill = $('#net');
  const off = !navigator.onLine;
  pill.classList.toggle('offline', off);
  $('span:last-child', pill).textContent = off ? 'Offline' : 'Online';
}
window.addEventListener('online', () => { atualizarStatus(); toast('Conexão restabelecida'); });
window.addEventListener('offline', () => { atualizarStatus(); toast('Sem internet: o conteúdo continua disponível'); });

/* ---------- Instalação (PWA) ---------- */
let deferredPrompt = null;
const isStandalone = () => matchMedia('(display-mode: standalone)').matches || navigator.standalone === true;
const isIOS = () => /iphone|ipad|ipod/i.test(navigator.userAgent);

window.addEventListener('beforeinstallprompt', (e) => {
  e.preventDefault();
  deferredPrompt = e;
  renderInstallCard();
});
window.addEventListener('appinstalled', () => { deferredPrompt = null; renderInstallCard(); toast('App instalado na tela inicial'); });

function renderInstallCard() {
  const slot = $('#install-slot');
  if (!slot) return;
  if (isStandalone()) { slot.innerHTML = ''; return; }
  if (deferredPrompt) {
    slot.innerHTML = `<div class="install-card"><p>Instale o app para abrir direto da tela inicial, mesmo sem internet.</p><button type="button" class="btn primary" data-action="instalar">${ICON.download}Instalar</button></div>`;
  } else if (isIOS()) {
    slot.innerHTML = `<div class="install-card"><p>Para instalar no iPhone: toque em Compartilhar no Safari e depois em “Adicionar à Tela de Início”.</p></div>`;
  } else {
    slot.innerHTML = '';
  }
}

async function instalar() {
  if (!deferredPrompt) return;
  deferredPrompt.prompt();
  await deferredPrompt.userChoice;
  deferredPrompt = null;
  renderInstallCard();
}

/* ---------- Service Worker (offline) ---------- */
async function registrarSW() {
  if (!('serviceWorker' in navigator)) return;
  try {
    const reg = await navigator.serviceWorker.register('./sw.js');
    const avisar = (worker) => toast('Nova versão do conteúdo disponível', {
      label: 'Atualizar',
      onClick: () => worker.postMessage({ type: 'SKIP_WAITING' }),
    });
    if (reg.waiting && navigator.serviceWorker.controller) avisar(reg.waiting);
    reg.addEventListener('updatefound', () => {
      const nw = reg.installing;
      nw?.addEventListener('statechange', () => {
        if (nw.state === 'installed' && navigator.serviceWorker.controller) avisar(nw);
      });
    });
    let recarregou = false;
    navigator.serviceWorker.addEventListener('controllerchange', () => {
      if (recarregou) return; recarregou = true; location.reload();
    });
  } catch {
    /* sem service worker (ex.: aberto via file:// ou ambiente que não permite): o app funciona online normalmente */
  }
}

/* ---------- Início ---------- */
aplicarTema();
matchMedia('(prefers-color-scheme: dark)').addEventListener?.('change', aplicarTema);
atualizarStatus();
window.addEventListener('hashchange', () => render());
render();
registrarSW();
