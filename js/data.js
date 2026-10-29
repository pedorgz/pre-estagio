/* =========================================================
   Pré-Estágio Seguro — Conteúdo
   Material de estudo. Não substitui o protocolo da instituição
   nem a supervisão do enfermeiro/preceptor.
   Para editar: altere os textos abaixo e aumente a versão
   do cache em sw.js (CACHE_VERSION) para os celulares
   baixarem a atualização.
   ========================================================= */

export const CONTENT_VERSION = '2026.10.2';

export const VITAIS_REF = [
  { sigla: 'FC', valor: '60–100', unidade: 'bpm' },
  { sigla: 'FR', valor: '12–20', unidade: 'irpm' },
  { sigla: 'SpO₂', valor: '≥ 95', unidade: '%' },
  { sigla: 'PA', valor: '< 120/80', unidade: 'mmHg' },
  { sigla: 'Tax', valor: '35,8–37,2', unidade: '°C' },
  { sigla: 'Glicemia', valor: '70–99', unidade: 'mg/dL jejum' },
];

export const CATEGORIAS = [
  { id: 'sondas', nome: 'Sondas', desc: 'SNG, SNE, sonda vesical e aspiração', icon: 'tube' },
  { id: 'avaliacao', nome: 'Sinais vitais e avaliação', desc: 'Sinais vitais, Glasgow, classificação de risco e glicemia', icon: 'pulse' },
  { id: 'dispositivos', nome: 'Dispositivos', desc: 'Acesso venoso, oxigênio, cateter central e dreno de tórax', icon: 'drip' },
  { id: 'curativos', nome: 'Curativos e lesões por pressão', desc: 'Coberturas, técnica de curativo, classificação e prevenção de LP', icon: 'bandage' },
  { id: 'registro', nome: 'Anotação de enfermagem', desc: 'Regras do registro e modelo pronto', icon: 'notes' },
  { id: 'medicacoes', nome: 'Medicações', desc: 'Medicações básicas, certos, cálculos, vias e alta vigilância', icon: 'pill' },
  { id: 'comorbidades', nome: 'Doenças e comorbidades', desc: 'Hipertensão, diabetes, insuficiência cardíaca, DPOC e doença renal', icon: 'heart' },
  { id: 'emergencias', nome: 'Emergências frequentes', desc: 'PCR, dor torácica, AVC, sepse e outras', icon: 'siren' },
  { id: 'oncologia', nome: 'Oncologia', desc: 'Neutropenia febril, cateter implantado e quimioterapia', icon: 'ribbon' },
  { id: 'cardio', nome: 'Exames do coração', desc: 'Eletrocardiograma e ecocardiograma', icon: 'ecg' },
  { id: 'anatomia', nome: 'Anatomia aplicada', desc: 'Veias, músculos para IM, coração e sondagens', icon: 'body' },
];

