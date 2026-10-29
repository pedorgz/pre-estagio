/* =========================================================
   Pré-Estágio Seguro — Conteúdo
   Material de estudo. Não substitui o protocolo da instituição
   nem a supervisão do enfermeiro/preceptor.
   Para editar: altere os textos abaixo e aumente a versão
   do cache em sw.js (CACHE_VERSION) para os celulares
   baixarem a atualização.
   ========================================================= */

export const CONTENT_VERSION = '2026.10';

export const VITAIS_REF = [
  { sigla: 'FC', valor: '60–100', unidade: 'bpm' },
  { sigla: 'FR', valor: '12–20', unidade: 'irpm' },
  { sigla: 'SpO₂', valor: '≥ 95', unidade: '%' },
  { sigla: 'PA', valor: '< 120/80', unidade: 'mmHg' },
  { sigla: 'Tax', valor: '35,8–37,2', unidade: '°C' },
  { sigla: 'Glicemia', valor: '70–99', unidade: 'mg/dL jejum' },
];

export const CATEGORIAS = [
  { id: 'avaliacao', nome: 'Avaliação e sinais vitais', desc: 'Sinais vitais, classificação de risco, glicemia e ECG', icon: 'pulse' },
  { id: 'dispositivos', nome: 'Sondas e dispositivos', desc: 'Acesso venoso, sondas e oxigenoterapia', icon: 'tube' },
  { id: 'medicacoes', nome: 'Medicações', desc: 'Certos da medicação, cálculos, vias e alta vigilância', icon: 'pill' },
  { id: 'emergencias', nome: 'Emergências frequentes', desc: 'PCR, dor torácica, AVC, sepse e outras', icon: 'siren' },
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
    cat: 'avaliacao',
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
    cat: 'dispositivos',
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
    cat: 'dispositivos',
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
];
