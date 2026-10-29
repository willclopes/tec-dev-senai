---
theme: seriph
background: https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=1920&q=80
class: text-center
highlighter: shiki
lineNumbers: false
info: |
  Apresentação sobre a Reforma Tributária.
drawings:
  persist: false
transition: slide-left
title: Reforma Tributária Brasileira
---

# Reforma Tributária Brasileira
## O Fim do Manicômio Fiscal

Entenda a transição para o IVA Dual e os impactos na prática.

<div class="pt-12">
  <span @click="$slidev.nav.next" class="px-2 py-1 rounded cursor-pointer" hover="bg-white bg-opacity-10">
    Pressione Espaço para começar <carbon:arrow-right class="inline"/>
  </span>
</div>

---
layout: two-cols
---

# O Cenário Atual

Por que a reforma era urgente?

<v-clicks>

- 📉 **Complexidade Extrema:** O Brasil gasta em média 1.500 horas/ano apenas para apurar e pagar impostos.
- 🧮 **Efeito Cascata:** Imposto cobrado sobre imposto ao longo da cadeia produtiva (cumulatividade).
- ⚔️ **Guerra Fiscal:** Estados e municípios competindo com isenções para atrair empresas.
- 🧩 **Obrigações Acessórias:** GIA, DCTF, EFD-Contribuições, SPED Fiscal... um pesadelo para ERPs e contadores.

</v-clicks>

::right::

<div class="flex justify-center items-center h-full">
  <img src="https://images.unsplash.com/photo-1604594849809-dfedbc827105?auto=format&fit=crop&w=600&q=80" class="rounded shadow-lg" />
</div>

---
layout: default
---

# A Solução: O Modelo IVA Dual
Substituição de **5 tributos** por um sistema de base ampla e não cumulativo.

<div class="grid grid-cols-2 gap-4 mt-8">

<div v-click class="bg-gray-100 p-4 rounded-lg shadow dark:bg-gray-800 text-center">
  <h3 class="text-blue-500 font-bold mb-2">Tributos Extintos</h3>
  <ul class="text-left text-sm space-y-2">
    <li>🔴 <b>IPI</b> (Federal)</li>
    <li>🔴 <b>PIS</b> (Federal)</li>
    <li>🔴 <b>COFINS</b> (Federal)</li>
    <li>🔴 <b>ICMS</b> (Estadual)</li>
    <li>🔴 <b>ISS</b> (Municipal)</li>
  </ul>
</div>

<div v-click class="bg-blue-50 p-4 rounded-lg shadow dark:bg-blue-900 text-center">
  <h3 class="text-blue-600 font-bold mb-2">Novos Tributos (IVA Dual)</h3>
  <ul class="text-left text-sm space-y-2">
    <li>🟢 <b>CBS</b> (Federal) <br><span class="text-xs text-gray-500">Contribuição sobre Bens e Serviços</span></li>
    <li>🟢 <b>IBS</b> (Estados/Municípios) <br><span class="text-xs text-gray-500">Imposto sobre Bens e Serviços</span></li>
    <li>⚠️ <b>IS</b> (Imposto Seletivo) <br><span class="text-xs text-gray-500">Sobretaxa para bens prejudiciais (cigarro, álcool)</span></li>
  </ul>
</div>

</div>

---
layout: center
---

# 4 Pilares da Nova Regra

O que muda na essência da tributação?

<div class="grid grid-cols-2 gap-8 mt-8 text-left">

<div v-click>
  <span class="text-2xl">💰</span>
  <h3 class="font-bold mt-2">1. Cobrança no Destino</h3>
  <p class="text-sm opacity-80">O imposto fica para o estado/município onde o produto é consumido, não onde é fabricado. Fim da guerra fiscal.</p>
</div>

<div v-click>
  <span class="text-2xl">🔄</span>
  <h3 class="font-bold mt-2">2. Não-cumulatividade Plena</h3>
  <p class="text-sm opacity-80">Garantia de crédito financeiro de tudo que foi pago na etapa anterior. Chega de "crédito físico" condicionado.</p>
</div>

<div v-click>
  <span class="text-2xl">💸</span>
  <h3 class="font-bold mt-2">3. Cashback</h3>
  <p class="text-sm opacity-80">Devolução de parte dos impostos pagos para famílias de baixa renda (CadÚnico) em itens essenciais.</p>
</div>

<div v-click>
  <span class="text-2xl">💻</span>
  <h3 class="font-bold mt-2">4. Alíquota Única (Padrão)</h3>
  <p class="text-sm opacity-80">Uma alíquota de referência para quase tudo, com reduções específicas apenas para setores definidos em lei (saúde, educação, cesta básica).</p>
</div>

</div>

---
layout: default
---

# Cronograma de Transição
A mudança será gradual para não quebrar a arrecadação e os sistemas.

<Timeline>
  <TimelineEvent v-click title="Fase de Teste" time="2026">
    Cobrança simbólica: 0,9% de CBS e 0,1% de IBS para testar os sistemas e adaptar os ERPs. Abatimento no PIS/COFINS atual.
  </TimelineEvent>
  <TimelineEvent v-click title="Adeus PIS/COFINS e IPI" time="2027">
    CBS entra em vigor integralmente. PIS e COFINS deixam de existir. IPI vira "alíquota zero" (exceto Zona Franca de Manaus). Imposto Seletivo entra em cena.
  </TimelineEvent>
  <TimelineEvent v-click title="Transição do ICMS e ISS" time="2029 a 2032">
    O ICMS e o ISS começam a diminuir gradativamente (1/10 ao ano), enquanto as alíquotas do IBS aumentam na mesma proporção.
  </TimelineEvent>
  <TimelineEvent v-click title="Vigência Integral" time="2033">
    Fim definitivo do ICMS e do ISS. O novo sistema CBS + IBS passa a funcionar 100%.
  </TimelineEvent>
</Timeline>

---
layout: image-right
image: https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80
---

# Impacto na TI e Contabilidade

Para quem coloca a mão na massa (Sistemas e SPED):

<v-clicks>

- **Atualização de ERPs:** Parâmetros de tributação baseados no NCM e destino precisarão ser totalmente reescritos no banco de dados.
- **Novos Layouts XML:** A Nota Fiscal Eletrônica (NF-e) mudará sua estrutura de tags para acomodar CBS e IBS.
- **SPED Simplificado:** O Comitê Gestor unificará a escrituração. Muito provavelmente os Registros I200/I250 sofrerão impactos ou serão alimentados por apurações menos engessadas.
- **Foco em Compliance:** O trabalho contábil sai da "apuração cega" de impostos e foca na validação da integridade de dados e auditoria.

</v-clicks>

---
layout: center
class: text-center
---

# Obrigado!
## Perguntas?

O novo sistema promete trocar 1.500 horas de burocracia por mais eficiência na gestão dos negócios.

<div class="mt-8 text-sm opacity-50">
  Apresentação gerada via Slidev.
</div>