export const TOPICOS = [
  /* ---------------- AVALIAÇÃO ---------------- */
  {
    id: 'sinais-vitais',
    cat: 'avaliacao',
    titulo: 'Sinais vitais no adulto',
    resumo: 'Valores de referência e o que comunicar imediatamente ao enfermeiro.',
    tags: ['pressão', 'frequência', 'saturação', 'temperatura', 'dor'],
    secoes: [
      { tipo: 'tabela', titulo: 'Valores de referência (adulto em repouso)', linhas: [
        ['Frequência cardíaca', '60–100 bpm'],
        ['Frequência respiratória', '12–20 irpm'],
        ['Saturação de O₂', '≥ 95% (DPOC: alvo 88–92%)'],
        ['Pressão arterial', 'Ótima < 120/80 mmHg'],
        ['Temperatura axilar', '35,8–37,2 °C (febre ≥ 37,8 °C)'],
        ['Dor', 'Escala numérica 0–10 (5º sinal vital)'],
      ]},
      { tipo: 'passos', titulo: 'Como aferir com segurança', itens: [
        'Higienize as mãos e confirme a identificação do paciente pela pulseira.',
        'Explique o procedimento e posicione o paciente sentado ou deitado, em repouso.',
        'PA: manguito do tamanho adequado ao braço, braço na altura do coração.',
        'FR: conte por 1 minuto sem avisar o paciente, para não alterar o padrão.',
        'Registre os valores com horário e comunique qualquer alteração.',
      ]},
      { tipo: 'alerta', titulo: 'Comunique na hora', itens: [
        'SpO₂ < 90%, FR > 24 ou < 10 irpm.',
        'PAS < 90 mmHg ou PA ≥ 180/120 mmHg.',
        'FC < 50 ou > 120 bpm, ou pulso irregular de início recente.',
        'Rebaixamento do nível de consciência ou agitação nova.',
      ]},
    ],
  },
  {
    id: 'classificacao-risco',
    cat: 'avaliacao',
    titulo: 'Classificação de risco (Manchester)',
    resumo: 'As cinco cores, o tempo-alvo de atendimento e o papel do estudante.',
    tags: ['triagem', 'acolhimento', 'cores', 'protocolo'],
    secoes: [
      { tipo: 'cores', titulo: 'Cores e tempo-alvo', linhas: [
        ['vermelho', 'Emergência', 'Atendimento imediato'],
        ['laranja', 'Muito urgente', 'Até 10 minutos'],
        ['amarelo', 'Urgente', 'Até 60 minutos'],
        ['verde', 'Pouco urgente', 'Até 120 minutos'],
        ['azul', 'Não urgente', 'Até 240 minutos'],
      ]},
      { tipo: 'lista', titulo: 'Pontos-chave', itens: [
        'A classificação é feita pelo enfermeiro, com base em fluxogramas e discriminadores.',
        'A cor define prioridade, não diagnóstico.',
        'Paciente que piora na espera deve ser reclassificado.',
        'O estudante pode acompanhar, aferir sinais vitais e observar sob supervisão.',
      ]},
      { tipo: 'alerta', titulo: 'Sinais de que o paciente precisa ser reavaliado já', itens: [
        'Dor torácica, falta de ar ou sudorese intensa.',
        'Déficit neurológico súbito (face, braço, fala).',
        'Sangramento ativo ou queda da consciência.',
      ]},
    ],
  },
  {
    id: 'glicemia-capilar',
    cat: 'avaliacao',
    titulo: 'Glicemia capilar',
    resumo: 'Técnica, valores-alvo e quando agir.',
    tags: ['dextro', 'hgt', 'hipoglicemia', 'diabetes', 'glicosímetro'],
    secoes: [
      { tipo: 'passos', titulo: 'Passo a passo', itens: [
        'Higienize as mãos, separe glicosímetro, fita, lanceta, algodão e luvas.',
        'Confira a validade da fita e se o aparelho está calibrado.',
        'Peça para o paciente lavar as mãos ou faça antissepsia e espere secar completamente.',
        'Puncione a lateral da polpa digital (dói menos que o centro).',
        'Encoste a gota na fita, aguarde o resultado e comprima o local.',
        'Descarte a lanceta no perfurocortante e registre valor e horário.',
      ]},
      { tipo: 'tabela', titulo: 'Referências', linhas: [
        ['Normal em jejum', '70–99 mg/dL'],
        ['Hipoglicemia', '< 70 mg/dL'],
        ['Hipoglicemia grave', '< 54 mg/dL ou paciente confuso'],
        ['Hiperglicemia a comunicar', '> 250 mg/dL ou conforme prescrição'],
      ]},
      { tipo: 'alerta', titulo: 'Atenção', itens: [
        'Todo paciente com suspeita de AVC ou rebaixamento de consciência precisa de glicemia capilar.',
        'Álcool não seco na pele pode alterar o resultado.',
      ]},
    ],
  },
  {
    id: 'ecg',
    cat: 'cardio',
    titulo: 'ECG de 12 derivações',
    resumo: 'Posição dos eletrodos e prioridade na dor torácica.',
    tags: ['eletrocardiograma', 'eletrodos', 'precordiais', 'dor torácica'],
    secoes: [
      { tipo: 'tabela', titulo: 'Eletrodos precordiais', linhas: [
        ['V1', '4º espaço intercostal, borda direita do esterno'],
        ['V2', '4º espaço intercostal, borda esquerda do esterno'],
        ['V3', 'Entre V2 e V4'],
        ['V4', '5º espaço intercostal, linha hemiclavicular esquerda'],
        ['V5', 'Linha axilar anterior, mesma altura de V4'],
        ['V6', 'Linha axilar média, mesma altura de V4'],
      ]},
      { tipo: 'tabela', titulo: 'Eletrodos de membros (padrão mais comum)', linhas: [
        ['Braço direito', 'Vermelho'],
        ['Braço esquerdo', 'Amarelo'],
        ['Perna esquerda', 'Verde'],
        ['Perna direita', 'Preto (terra)'],
      ]},
      { tipo: 'alerta', titulo: 'Prioridade', itens: [
        'Dor torácica: ECG feito e mostrado ao médico em até 10 minutos da chegada.',
        'Peça para o paciente não falar e não se mexer durante o registro.',
        'Identifique o traçado com nome, data, hora e se havia dor no momento.',
      ]},
    ],
  },

  /* ---------------- DISPOSITIVOS ---------------- */
  {
    id: 'puncao-venosa',
    cat: 'dispositivos',
    titulo: 'Punção venosa periférica',
    resumo: 'Técnica segura, cuidados com o cateter e sinais de complicação.',
    tags: ['acesso venoso', 'jelco', 'cateter', 'avp', 'flebite'],
    secoes: [
      { tipo: 'passos', titulo: 'Passo a passo', itens: [
        'Confira a prescrição, identifique o paciente e explique o procedimento.',
        'Higienize as mãos e separe o material: cateter, garrote, antisséptico, gaze, cobertura, SF 0,9% para flush, luvas.',
        'Escolha a veia: comece pela região mais distal do membro superior; evite áreas de flexão.',
        'Garroteie de 5 a 10 cm acima do local e faça antissepsia com clorexidina alcoólica, aguardando secar.',
        'Introduza o cateter com bisel para cima, ângulo de 15–30°; ao ver refluxo, avance o cateter e recue a agulha.',
        'Solte o garrote, ative o dispositivo de segurança e descarte a agulha no perfurocortante.',
        'Teste com flush de SF 0,9%, fixe com cobertura estéril e identifique data, hora, calibre e responsável.',
      ]},
      { tipo: 'alerta', titulo: 'Sinais de complicação', itens: [
        'Flebite: dor, calor, vermelhidão ou cordão palpável no trajeto.',
        'Infiltração: edema, pele fria e infusão que não corre.',
        'Diante desses sinais, interrompa a infusão e comunique.',
      ]},
      { tipo: 'lista', titulo: 'Bom saber', itens: [
        'Máximo de duas tentativas por profissional.',
        'Não puncione o membro com fístula arteriovenosa ou do lado de mastectomia com esvaziamento axilar.',
        'Troca do cateter conforme protocolo institucional (ANVISA: não trocar rotineiramente em intervalo menor que 96 h).',
      ]},
    ],
  },
  {
    id: 'sng-sne',
    cat: 'sondas',
    titulo: 'Sonda nasogástrica e nasoenteral',
    resumo: 'Diferenças, medida, confirmação de posição e cuidados.',
    tags: ['sng', 'sne', 'sonda', 'dieta', 'drenagem', 'levine', 'dobbhoff'],
    secoes: [
      { tipo: 'tabela', titulo: 'SNG x SNE', linhas: [
        ['SNG (Levine)', 'Calibrosa, no estômago. Drenagem, lavagem ou dieta por curto período'],
        ['SNE (Dobbhoff)', 'Fina e maleável, pós-pilórica. Dieta e medicação por tempo prolongado'],
      ]},
      { tipo: 'passos', titulo: 'Medida e inserção (SNG)', itens: [
        'Confira a prescrição, identifique o paciente e coloque-o com cabeceira entre 45 e 90°.',
        'Meça a sonda: ponta do nariz → lóbulo da orelha → apêndice xifoide. Marque com fita.',
        'Lubrifique a ponta com gel hidrossolúvel e introduza pela narina.',
        'Peça para o paciente deglutir enquanto a sonda avança até a marca.',
        'Confirme a posição antes de qualquer uso e fixe sem tracionar a asa do nariz.',
      ]},
      { tipo: 'alerta', titulo: 'Segurança', itens: [
        'SNE: só inicie dieta após confirmação por raio X.',
        'Tosse, cianose ou dificuldade para falar durante a passagem: retire a sonda.',
        'A ausculta de ar no epigástrio sozinha não confirma a posição.',
        'Inserção é atividade do enfermeiro (Resolução COFEN nº 619/2019); o estudante realiza sob supervisão.',
      ]},
      { tipo: 'lista', titulo: 'Cuidados diários', itens: [
        'Mantenha cabeceira elevada (30–45°) durante e após a dieta.',
        'Lave a sonda com água antes e depois de dieta ou medicação.',
        'Confira a marca da fixação a cada turno para detectar deslocamento.',
      ]},
    ],
  },
  {
    id: 'svd',
    cat: 'sondas',
    titulo: 'Sondagem vesical',
    resumo: 'Demora x alívio, técnica asséptica e prevenção de infecção.',
    tags: ['svd', 'sva', 'foley', 'cateterismo', 'urina', 'itu'],
    secoes: [
      { tipo: 'tabela', titulo: 'Tipos', linhas: [
        ['Alívio (SVA)', 'Esvazia a bexiga e é retirada logo após'],
        ['Demora (SVD / Foley)', 'Permanece com balonete insuflado e sistema fechado'],
      ]},
      { tipo: 'passos', titulo: 'Pontos críticos da técnica', itens: [
        'Confira a prescrição, explique o procedimento e garanta privacidade.',
        'Faça higiene íntima antes de abrir o material estéril.',
        'Mantenha técnica asséptica do início ao fim; se contaminar, troque o material.',
        'Insuflar o balonete somente após ver a urina fluir, com água destilada no volume indicado pelo fabricante.',
        'Fixe: na mulher, face interna da coxa; no homem, região hipogástrica.',
        'Registre volume, aspecto da urina, calibre e intercorrências.',
      ]},
      { tipo: 'alerta', titulo: 'Prevenção de infecção', itens: [
        'Bolsa coletora sempre abaixo do nível da bexiga e sem tocar o chão.',
        'Nunca desconecte o sistema fechado.',
        'Dor ao insuflar o balonete: pare, desinsufle e comunique.',
        'Procedimento privativo do enfermeiro (Resolução COFEN nº 450/2013).',
      ]},
    ],
  },
  {
    id: 'oxigenoterapia',
    cat: 'dispositivos',
    titulo: 'Oxigenoterapia',
    resumo: 'Dispositivos, fluxos e FiO₂ aproximada.',
    tags: ['oxigênio', 'cateter nasal', 'máscara', 'venturi', 'reservatório', 'o2'],
    secoes: [
      { tipo: 'tabela', titulo: 'Dispositivos', linhas: [
        ['Cateter nasal', '1–6 L/min · FiO₂ aprox. 24–44%'],
        ['Máscara simples', '5–10 L/min · FiO₂ aprox. 40–60%'],
        ['Máscara de Venturi', 'FiO₂ precisa de 24–50% conforme a válvula'],
        ['Máscara com reservatório', '10–15 L/min · FiO₂ aprox. 60–90%'],
      ]},
      { tipo: 'lista', titulo: 'Cuidados', itens: [
        'O₂ é medicamento: precisa de prescrição com dispositivo e fluxo.',
        'Na máscara com reservatório, encha a bolsa antes de colocar no paciente.',
        'Use umidificação conforme protocolo, principalmente em fluxos mais altos.',
        'Proteja orelhas e narinas contra lesão por pressão.',
      ]},
      { tipo: 'alerta', titulo: 'Atenção', itens: [
        'Paciente com DPOC: alvo de SpO₂ entre 88 e 92%.',
        'Sem chamas ou faíscas perto do oxigênio.',
      ]},
    ],
  },

  /* ---------------- MEDICAÇÕES ---------------- */
  {
    id: 'certos-medicacao',
    cat: 'medicacoes',
    titulo: 'Os 9 certos da medicação',
    resumo: 'Checagem obrigatória antes de qualquer administração.',
    tags: ['segurança', 'administração', 'erro', 'checagem'],
    secoes: [
      { tipo: 'passos', titulo: 'Confira um por um', itens: [
        'Paciente certo: nome completo e data de nascimento pela pulseira.',
        'Medicamento certo: nome, concentração e alergias.',
        'Via certa.',
        'Hora certa.',
        'Dose certa: refaça o cálculo e confira as unidades.',
        'Registro certo: anote logo após administrar.',
        'Orientação certa: explique ao paciente o que está recebendo.',
        'Forma certa: comprimido, solução, diluição adequada.',
        'Resposta certa: observe o efeito esperado e reações adversas.',
      ]},
      { tipo: 'alerta', titulo: 'Nunca', itens: [
        'Administre medicamento preparado por outra pessoa.',
        'Use prescrição verbal, exceto em emergência, com repetição em voz alta e registro depois.',
        'Administre se tiver qualquer dúvida: pergunte antes.',
      ]},
    ],
  },
  {
    id: 'gotejamento',
    cat: 'medicacoes',
    titulo: 'Cálculo de gotejamento',
    resumo: 'Fórmulas de macrogotas, microgotas e bomba de infusão.',
    tags: ['gotas', 'microgotas', 'infusão', 'soro', 'ml/h', 'cálculo'],
    calculadora: true,
    secoes: [
      { tipo: 'tabela', titulo: 'Equivalências', linhas: [
        ['1 mL', '20 gotas'],
        ['1 mL', '60 microgotas'],
        ['1 gota', '3 microgotas'],
      ]},
      { tipo: 'tabela', titulo: 'Fórmulas (tempo em horas)', linhas: [
        ['Macrogotas/min', 'Volume (mL) ÷ (tempo × 3)'],
        ['Microgotas/min', 'Volume (mL) ÷ tempo'],
        ['Bomba de infusão (mL/h)', 'Volume (mL) ÷ tempo'],
      ]},
      { tipo: 'texto', titulo: 'Exemplo', texto: '500 mL de SF 0,9% em 8 h → 500 ÷ (8 × 3) = 20,8 → aproximadamente 21 gotas/min, ou 62,5 mL/h na bomba.' },
      { tipo: 'alerta', titulo: 'Atenção', itens: [
        'Tempo em minutos: macrogotas = volume × 20 ÷ minutos.',
        'Arredonde gotas para o número inteiro mais próximo.',
        'Use a calculadora do app para conferir, nunca para substituir o raciocínio.',
      ]},
    ],
  },
  {
    id: 'vias',
    cat: 'medicacoes',
    titulo: 'Vias de administração',
    resumo: 'Ângulos, locais e volumes de referência para injetáveis.',
    tags: ['intramuscular', 'subcutânea', 'intradérmica', 'endovenosa', 'im', 'sc', 'ev', 'ventroglútea'],
    secoes: [
      { tipo: 'tabela', titulo: 'Ângulos de inserção', linhas: [
        ['Intradérmica (ID)', '10–15°'],
        ['Subcutânea (SC)', '45–90° conforme tecido e agulha'],
        ['Intramuscular (IM)', '90°'],
      ]},
      { tipo: 'tabela', titulo: 'IM: volumes de referência (adulto)', linhas: [
        ['Deltoide', 'Até 2 mL'],
        ['Ventroglútea', 'Até 4 mL (local preferencial)'],
        ['Vasto lateral da coxa', 'Até 4 mL'],
        ['Dorsoglútea', 'Até 4 mL (risco de lesão do nervo ciático)'],
      ]},
      { tipo: 'lista', titulo: 'Cuidados', itens: [
        'Siga sempre o volume e local definidos no protocolo da instituição.',
        'SC: faça prega e não massageie (principalmente heparina e insulina).',
        'EV: confira compatibilidade, diluição e tempo de infusão.',
        'Faça rodízio de locais em aplicações repetidas.',
      ]},
    ],
  },
  {
    id: 'alta-vigilancia',
    cat: 'medicacoes',
    titulo: 'Medicamentos de alta vigilância',
    resumo: 'Os que mais causam dano grave quando há erro.',
    tags: ['map', 'potencialmente perigosos', 'potássio', 'insulina', 'heparina', 'opioide', 'dupla checagem'],
    secoes: [
      { tipo: 'lista', titulo: 'Exemplos no PS', itens: [
        'Cloreto de potássio concentrado.',
        'Insulinas.',
        'Heparina e anticoagulantes.',
        'Opioides (morfina, fentanil).',
        'Sedativos e bloqueadores neuromusculares.',
        'Drogas vasoativas (noradrenalina, dobutamina).',
      ]},
      { tipo: 'alerta', titulo: 'Regras de ouro', itens: [
        'Faça dupla checagem independente com outro profissional.',
        'Cloreto de potássio nunca é feito em bolus EV: sempre diluído e em bomba de infusão.',
        'Insulina em seringa de insulina (U-100), nunca em seringa comum.',
        'Armazenamento separado e identificado com etiqueta de alerta.',
      ]},
    ],
  },

  /* ---------------- EMERGÊNCIAS ---------------- */
  {
    id: 'pcr',
    cat: 'emergencias',
    titulo: 'Parada cardiorrespiratória (adulto)',
    resumo: 'Reconhecimento, RCP de alta qualidade e ritmos.',
    tags: ['rcp', 'reanimação', 'massagem', 'desfibrilação', 'dea', 'acls', 'carrinho'],
    secoes: [
      { tipo: 'passos', titulo: 'Reconheça e aja', itens: [
        'Cheque responsividade, respiração e pulso carotídeo em até 10 segundos.',
        'Sem pulso: chame ajuda, peça o carrinho de emergência e o desfibrilador.',
        'Inicie compressões torácicas imediatamente.',
        'Monitorize o ritmo assim que o desfibrilador chegar.',
      ]},
      { tipo: 'tabela', titulo: 'RCP de alta qualidade', linhas: [
        ['Frequência', '100–120 compressões/min'],
        ['Profundidade', '5–6 cm'],
        ['Retorno do tórax', 'Completo a cada compressão'],
        ['Relação sem via aérea avançada', '30 compressões : 2 ventilações'],
        ['Com via aérea avançada', '1 ventilação a cada 6 s, compressões contínuas'],
        ['Troca do compressor', 'A cada 2 minutos'],
        ['Pausas', 'Menos de 10 segundos'],
      ]},
      { tipo: 'tabela', titulo: 'Ritmos', linhas: [
        ['Chocáveis', 'Fibrilação ventricular e taquicardia ventricular sem pulso'],
        ['Não chocáveis', 'Assistolia e atividade elétrica sem pulso (AESP)'],
      ]},
      { tipo: 'lista', titulo: 'Papel do estudante', itens: [
        'Compressões, sob orientação da equipe.',
        'Cronometrar ciclos e registrar horários de drogas e choques.',
        'Buscar materiais e manter o ambiente organizado.',
      ]},
    ],
  },
  {
    id: 'dor-toracica',
    cat: 'emergencias',
    titulo: 'Dor torácica e infarto',
    resumo: 'Sinais de alerta e as primeiras ações da enfermagem.',
    tags: ['iam', 'infarto', 'sca', 'coronária', 'angina'],
    secoes: [
      { tipo: 'lista', titulo: 'Sinais e sintomas', itens: [
        'Dor ou aperto no peito, que pode irradiar para braço, mandíbula ou costas.',
        'Sudorese, náusea, falta de ar, palidez.',
        'Idosos, mulheres e diabéticos podem ter sintomas atípicos (cansaço, desconforto epigástrico).',
      ]},
      { tipo: 'passos', titulo: 'Primeiras ações', itens: [
        'Comunique o enfermeiro e leve o paciente para a sala de emergência.',
        'ECG de 12 derivações em até 10 minutos.',
        'Monitorização cardíaca, PA e SpO₂.',
        'Acesso venoso periférico e coleta de exames conforme prescrição.',
        'Oxigênio apenas se SpO₂ < 90%, conforme prescrição.',
        'Mantenha repouso e anote o horário de início da dor.',
      ]},
    ],
  },
  {
    id: 'avc',
    cat: 'emergencias',
    titulo: 'AVC',
    resumo: 'Reconhecimento rápido e por que o horário importa.',
    tags: ['acidente vascular', 'derrame', 'samu', 'trombólise', 'déficit'],
    secoes: [
      { tipo: 'tabela', titulo: 'Escala SAMU (reconhecimento)', linhas: [
        ['S — Sorriso', 'Peça para sorrir: um lado da face caído?'],
        ['A — Abraço', 'Braços estendidos: um cai?'],
        ['M — Música', 'Peça para repetir uma frase: fala enrolada?'],
        ['U — Urgente', 'Qualquer alteração: acione o protocolo de AVC'],
      ]},
      { tipo: 'alerta', titulo: 'O horário é tudo', itens: [
        'Registre a última vez que o paciente foi visto normal.',
        'A trombólise endovenosa pode ser feita em até 4,5 h do início dos sintomas, se indicada.',
        'Faça glicemia capilar: hipoglicemia pode imitar AVC.',
      ]},
      { tipo: 'lista', titulo: 'Cuidados', itens: [
        'Mantenha jejum até avaliação da deglutição.',
        'Monitorize PA, SpO₂ e nível de consciência.',
        'Acesso venoso calibroso, de preferência no membro não afetado.',
      ]},
    ],
  },
  {
    id: 'sepse',
    cat: 'emergencias',
    titulo: 'Sepse',
    resumo: 'Triagem rápida e o pacote da primeira hora.',
    tags: ['infecção', 'choque séptico', 'qsofa', 'lactato', 'antibiótico', 'hemocultura'],
    secoes: [
      { tipo: 'tabela', titulo: 'qSOFA (triagem, 2 ou mais = alerta)', linhas: [
        ['Frequência respiratória', '≥ 22 irpm'],
        ['Consciência', 'Alteração do estado mental'],
        ['Pressão sistólica', '≤ 100 mmHg'],
      ]},
      { tipo: 'passos', titulo: 'Pacote da 1ª hora (conforme prescrição)', itens: [
        'Coleta de lactato.',
        'Hemoculturas antes do antibiótico.',
        'Antibiótico de amplo espectro.',
        'Cristaloide 30 mL/kg se hipotensão ou lactato ≥ 4 mmol/L.',
        'Vasopressor se PAM < 65 mmHg mesmo após volume.',
      ]},
      { tipo: 'alerta', titulo: 'Atenção', itens: [
        'Cada hora de atraso no antibiótico aumenta a mortalidade.',
        'Anote o horário da suspeita e de cada etapa cumprida.',
      ]},
    ],
  },
  {
    id: 'anafilaxia',
    cat: 'emergencias',
    titulo: 'Anafilaxia',
    resumo: 'Reconhecimento e prioridade da adrenalina intramuscular.',
    tags: ['alergia', 'choque anafilático', 'adrenalina', 'epinefrina', 'reação'],
    secoes: [
      { tipo: 'lista', titulo: 'Reconhecimento', itens: [
        'Início rápido após exposição (medicamento, alimento, picada).',
        'Urticária, edema de lábios ou língua, rouquidão.',
        'Falta de ar, sibilos, hipotensão, desmaio.',
      ]},
      { tipo: 'passos', titulo: 'Primeiras ações', itens: [
        'Interrompa a exposição (pare a infusão suspeita).',
        'Chame ajuda e posicione o paciente deitado com pernas elevadas (sentado se muita falta de ar).',
        'Adrenalina IM no vasto lateral da coxa, conforme prescrição (adulto: 0,01 mg/kg, máximo 0,5 mg).',
        'Oxigênio, monitorização e acesso venoso.',
      ]},
      { tipo: 'alerta', titulo: 'Atenção', itens: [
        'Adrenalina é a primeira droga: anti-histamínico e corticoide não substituem.',
        'Registre a alergia no prontuário e na pulseira.',
      ]},
    ],
  },
  {
    id: 'hipoglicemia',
    cat: 'emergencias',
    titulo: 'Hipoglicemia',
    resumo: 'Sinais, regra dos 15 e quando é grave.',
    tags: ['glicose', 'diabetes', 'regra dos 15', 'glicemia baixa'],
    secoes: [
      { tipo: 'lista', titulo: 'Sinais', itens: [
        'Sudorese fria, tremor, taquicardia, fome.',
        'Confusão, fala arrastada, comportamento alterado.',
        'Convulsão ou coma nos casos graves.',
      ]},
      { tipo: 'passos', titulo: 'Paciente consciente (regra dos 15)', itens: [
        'Confirme com glicemia capilar (< 70 mg/dL).',
        'Ofereça 15 g de carboidrato de absorção rápida (ex.: 150 mL de suco ou refrigerante comum).',
        'Repita a glicemia em 15 minutos.',
        'Se ainda < 70 mg/dL, repita a oferta e comunique.',
      ]},
      { tipo: 'alerta', titulo: 'Inconsciente ou sem deglutir', itens: [
        'Nada por via oral: risco de aspiração.',
        'Glicose hipertônica EV conforme prescrição ou protocolo.',
      ]},
    ],
  },
  {
    id: 'crise-hipertensiva',
    cat: 'emergencias',
    titulo: 'Crise hipertensiva',
    resumo: 'Urgência x emergência hipertensiva.',
    tags: ['pressão alta', 'has', 'hipertensão', 'urgência', 'emergência'],
    secoes: [
      { tipo: 'tabela', titulo: 'Diferença', linhas: [
        ['Urgência hipertensiva', 'PA ≥ 180/120 sem lesão aguda de órgão-alvo'],
        ['Emergência hipertensiva', 'PA elevada com lesão aguda: AVC, IAM, edema agudo de pulmão, dissecção de aorta'],
      ]},
      { tipo: 'lista', titulo: 'Sinais de lesão de órgão-alvo', itens: [
        'Dor torácica ou dispneia.',
        'Déficit neurológico, confusão, cefaleia intensa com vômitos.',
        'Alteração visual súbita.',
      ]},
      { tipo: 'alerta', titulo: 'Cuidados', itens: [
        'Reafira a PA após repouso, com manguito adequado.',
        'Não reduza a PA bruscamente: siga a prescrição.',
        'Dor, ansiedade e retenção urinária também elevam a PA.',
      ]},
    ],
  },
  {
    id: 'crise-asma',
    cat: 'emergencias',
    titulo: 'Crise asmática',
    resumo: 'Gravidade e cuidados com broncodilatadores.',
    tags: ['asma', 'broncoespasmo', 'sibilo', 'nebulização', 'salbutamol', 'dispneia'],
    secoes: [
      { tipo: 'lista', titulo: 'Sinais de gravidade', itens: [
        'Fala apenas palavras soltas, uso de musculatura acessória.',
        'SpO₂ < 92% em ar ambiente.',
        'Tórax silencioso (sem sibilos) é sinal de crise muito grave.',
        'Sonolência ou confusão.',
      ]},
      { tipo: 'passos', titulo: 'Primeiras ações', itens: [
        'Posicione sentado, cabeceira elevada.',
        'Oxigênio para manter SpO₂ entre 93 e 95%, conforme prescrição.',
        'Broncodilatador inalatório (spray com espaçador ou nebulização) conforme prescrição.',
        'Reavalie FR, SpO₂ e esforço respiratório após cada dose.',
      ]},
    ],
  },
  /* ---------------- SONDAS (novo) ---------------- */
  {
    id: 'aspiracao',
    cat: 'sondas',
    titulo: 'Aspiração de vias aéreas',
    resumo: 'Sonda de aspiração: técnica, pressão e tempo seguros.',
    tags: ['sonda de aspiração', 'secreção', 'tot', 'traqueostomia', 'vias aéreas', 'aspirar'],
    secoes: [
      { tipo: 'tabela', titulo: 'Referências (adulto)', linhas: [
        ['Pressão do vácuo', '80–120 mmHg (ajuste conforme protocolo)'],
        ['Tempo de cada aspiração', 'Até 10–15 segundos'],
        ['Calibre da sonda', 'Até a metade do diâmetro interno do tubo'],
      ]},
      { tipo: 'passos', titulo: 'Passo a passo', itens: [
        'Avalie a necessidade: ruídos de secreção, queda de SpO₂, tosse ineficaz.',
        'Higienize as mãos, use EPI (óculos, máscara, luvas) e explique ao paciente.',
        'Pré-oxigene se prescrito e teste o vácuo.',
        'Vias aéreas inferiores (tubo, traqueostomia): técnica estéril com luva estéril na mão dominante.',
        'Introduza a sonda sem aspirar; aspire apenas ao retirar, com movimentos rotatórios.',
        'Ordem: tubo ou traqueostomia → nariz → boca. Nunca o contrário com a mesma sonda.',
        'Lave a extensão com água destilada e registre aspecto e volume da secreção.',
      ]},
      { tipo: 'alerta', titulo: 'Interrompa e comunique', itens: [
        'Queda importante de SpO₂, bradicardia ou arritmia durante a aspiração.',
        'Secreção com sangue vivo.',
      ]},
    ],
  },

  /* ---------------- AVALIAÇÃO (novo) ---------------- */
  {
    id: 'glasgow',
    cat: 'avaliacao',
    titulo: 'Escala de coma de Glasgow',
    resumo: 'Avaliação do nível de consciência em 3 a 15 pontos.',
    tags: ['consciência', 'neurológico', 'tce', 'coma', 'ecg glasgow'],
    secoes: [
      { tipo: 'tabela', titulo: 'Abertura ocular (1–4)', linhas: [
        ['4', 'Espontânea'], ['3', 'Ao som (chamado)'], ['2', 'À pressão'], ['1', 'Ausente'],
      ]},
      { tipo: 'tabela', titulo: 'Resposta verbal (1–5)', linhas: [
        ['5', 'Orientada'], ['4', 'Confusa'], ['3', 'Palavras'], ['2', 'Sons'], ['1', 'Ausente'],
      ]},
      { tipo: 'tabela', titulo: 'Resposta motora (1–6)', linhas: [
        ['6', 'Obedece comandos'], ['5', 'Localiza o estímulo'], ['4', 'Flexão normal (retirada)'],
        ['3', 'Flexão anormal'], ['2', 'Extensão'], ['1', 'Ausente'],
      ]},
      { tipo: 'tabela', titulo: 'Interpretação (TCE)', linhas: [
        ['13–15', 'Leve'], ['9–12', 'Moderado'], ['3–8', 'Grave: risco para via aérea'],
      ]},
      { tipo: 'lista', titulo: 'Bom saber', itens: [
        'Registre cada componente, não só o total (ex.: AO3 V4 M6 = 13).',
        'Glasgow-P: subtraia a reatividade pupilar (0 ambas reagem, 1 uma não reage, 2 nenhuma reage).',
        'Queda de 2 pontos ou mais: comunique imediatamente.',
      ]},
    ],
  },

  /* ---------------- DISPOSITIVOS (novos) ---------------- */
  {
    id: 'cvc',
    cat: 'dispositivos',
    titulo: 'Cateter venoso central',
    resumo: 'Cuidados de manutenção para prevenir infecção.',
    tags: ['cvc', 'acesso central', 'picc', 'curativo', 'infecção de corrente sanguínea'],
    secoes: [
      { tipo: 'lista', titulo: 'Cuidados', itens: [
        'Desinfete as conexões com álcool 70% por fricção (5 a 15 segundos) antes de cada acesso.',
        'Curativo com gaze: troca a cada 48 h; filme transparente: até 7 dias, ou antes se úmido, solto ou sujo.',
        'Identifique cada via e mantenha o sistema fechado.',
        'Avalie diariamente o óstio: hiperemia, secreção, dor.',
        'Nunca tracione nem reposicione o cateter.',
      ]},
      { tipo: 'alerta', titulo: 'Comunique', itens: [
        'Febre sem outro foco, secreção no óstio ou cateter deslocado.',
        'Dispneia súbita durante manipulação (risco de embolia gasosa).',
      ]},
    ],
  },
  {
    id: 'dreno-torax',
    cat: 'dispositivos',
    titulo: 'Dreno de tórax (selo d’água)',
    resumo: 'Como funciona o sistema e o que observar.',
    tags: ['drenagem torácica', 'pneumotórax', 'derrame pleural', 'selo dágua', 'frasco'],
    secoes: [
      { tipo: 'lista', titulo: 'Funcionamento', itens: [
        'A haste do frasco fica submersa cerca de 2 cm na água estéril: o ar sai e não volta.',
        'Oscilação do nível da água com a respiração indica sistema funcionando.',
        'Borbulhamento contínuo pode indicar escape de ar: comunique.',
      ]},
      { tipo: 'passos', titulo: 'Cuidados', itens: [
        'Mantenha o frasco sempre abaixo do nível do tórax, inclusive no transporte.',
        'Evite dobras e alças pendentes na extensão.',
        'Não clampeie o dreno sem ordem: o clampeamento pode causar pneumotórax hipertensivo.',
        'Marque o nível do líquido e registre volume e aspecto no horário definido.',
        'Curativo do óstio com técnica asséptica.',
      ]},
      { tipo: 'alerta', titulo: 'Emergência', itens: [
        'Desconexão: mantenha a extremidade em água estéril e chame o enfermeiro.',
        'Saída acidental do dreno: cubra o orifício com curativo e comunique na hora.',
        'Dispneia súbita, enfisema subcutâneo ou sangramento intenso.',
      ]},
    ],
  },

  /* ---------------- CURATIVOS E LESÕES ---------------- */
  {
    id: 'materiais-curativo',
    cat: 'curativos',
    titulo: 'Materiais de curativo e coberturas',
    resumo: 'Para que serve cada cobertura e quando não usar.',
    tags: ['cobertura', 'hidrocoloide', 'alginato', 'hidrogel', 'age', 'carvão', 'papaína', 'espuma', 'colagenase', 'sulfadiazina'],
    secoes: [
      { tipo: 'lista', titulo: 'Material básico', itens: [
        'Pacote de curativo (pinças anatômica, dente de rato e Kelly), gaze estéril.',
        'SF 0,9% morno, seringa de 20 mL e agulha 40×12 para irrigação em jato.',
        'Luvas de procedimento e estéreis, cobertura indicada e fita adesiva.',
      ]},
      { tipo: 'tabela', titulo: 'Coberturas mais usadas', linhas: [
        ['AGE (ácidos graxos essenciais)', 'Hidrata e protege a pele; prevenção de LP e feridas em granulação'],
        ['Hidrocoloide', 'Feridas limpas com pouco exsudato; troca até 7 dias. Não usar em feridas infectadas'],
        ['Hidrogel', 'Amolece necrose e esfacelo em feridas secas (desbridamento autolítico)'],
        ['Alginato de cálcio', 'Exsudato moderado a intenso e sangramento leve. Precisa de cobertura secundária'],
        ['Espuma (poliuretano)', 'Exsudato moderado a intenso; protege áreas de pressão'],
        ['Carvão ativado com prata', 'Feridas infectadas, com odor e exsudato. Não recortar'],
        ['Filme transparente', 'Proteção de pele íntegra e fixação de cateteres. Não usar em feridas com exsudato'],
        ['Papaína', 'Desbridamento químico; concentração conforme o tecido (maior para necrose)'],
        ['Colagenase', 'Desbridamento enzimático de tecido desvitalizado'],
        ['Sulfadiazina de prata 1%', 'Queimaduras; ação antimicrobiana'],
      ]},
      { tipo: 'alerta', titulo: 'Atenção', itens: [
        'A escolha da cobertura é do enfermeiro, conforme avaliação da ferida e protocolo.',
        'Cobertura certa na ferida errada atrasa a cicatrização.',
      ]},
    ],
  },
  {
    id: 'tecnica-curativo',
    cat: 'curativos',
    titulo: 'Avaliação da ferida e técnica de curativo',
    resumo: 'Tipos de tecido, exsudato e sequência de limpeza.',
    tags: ['ferida', 'granulação', 'esfacelo', 'necrose', 'exsudato', 'infecção', 'limpeza'],
    secoes: [
      { tipo: 'tabela', titulo: 'Tecidos da ferida', linhas: [
        ['Vermelho vivo', 'Granulação: tecido saudável, proteger'],
        ['Rosa', 'Epitelização: fase final'],
        ['Amarelo', 'Esfacelo: tecido desvitalizado, precisa ser removido'],
        ['Preto ou marrom', 'Necrose (escara): avaliar desbridamento'],
      ]},
      { tipo: 'tabela', titulo: 'Exsudato', linhas: [
        ['Seroso', 'Claro, aquoso'],
        ['Sanguinolento', 'Vermelho, com sangue'],
        ['Serossanguinolento', 'Rosado'],
        ['Purulento', 'Espesso, amarelo-esverdeado: sinal de infecção'],
      ]},
      { tipo: 'passos', titulo: 'Sequência do curativo', itens: [
        'Higienize as mãos, explique o procedimento e posicione o paciente.',
        'Retire o curativo anterior com luva de procedimento, umedecendo se aderido.',
        'Avalie: tamanho, tecido, exsudato, odor, bordas e pele ao redor.',
        'Limpe com SF 0,9% em jato, da área menos contaminada para a mais contaminada.',
        'Ferida limpa: do centro para as bordas. Ferida infectada: das bordas para o centro.',
        'Seque a pele ao redor (não o leito), aplique a cobertura e fixe.',
        'Registre data, avaliação da ferida, cobertura usada e reação do paciente.',
      ]},
      { tipo: 'alerta', titulo: 'Sinais de infecção', itens: [
        'Calor, rubor, edema e dor aumentados.',
        'Exsudato purulento, odor fétido, aumento da ferida ou febre.',
      ]},
    ],
  },
  {
    id: 'lesao-pressao',
    cat: 'curativos',
    titulo: 'Lesão por pressão: classificação',
    resumo: 'Estágios segundo a NPIAP e locais mais comuns.',
    tags: ['lp', 'úlcera de pressão', 'escara', 'estágio', 'npiap', 'sacral'],
    secoes: [
      { tipo: 'tabela', titulo: 'Classificação', linhas: [
        ['Estágio 1', 'Pele íntegra com eritema que não embranquece à pressão'],
        ['Estágio 2', 'Perda parcial da pele, com derme exposta (leito rosa, úmido) ou bolha'],
        ['Estágio 3', 'Perda total da pele; gordura visível, sem expor músculo ou osso'],
        ['Estágio 4', 'Perda total da pele e tecidos, com exposição de músculo, tendão ou osso'],
        ['Não classificável', 'Leito coberto por esfacelo ou escara, impedindo ver a profundidade'],
        ['Tissular profunda', 'Área roxa, marrom ou vermelho-escura persistente, pele íntegra ou bolha com sangue'],
      ]},
      { tipo: 'lista', titulo: 'Também existem', itens: [
        'LP relacionada a dispositivo médico (sondas, máscaras, cateteres, talas).',
        'LP em mucosas (por tubo, sonda): não recebe estágio.',
      ]},
      { tipo: 'lista', titulo: 'Locais mais comuns', itens: [
        'Sacro e cóccix, calcâneos, trocânteres, ísquios.',
        'Região occipital, escápulas, cotovelos, maléolos e orelhas.',
      ]},
      { tipo: 'alerta', titulo: 'Atenção', itens: [
        'Não use a classificação em sentido reverso: uma LP estágio 3 que cicatriza não vira estágio 1.',
        'Toda LP é registrada e notificada conforme o protocolo da instituição.',
      ]},
    ],
  },
  {
    id: 'prevencao-lp',
    cat: 'curativos',
    titulo: 'Lesão por pressão: prevenção e Braden',
    resumo: 'Avaliação de risco e medidas de prevenção.',
    tags: ['braden', 'mudança de decúbito', 'prevenção', 'lp', 'risco'],
    secoes: [
      { tipo: 'tabela', titulo: 'Escala de Braden (6 a 23 pontos)', linhas: [
        ['Avalia', 'Percepção sensorial, umidade, atividade, mobilidade, nutrição, fricção e cisalhamento'],
        ['15–18', 'Risco baixo'],
        ['13–14', 'Risco moderado'],
        ['10–12', 'Risco alto'],
        ['≤ 9', 'Risco muito alto'],
      ]},
      { tipo: 'lista', titulo: 'Medidas de prevenção', itens: [
        'Avalie o risco na admissão e repita conforme protocolo.',
        'Mudança de decúbito programada (em geral a cada 2 h), individualizada.',
        'Cabeceira até 30° quando possível, para reduzir cisalhamento.',
        'Calcâneos flutuando (travesseiro sob as pernas, não sob os calcanhares).',
        'Pele limpa, seca e hidratada; controle de umidade (fralda, suor, drenagens).',
        'Colchão adequado e coxins; não massageie proeminências ósseas avermelhadas.',
        'Inspecione a pele sob dispositivos a cada turno.',
      ]},
    ],
  },

  /* ---------------- ANOTAÇÃO DE ENFERMAGEM ---------------- */
  {
    id: 'anotacao-regras',
    cat: 'registro',
    titulo: 'Anotação de enfermagem: regras',
    resumo: 'O que é, quem faz e como registrar corretamente.',
    tags: ['registro', 'prontuário', 'evolução', 'cofen', 'rasura', 'carimbo'],
    secoes: [
      { tipo: 'tabela', titulo: 'Anotação x evolução', linhas: [
        ['Anotação', 'Registro do que foi observado e feito, no momento. Toda a equipe de enfermagem'],
        ['Evolução', 'Análise do estado do paciente nas últimas 24 h e plano. Privativa do enfermeiro'],
      ]},
      { tipo: 'lista', titulo: 'Como registrar', itens: [
        'Data e horário em cada registro, em ordem cronológica.',
        'Letra legível, linguagem objetiva e técnica, sem abreviações não padronizadas.',
        'Registre o que foi feito e observado, não o que será feito.',
        'Inclua o que o paciente refere, entre aspas quando for fala dele.',
        'Não deixe linhas em branco entre registros.',
        'Identificação ao final: nome, categoria e número do COREN (Res. COFEN nº 545/2017).',
        'Estudante: identifique-se como estudante e tenha o registro validado pelo supervisor, conforme a instituição.',
      ]},
      { tipo: 'alerta', titulo: 'Nunca', itens: [
        'Use corretivo, apague ou rasure.',
        'Errou: passe um traço sobre o erro, escreva “digo” ou “sem efeito” e continue o registro correto.',
        'Registre por outra pessoa ou antes de realizar o cuidado.',
      ]},
    ],
  },
  {
    id: 'anotacao-modelo',
    cat: 'registro',
    titulo: 'Anotação de enfermagem: modelo',
    resumo: 'Roteiro do que observar e exemplo pronto.',
    tags: ['exemplo', 'admissão', 'roteiro', 'registro', 'céfalo-caudal'],
    secoes: [
      { tipo: 'passos', titulo: 'Roteiro (da cabeça aos pés)', itens: [
        'Nível de consciência e orientação, comportamento.',
        'Queixas do paciente (dor com escala 0–10, náusea, falta de ar).',
        'Sinais vitais e oxigenoterapia, se houver.',
        'Dispositivos: acesso venoso (local, aspecto), sondas, drenos, curativos.',
        'Alimentação, eliminações (diurese e evacuação) e higiene.',
        'Procedimentos, medicações e exames realizados.',
        'Intercorrências e a quem foram comunicadas.',
      ]},
      { tipo: 'texto', titulo: 'Exemplo', texto: '29/10/2026 – 14h30 – Paciente no leito 5, consciente, orientado, comunicativo. Refere dor abdominal em epigástrio, nota 6/10. PA 130/80 mmHg, FC 88 bpm, FR 18 irpm, SpO₂ 97% em ar ambiente, Tax 36,5 °C. Acesso venoso periférico em antebraço esquerdo, sem sinais flogísticos, com SF 0,9% a 21 gts/min. Administrada dipirona EV conforme prescrição médica. Diurese espontânea, amarelo-clara. Comunicada a enfermeira responsável sobre a dor. Nome Sobrenome – Estudante de Enfermagem.' },
    ],
  },

  /* ---------------- MEDICAÇÕES (novo) ---------------- */
  {
    id: 'medicacoes-basicas',
    cat: 'medicacoes',
    titulo: 'Medicações básicas do PS',
    resumo: 'Para que servem e o que observar após administrar.',
    tags: ['dipirona', 'paracetamol', 'cetoprofeno', 'tramadol', 'morfina', 'ondansetrona', 'metoclopramida', 'buscopan', 'omeprazol', 'dexametasona', 'furosemida', 'prometazina', 'naloxona'],
    secoes: [
      { tipo: 'tabela', titulo: 'Medicamento e o que observar', linhas: [
        ['Dipirona', 'Analgésico e antitérmico. Hipotensão se EV rápido; alergia'],
        ['Paracetamol', 'Analgésico e antitérmico. Respeitar dose máxima diária; cuidado em hepatopatas'],
        ['Cetoprofeno', 'Anti-inflamatório (AINE). Gastrite, piora da função renal, alergia a AINE'],
        ['Tramadol', 'Opioide fraco. Náusea, tontura; infundir lentamente'],
        ['Morfina', 'Opioide forte, alta vigilância. Depressão respiratória e sonolência; antídoto: naloxona'],
        ['Ondansetrona', 'Antiemético. Pode alterar o ritmo cardíaco (QT longo)'],
        ['Metoclopramida', 'Antiemético. Reações extrapiramidais: inquietação, tremor, rigidez'],
        ['Escopolamina (Buscopan)', 'Antiespasmódico para cólicas. Boca seca, retenção urinária, taquicardia'],
        ['Omeprazol', 'Protetor gástrico. EV: diluir e infundir conforme o fabricante'],
        ['Dexametasona, hidrocortisona', 'Corticoides. Elevam a glicemia'],
        ['Furosemida', 'Diurético. Controle de diurese, hipotensão e potássio baixo'],
        ['Prometazina', 'Antialérgico, causa sedação. IM profunda; EV pode lesionar gravemente o tecido'],
      ]},
      { tipo: 'alerta', titulo: 'Atenção', itens: [
        'Doses sempre conforme prescrição: o app não traz doses de propósito.',
        'Pergunte sobre alergias antes de qualquer medicação.',
        'Após opioide: monitore FR, sonolência e SpO₂.',
      ]},
    ],
  },

  /* ---------------- COMORBIDADES ---------------- */
  {
    id: 'has',
    cat: 'comorbidades',
    titulo: 'Hipertensão arterial',
    resumo: 'A comorbidade mais frequente no PS.',
    tags: ['has', 'pressão alta', 'hipertensão', 'anti-hipertensivo'],
    secoes: [
      { tipo: 'lista', titulo: 'O que saber', itens: [
        'PA persistentemente ≥ 140/90 mmHg.',
        'Geralmente silenciosa; lesa coração, rins, cérebro e olhos com o tempo.',
        'Fatores de risco: idade, obesidade, sal, sedentarismo, tabagismo, diabetes.',
      ]},
      { tipo: 'lista', titulo: 'Cuidados de enfermagem', itens: [
        'Afira com técnica correta e após repouso.',
        'Pergunte quais anti-hipertensivos usa e se tomou hoje.',
        'Valorize cefaleia intensa, dor torácica, alteração visual ou neurológica.',
      ]},
      { tipo: 'texto', titulo: 'Veja também', texto: 'Crise hipertensiva, em Emergências.' },
    ],
  },
  {
    id: 'diabetes',
    cat: 'comorbidades',
    titulo: 'Diabetes mellitus',
    resumo: 'Tipos, descompensações e cuidados diários.',
    tags: ['dm', 'diabetes', 'insulina', 'cetoacidose', 'hiperglicemia', 'pé diabético', 'metformina'],
    secoes: [
      { tipo: 'tabela', titulo: 'Tipos', linhas: [
        ['Tipo 1', 'Pâncreas não produz insulina; uso obrigatório de insulina'],
        ['Tipo 2', 'Resistência à insulina; comprimidos e/ou insulina'],
      ]},
      { tipo: 'lista', titulo: 'Descompensações', itens: [
        'Hipoglicemia: ver tópico em Emergências.',
        'Hiperglicemia: sede, urina abundante, cansaço, perda de peso.',
        'Cetoacidose: hálito cetônico (frutado), respiração rápida e profunda, vômitos, desidratação.',
      ]},
      { tipo: 'lista', titulo: 'Cuidados', itens: [
        'Glicemia capilar nos horários prescritos.',
        'Insulina com seringa própria, rodízio de locais e horário certo em relação à refeição.',
        'Inspecione os pés: feridas, calos, alteração de cor ou sensibilidade.',
        'Metformina e contraste iodado: siga o protocolo de suspensão da instituição.',
      ]},
    ],
  },
  {
    id: 'insuficiencia-cardiaca',
    cat: 'comorbidades',
    titulo: 'Insuficiência cardíaca',
    resumo: 'Sinais de descompensação e controle hídrico.',
    tags: ['ic', 'icc', 'congestão', 'edema', 'dispneia', 'balanço hídrico'],
    secoes: [
      { tipo: 'lista', titulo: 'Sinais de descompensação', itens: [
        'Falta de ar ao esforço ou deitado (ortopneia); acorda sem ar à noite.',
        'Edema de membros inferiores, ganho de peso rápido (1–2 kg em poucos dias).',
        'Estertores (crepitações) na ausculta, cansaço intenso.',
      ]},
      { tipo: 'lista', titulo: 'Cuidados', itens: [
        'Cabeceira elevada.',
        'Balanço hídrico e peso diário, no mesmo horário e balança.',
        'Restrição de líquidos e sal conforme prescrição.',
        'Em uso de diurético: atenção a hipotensão e potássio.',
      ]},
    ],
  },
  {
    id: 'dpoc',
    cat: 'comorbidades',
    titulo: 'DPOC',
    resumo: 'Doença pulmonar crônica: cuidado com o oxigênio.',
    tags: ['dpoc', 'enfisema', 'bronquite crônica', 'tabagismo', 'oxigênio', 'retenção de co2'],
    secoes: [
      { tipo: 'lista', titulo: 'O que saber', itens: [
        'Tosse crônica, expectoração e falta de ar progressiva.',
        'Principal causa: tabagismo.',
        'Exacerbação: piora da falta de ar, mais secreção ou mudança de cor.',
      ]},
      { tipo: 'alerta', titulo: 'Oxigênio', itens: [
        'Alvo de SpO₂ entre 88 e 92%: oxigênio em excesso pode reter CO₂ e causar sonolência.',
        'Prefira dispositivos com FiO₂ controlada (Venturi), conforme prescrição.',
      ]},
      { tipo: 'lista', titulo: 'Cuidados', itens: [
        'Posição sentada ou semissentada.',
        'Oriente o uso correto do inalador (com espaçador quando indicado).',
        'Observe sonolência e confusão: podem indicar retenção de CO₂.',
      ]},
    ],
  },
  {
    id: 'drc',
    cat: 'comorbidades',
    titulo: 'Doença renal crônica',
    resumo: 'Fístula, controle hídrico e potássio.',
    tags: ['drc', 'insuficiência renal', 'hemodiálise', 'fístula', 'potássio', 'diálise'],
    secoes: [
      { tipo: 'lista', titulo: 'O que saber', itens: [
        'Perda progressiva da função dos rins; casos avançados fazem diálise.',
        'Principais causas: diabetes e hipertensão.',
      ]},
      { tipo: 'alerta', titulo: 'Fístula arteriovenosa', itens: [
        'Não afira PA, não puncione e não garroteie o braço da fístula.',
        'Palpe o frêmito (vibração): se ausente, comunique.',
      ]},
      { tipo: 'lista', titulo: 'Cuidados', itens: [
        'Balanço hídrico e peso; restrição de líquidos conforme prescrição.',
        'Atenção ao potássio alto: fraqueza, arritmia.',
        'Muitas medicações têm dose ajustada: confira sempre a prescrição.',
      ]},
    ],
  },

  /* ---------------- ONCOLOGIA ---------------- */
  {
    id: 'neutropenia-febril',
    cat: 'oncologia',
    titulo: 'Neutropenia febril',
    resumo: 'Emergência oncológica: antibiótico em até 1 hora.',
    tags: ['febre', 'quimioterapia', 'neutropenia', 'imunossuprimido', 'oncologia'],
    secoes: [
      { tipo: 'tabela', titulo: 'Definição', linhas: [
        ['Febre', '≥ 38,3 °C em medida única ou ≥ 38 °C mantida por 1 hora'],
        ['Neutropenia', 'Neutrófilos < 500/mm³ (ou queda esperada para esse nível)'],
      ]},
      { tipo: 'passos', titulo: 'Primeiras ações', itens: [
        'Paciente em quimioterapia com febre: trate como emergência e comunique já.',
        'Sinais vitais completos e avaliação de sinais de sepse.',
        'Coleta de hemoculturas e exames conforme prescrição.',
        'Antibiótico em até 1 hora da chegada.',
        'Precauções para proteção do paciente conforme protocolo.',
      ]},
      { tipo: 'alerta', titulo: 'Nunca', itens: [
        'Afira temperatura retal ou faça procedimentos retais.',
        'Espere o resultado do hemograma para iniciar o atendimento.',
      ]},
    ],
  },
  {
    id: 'cateter-implantado',
    cat: 'oncologia',
    titulo: 'Cateter totalmente implantado',
    resumo: 'Port-a-cath: punção, flush e manutenção.',
    tags: ['port-a-cath', 'portocath', 'agulha de huber', 'quimioterapia', 'flush', 'cvc'],
    secoes: [
      { tipo: 'passos', titulo: 'Pontos-chave', itens: [
        'Punção com técnica asséptica, usando apenas agulha de Huber (não cortante).',
        'Confirme refluxo de sangue antes de infundir.',
        'Use seringa de 10 mL ou maior, para não gerar pressão excessiva.',
        'Flush com SF 0,9% em técnica pulsátil (turbilhonamento) antes e depois das medicações.',
        'Heparinização ou selo conforme protocolo ao retirar a agulha.',
      ]},
      { tipo: 'alerta', titulo: 'Comunique', itens: [
        'Ausência de refluxo, resistência ao flush ou dor durante a infusão.',
        'Edema, hiperemia ou secreção no local do reservatório.',
      ]},
    ],
  },
  {
    id: 'extravasamento',
    cat: 'oncologia',
    titulo: 'Extravasamento de quimioterápico',
    resumo: 'Reconhecer cedo e agir conforme o protocolo.',
    tags: ['vesicante', 'irritante', 'quimioterapia', 'extravasamento', 'necrose'],
    secoes: [
      { tipo: 'lista', titulo: 'Sinais', itens: [
        'Dor, ardência, edema ou vermelhidão no local da punção.',
        'Diminuição da velocidade de infusão ou ausência de refluxo.',
      ]},
      { tipo: 'passos', titulo: 'Conduta inicial', itens: [
        'Pare a infusão imediatamente.',
        'Não retire o cateter ainda: aspire o resíduo do medicamento pelo próprio cateter.',
        'Retire o cateter e eleve o membro.',
        'Compressa fria ou quente conforme o medicamento e o protocolo da instituição.',
        'Comunique, delimite a área com caneta e registre tudo.',
      ]},
    ],
  },
  {
    id: 'cuidados-oncologia',
    cat: 'oncologia',
    titulo: 'Segurança e cuidados gerais',
    resumo: 'Proteção da equipe, efeitos da quimioterapia e emergências.',
    tags: ['quimioterapia', 'mucosite', 'epi', 'excretas', 'síndrome de lise tumoral', 'compressão medular', 'dor oncológica'],
    secoes: [
      { tipo: 'lista', titulo: 'Proteção da equipe', itens: [
        'Quimioterápicos são preparados em área própria; use os EPIs do protocolo ao administrar.',
        'Excretas de pacientes em quimioterapia (urina, vômito, fezes) exigem luvas e avental, em geral por 48 h após a dose.',
      ]},
      { tipo: 'lista', titulo: 'Efeitos frequentes', itens: [
        'Náuseas e vômitos: antiemético nos horários prescritos.',
        'Mucosite: higiene oral suave, escova macia.',
        'Fadiga, queda de cabelo, risco de sangramento e de infecção.',
      ]},
      { tipo: 'alerta', titulo: 'Emergências oncológicas', itens: [
        'Síndrome da veia cava superior: edema de face e pescoço, falta de ar.',
        'Compressão medular: dor nas costas com fraqueza nas pernas ou perda de controle urinário.',
        'Hipercalcemia: confusão, sede, constipação.',
        'Síndrome de lise tumoral: alteração da diurese, arritmias.',
      ]},
    ],
  },

  /* ---------------- EXAMES DO CORAÇÃO (novo) ---------------- */
  {
    id: 'ecocardiograma',
    cat: 'cardio',
    titulo: 'Ecocardiograma',
    resumo: 'O ultrassom do coração: tipos e preparo do paciente.',
    tags: ['eco', 'ecocardiograma', 'ultrassom', 'transesofágico', 'fração de ejeção', 'estresse'],
    secoes: [
      { tipo: 'tabela', titulo: 'ECG x Ecocardiograma', linhas: [
        ['ECG', 'Registra a atividade elétrica do coração (ritmo, isquemia)'],
        ['Ecocardiograma', 'Ultrassom: mostra estrutura, válvulas, força de contração e derrame pericárdico'],
      ]},
      { tipo: 'tabela', titulo: 'Tipos', linhas: [
        ['Transtorácico', 'Transdutor no tórax. Não invasivo, sem jejum'],
        ['Transesofágico', 'Sonda pelo esôfago, com sedação. Exige jejum'],
        ['De estresse', 'Com esforço físico ou medicamento (ex.: dobutamina)'],
      ]},
      { tipo: 'passos', titulo: 'Preparo para o transesofágico', itens: [
        'Confira jejum conforme orientação do serviço e o termo de consentimento.',
        'Acesso venoso periférico e retirada de próteses dentárias.',
        'Monitorização de SpO₂, FC e PA durante e após a sedação.',
        'Após o exame: nada por boca até o reflexo de deglutição voltar (anestesia da garganta).',
      ]},
      { tipo: 'lista', titulo: 'Termo que aparece no laudo', itens: [
        'Fração de ejeção (FE): quanto do sangue o ventrículo esquerdo bombeia a cada batimento. Valores baixos indicam coração “fraco”.',
      ]},
    ],
  },

  /* ---------------- ANATOMIA APLICADA ---------------- */
  {
    id: 'anatomia-veias',
    cat: 'anatomia',
    titulo: 'Veias do membro superior',
    resumo: 'Onde puncionar para acesso e coleta.',
    tags: ['veia', 'cefálica', 'basílica', 'intermédia', 'mediana', 'fossa cubital', 'punção', 'coleta'],
    secoes: [
      { tipo: 'tabela', titulo: 'Principais veias', linhas: [
        ['Metacarpais dorsais', 'Dorso da mão: boas para começar pela região distal'],
        ['Cefálica', 'Face lateral (lado do polegar) do antebraço e braço; calibrosa'],
        ['Basílica', 'Face medial (lado do dedo mínimo); próxima a nervos e artéria'],
        ['Intermédia do cotovelo (mediana)', 'Fossa cubital: preferida para coleta de sangue'],
      ]},
      { tipo: 'lista', titulo: 'Dicas', itens: [
        'Para acesso de permanência, evite a fossa cubital (área de flexão).',
        'Palpe: veia boa é elástica e reenche após pressão.',
        'Prefira o membro não dominante quando possível.',
      ]},
    ],
  },
  {
    id: 'anatomia-im',
    cat: 'anatomia',
    titulo: 'Músculos para injeção IM',
    resumo: 'Como localizar cada região com segurança.',
    tags: ['deltoide', 'ventroglútea', 'hochstetter', 'vasto lateral', 'dorsoglútea', 'intramuscular'],
    secoes: [
      { tipo: 'tabela', titulo: 'Localização', linhas: [
        ['Deltoide', 'Cerca de 3 a 5 cm (2 a 3 dedos) abaixo do acrômio, na face lateral do braço'],
        ['Ventroglútea (Hochstetter)', 'Palma no trocânter maior, indicador na espinha ilíaca anterossuperior, médio afastado: aplique no centro do “V”'],
        ['Vasto lateral', 'Terço médio da face anterolateral da coxa'],
        ['Dorsoglútea', 'Quadrante superior externo do glúteo'],
      ]},
      { tipo: 'alerta', titulo: 'Por que a ventroglútea é preferida', itens: [
        'Longe de grandes vasos e nervos; a dorsoglútea tem risco de atingir o nervo ciático.',
      ]},
    ],
  },
  {
    id: 'anatomia-coracao',
    cat: 'anatomia',
    titulo: 'Coração, tórax e pulsos',
    resumo: 'Circulação, focos de ausculta e pulsos periféricos.',
    tags: ['coração', 'circulação', 'ausculta', 'focos', 'pulso', 'ângulo de louis', 'intercostal'],
    secoes: [
      { tipo: 'passos', titulo: 'Caminho do sangue', itens: [
        'Veias cavas → átrio direito → valva tricúspide → ventrículo direito.',
        'Valva pulmonar → artéria pulmonar → pulmões (troca gasosa).',
        'Veias pulmonares → átrio esquerdo → valva mitral → ventrículo esquerdo.',
        'Valva aórtica → aorta → corpo.',
      ]},
      { tipo: 'tabela', titulo: 'Focos de ausculta', linhas: [
        ['Aórtico', '2º espaço intercostal, borda direita do esterno'],
        ['Pulmonar', '2º espaço intercostal, borda esquerda do esterno'],
        ['Tricúspide', 'Borda esternal esquerda inferior (4º–5º espaço)'],
        ['Mitral', '5º espaço intercostal, linha hemiclavicular esquerda'],
      ]},
      { tipo: 'lista', titulo: 'Para contar os espaços intercostais', itens: [
        'Ângulo de Louis (saliência do esterno) fica na altura da 2ª costela; o espaço logo abaixo é o 2º.',
      ]},
      { tipo: 'tabela', titulo: 'Pulsos', linhas: [
        ['Carotídeo', 'Pescoço, ao lado da traqueia (usado na PCR)'],
        ['Braquial', 'Face medial do braço, acima do cotovelo'],
        ['Radial', 'Punho, lado do polegar'],
        ['Femoral', 'Região inguinal'],
        ['Poplíteo', 'Atrás do joelho'],
        ['Pedioso e tibial posterior', 'Dorso do pé e atrás do maléolo medial'],
      ]},
    ],
  },
  {
    id: 'anatomia-sondagens',
    cat: 'anatomia',
    titulo: 'Anatomia para sondagens',
    resumo: 'Trato urinário e digestivo aplicados às sondas.',
    tags: ['uretra', 'bexiga', 'esôfago', 'estômago', 'piloro', 'sondagem'],
    secoes: [
      { tipo: 'tabela', titulo: 'Uretra', linhas: [
        ['Feminina', 'Curta (cerca de 4 cm): maior risco de infecção urinária'],
        ['Masculina', 'Longa (cerca de 18–20 cm) e com curvas: elevar o pênis facilita a passagem da sonda'],
      ]},
      { tipo: 'tabela', titulo: 'Trato digestivo', linhas: [
        ['Esôfago', 'Atrás da traqueia: por isso a sonda pode ir para a via aérea'],
        ['Estômago', 'Destino da SNG'],
        ['Piloro', 'Saída do estômago; a SNE passa por ele até o duodeno ou jejuno'],
      ]},
      { tipo: 'lista', titulo: 'Relação com a prática', itens: [
        'A medida nariz–orelha–xifoide estima a distância até o estômago.',
        'Flexionar o pescoço durante a passagem ajuda a fechar a via aérea e direcionar a sonda para o esôfago.',
      ]},
    ],
  },
];

export const SIMULADOS = [
  {
    id: 'q1', topico: 'pcr',
    caso: 'Seu José, 62 anos, aguarda atendimento e cai no chão. Ele não responde, não respira normalmente e você não sente pulso carotídeo.',
    pergunta: 'Qual a primeira conduta após chamar ajuda?',
    opcoes: ['Aferir a pressão arterial', 'Iniciar compressões torácicas', 'Puncionar acesso venoso', 'Fazer glicemia capilar'],
    correta: 1,
    explicacao: 'Sem pulso, as compressões devem começar imediatamente. Cada minuto sem RCP reduz a chance de sobrevida.',
  },
  {
    id: 'q2', topico: 'pcr',
    caso: 'Durante a RCP em um adulto sem via aérea avançada, o colega pergunta qual o ritmo de compressões.',
    pergunta: 'Qual a frequência e a relação compressão:ventilação corretas?',
    opcoes: ['80–100/min, 15:2', '100–120/min, 30:2', '120–140/min, 30:2', '100–120/min, 15:1'],
    correta: 1,
    explicacao: 'Adulto: 100 a 120 compressões por minuto, profundidade de 5 a 6 cm e relação 30:2 sem via aérea avançada.',
  },
  {
    id: 'q3', topico: 'gotejamento',
    caso: 'Prescrição: 1.000 mL de SF 0,9% em 12 horas, equipo de macrogotas.',
    pergunta: 'Qual o gotejamento aproximado?',
    opcoes: ['14 gotas/min', '28 gotas/min', '42 gotas/min', '83 gotas/min'],
    correta: 1,
    explicacao: '1.000 ÷ (12 × 3) = 27,7 → aproximadamente 28 gotas/min.',
  },
  {
    id: 'q4', topico: 'avc',
    caso: 'Dona Maria, 70 anos, chega com a boca torta e fala enrolada. A filha diz que a viu bem às 7h; agora são 9h.',
    pergunta: 'Qual informação é mais importante registrar imediatamente?',
    opcoes: ['Peso estimado', 'Última vez em que foi vista normal (7h)', 'Nome do médico da família', 'Data da última refeição'],
    correta: 1,
    explicacao: 'O horário em que foi vista bem pela última vez define a elegibilidade para trombólise (até 4,5 h).',
  },
  {
    id: 'q5', topico: 'avc',
    caso: 'Paciente com confusão e fraqueza em um lado do corpo. Antes de acionar o protocolo de AVC, o enfermeiro pede um exame à beira do leito.',
    pergunta: 'Qual exame é obrigatório para descartar um diagnóstico que imita AVC?',
    opcoes: ['Glicemia capilar', 'Temperatura', 'Teste de gravidez', 'Ausculta pulmonar'],
    correta: 0,
    explicacao: 'Hipoglicemia pode causar déficit neurológico parecido com AVC. Glicemia capilar é rápida e muda a conduta.',
  },
  {
    id: 'q6', topico: 'sng-sne',
    caso: 'Após passar uma sonda nasoenteral, o colega quer iniciar a dieta porque ouviu ar no epigástrio com o estetoscópio.',
    pergunta: 'Qual a conduta correta?',
    opcoes: ['Iniciar a dieta em gotejamento lento', 'Aguardar a confirmação da posição por raio X', 'Injetar água para testar', 'Elevar a cabeceira e iniciar a dieta'],
    correta: 1,
    explicacao: 'Na SNE, a dieta só começa após confirmação radiológica. A ausculta isolada não garante a posição.',
  },
  {
    id: 'q7', topico: 'anafilaxia',
    caso: 'Minutos após iniciar um antibiótico EV, a paciente apresenta placas vermelhas pelo corpo, rouquidão e PA 80/50 mmHg.',
    pergunta: 'Qual a primeira medicação esperada na prescrição?',
    opcoes: ['Anti-histamínico EV', 'Corticoide EV', 'Adrenalina intramuscular', 'Dipirona EV'],
    correta: 2,
    explicacao: 'Anafilaxia: interromper a infusão e administrar adrenalina IM no vasto lateral. As outras drogas são adjuvantes.',
  },
  {
    id: 'q8', topico: 'sepse',
    caso: 'Paciente com febre, FR 26 irpm, confuso e PAS 92 mmHg. O médico prescreve hemoculturas e antibiótico.',
    pergunta: 'Qual a ordem correta?',
    opcoes: ['Antibiótico primeiro, hemoculturas depois', 'Hemoculturas antes do antibiótico', 'Esperar o resultado do lactato', 'Tanto faz a ordem'],
    correta: 1,
    explicacao: 'Hemoculturas são colhidas antes do antibiótico para não mascarar o resultado, sem atrasar o início do tratamento.',
  },
  {
    id: 'q9', topico: 'hipoglicemia',
    caso: 'Paciente diabético, consciente, sudoreico e trêmulo. Glicemia capilar: 58 mg/dL.',
    pergunta: 'Qual a conduta inicial adequada?',
    opcoes: ['Oferecer 15 g de carboidrato rápido e repetir glicemia em 15 min', 'Aplicar insulina regular', 'Aguardar o almoço', 'Oferecer água e repetir em 1 hora'],
    correta: 0,
    explicacao: 'Regra dos 15: 15 g de carboidrato de absorção rápida e nova glicemia em 15 minutos.',
  },
  {
    id: 'q10', topico: 'alta-vigilancia',
    caso: 'A prescrição contém cloreto de potássio 19,1%.',
    pergunta: 'Qual afirmação é correta?',
    opcoes: ['Pode ser feito em bolus EV lento', 'Deve ser sempre diluído e infundido em bomba, com dupla checagem', 'Pode ser feito IM', 'Não precisa de dupla checagem'],
    correta: 1,
    explicacao: 'KCl concentrado é medicamento de alta vigilância. Bolus EV pode causar parada cardíaca.',
  },
  {
    id: 'q11', topico: 'svd',
    caso: 'Paciente com sonda vesical de demora será transportado para a tomografia.',
    pergunta: 'Onde deve ficar a bolsa coletora?',
    opcoes: ['Sobre o abdome do paciente', 'Abaixo do nível da bexiga, sem tocar o chão', 'Desconectada, para facilitar o transporte', 'Pendurada acima da cabeceira'],
    correta: 1,
    explicacao: 'Abaixo da bexiga evita refluxo de urina; sistema sempre fechado para prevenir infecção.',
  },
  {
    id: 'q12', topico: 'dor-toracica',
    caso: 'Homem de 55 anos chega com aperto no peito há 40 minutos e sudorese.',
    pergunta: 'Em quanto tempo o ECG deve estar pronto?',
    opcoes: ['Até 10 minutos', 'Até 30 minutos', 'Até 1 hora', 'Após avaliação médica'],
    correta: 0,
    explicacao: 'Dor torácica sugestiva de síndrome coronariana: ECG de 12 derivações em até 10 minutos da chegada.',
  },
  {
    id: 'q13', topico: 'lesao-pressao',
    caso: 'Paciente acamado apresenta área avermelhada na região sacral, com pele íntegra, que não clareia ao pressionar com o dedo.',
    pergunta: 'Qual a classificação da lesão?',
    opcoes: ['Estágio 1', 'Estágio 2', 'Estágio 3', 'Tissular profunda'],
    correta: 0,
    explicacao: 'Estágio 1: pele íntegra com eritema que não embranquece. No estágio 2 já há perda parcial da pele.',
  },
  {
    id: 'q14', topico: 'prevencao-lp',
    caso: 'Na admissão, a escala de Braden de uma paciente idosa resultou em 11 pontos.',
    pergunta: 'Como se classifica o risco para lesão por pressão?',
    opcoes: ['Sem risco', 'Risco baixo', 'Risco alto', 'Risco muito alto'],
    correta: 2,
    explicacao: 'Braden de 10 a 12 indica risco alto. Quanto menor a pontuação, maior o risco.',
  },
  {
    id: 'q15', topico: 'materiais-curativo',
    caso: 'Ferida com exsudato abundante e pequeno sangramento no leito.',
    pergunta: 'Qual cobertura é mais indicada?',
    opcoes: ['Filme transparente', 'Hidrogel', 'Alginato de cálcio', 'Hidrocoloide'],
    correta: 2,
    explicacao: 'O alginato absorve exsudato moderado a intenso e ajuda na hemostasia. Filme e hidrocoloide não são para muito exsudato; hidrogel é para feridas secas.',
  },
  {
    id: 'q16', topico: 'anotacao-regras',
    caso: 'Ao fazer a anotação, você escreve o membro errado do acesso venoso.',
    pergunta: 'Como corrigir?',
    opcoes: ['Usar corretivo e reescrever', 'Rasurar até ficar ilegível', 'Passar um traço sobre o erro, escrever “digo” e registrar o correto', 'Arrancar a folha e refazer'],
    correta: 2,
    explicacao: 'O prontuário é documento legal: o erro deve continuar legível, com um traço e a palavra “digo” ou “sem efeito”.',
  },
  {
    id: 'q17', topico: 'neutropenia-febril',
    caso: 'Paciente em quimioterapia chega ao PS com temperatura de 38,5 °C.',
    pergunta: 'Qual a conduta correta?',
    opcoes: ['Dar antitérmico e liberar', 'Tratar como emergência: antibiótico em até 1 hora', 'Aguardar 24 h de observação', 'Aferir temperatura retal para confirmar'],
    correta: 1,
    explicacao: 'Neutropenia febril é emergência oncológica. Antibiótico em até 1 hora; temperatura retal é contraindicada.',
  },
  {
    id: 'q18', topico: 'glasgow',
    caso: 'Paciente abre os olhos à pressão, emite apenas sons e retira o membro ao estímulo.',
    pergunta: 'Qual o escore de Glasgow?',
    opcoes: ['6', '8', '10', '12'],
    correta: 1,
    explicacao: 'Abertura ocular à pressão (2) + sons (2) + flexão normal/retirada (4) = 8: considerado grave.',
  },
  {
    id: 'q19', topico: 'dreno-torax',
    caso: 'Paciente com dreno de tórax em selo d’água será levado para o raio X.',
    pergunta: 'Qual o cuidado correto no transporte?',
    opcoes: ['Clampear o dreno durante todo o trajeto', 'Manter o frasco abaixo do nível do tórax, sem clampear', 'Colocar o frasco sobre a maca, ao lado do tórax', 'Esvaziar o frasco antes de sair'],
    correta: 1,
    explicacao: 'O frasco sempre abaixo do tórax impede o retorno do líquido. Clampear sem ordem pode causar pneumotórax hipertensivo.',
  },
  {
    id: 'q20', topico: 'medicacoes-basicas',
    caso: 'Após receber morfina, o paciente está muito sonolento, com FR de 8 irpm.',
    pergunta: 'Qual o antídoto que deve estar disponível?',
    opcoes: ['Flumazenil', 'Naloxona', 'Atropina', 'Glicose 50%'],
    correta: 1,
    explicacao: 'Naloxona reverte a depressão respiratória por opioides. Flumazenil é para benzodiazepínicos.',
  },
  {
    id: 'q21', topico: 'ecocardiograma',
    caso: 'Paciente acabou de fazer ecocardiograma transesofágico e pede água.',
    pergunta: 'Qual a orientação correta?',
    opcoes: ['Liberar água imediatamente', 'Aguardar o retorno do reflexo de deglutição', 'Oferecer apenas alimento pastoso', 'Manter jejum por 24 horas'],
    correta: 1,
    explicacao: 'A garganta é anestesiada no exame. Antes do retorno da deglutição há risco de aspiração.',
  },
  {
    id: 'q22', topico: 'anatomia-veias',
    caso: 'Você precisa coletar sangue para exames na fossa cubital.',
    pergunta: 'Qual veia é preferida nessa região?',
    opcoes: ['Jugular externa', 'Intermédia do cotovelo (mediana)', 'Safena magna', 'Metacarpal dorsal'],
    correta: 1,
    explicacao: 'A intermédia do cotovelo é calibrosa, superficial e fica longe de nervos importantes.',
  },
  {
    id: 'q23', topico: 'aspiracao',
    caso: 'Durante a aspiração da cânula de traqueostomia, a SpO₂ do paciente começa a cair.',
    pergunta: 'Qual é o tempo máximo recomendado para cada aspiração?',
    opcoes: ['Até 10–15 segundos', 'Até 30 segundos', 'Até 1 minuto', 'Até sair toda a secreção'],
    correta: 0,
    explicacao: 'Aspirações longas causam hipóxia. Cada passagem deve durar até 10–15 segundos, com intervalo para recuperar.',
  },
];
