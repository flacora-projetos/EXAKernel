/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { 
  TrendingUp, 
  MousePointer2, 
  Percent, 
  Target, 
  Wallet, 
  BarChart3, 
  CheckCircle2, 
  Search, 
  ArrowUpRight,
  ArrowDownRight,
  ChevronRight,
  Calendar,
  ShieldCheck,
  Cpu
} from 'lucide-react';
import { 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  AreaChart,
  Area
} from 'recharts';
import { motion } from 'motion/react';

// Data
const kpis = [
  { label: 'Impressões', value: '927', icon: BarChart3, color: 'text-slate-500' },
  { label: 'Cliques', value: '87', icon: MousePointer2, color: 'text-slate-500' },
  { label: 'CTR', value: '9,39%', icon: Percent, color: 'text-blue-600' },
  { label: 'Investimento', value: 'R$ 702,75', icon: Wallet, color: 'text-slate-500' },
  { label: 'CPC Médio', value: 'R$ 8,08', icon: TrendingUp, color: 'text-slate-500' },
  { label: 'Conversões', value: '8', icon: CheckCircle2, color: 'text-emerald-600' },
  { label: 'Taxa de Conv.', value: '9,20%', icon: Target, color: 'text-emerald-600' },
  { label: 'Custo por Conv.', value: 'R$ 87,84', icon: Wallet, color: 'text-slate-500' },
];

const phases = [
  {
    title: 'Fase 1',
    period: '09/03 a 15/03',
    metrics: [
      { label: 'Cliques', value: '11' },
      { label: 'CTR', value: '5,29%' },
      { label: 'Conv.', value: '2' },
      { label: 'Custo/Conv.', value: 'R$ 23,92' },
    ],
    reading: 'Início com baixo volume e ótima eficiência.',
    status: 'Eficiência'
  },
  {
    title: 'Fase 2',
    period: '16/03 a 22/03',
    metrics: [
      { label: 'Cliques', value: '43' },
      { label: 'CTR', value: '10,09%' },
      { label: 'Conv.', value: '3' },
      { label: 'Custo/Conv.', value: 'R$ 134,44' },
    ],
    reading: 'Fase de maior escala da campanha, com aumento de volume e perda de eficiência.',
    status: 'Escala'
  },
  {
    title: 'Fase 3',
    period: '23/03 a 29/03',
    metrics: [
      { label: 'Cliques', value: '33' },
      { label: 'CTR', value: '11,26%' },
      { label: 'Conv.', value: '3' },
      { label: 'Custo/Conv.', value: 'R$ 83,87' },
    ],
    reading: 'Recuperação de eficiência na reta final, com melhora de CTR e redução do custo por conversão.',
    status: 'Recuperação'
  }
];

const chartData = [
  { name: 'Fase 1', conv: 2, cost: 23.92, ctr: 5.29 },
  { name: 'Fase 2', conv: 3, cost: 134.44, ctr: 10.09 },
  { name: 'Fase 3', conv: 3, cost: 83.87, ctr: 11.26 },
];

const topSearches = [
  {
    term: 'empresas de ti em goiania',
    keyword: 'empresa de ti goiania',
    match: 'Exata (variante aproximada)',
    conv: 2,
    cost: 'R$ 56,34'
  },
  {
    term: 'suporte de ti para empresas',
    keyword: 'suporte de ti para empresas',
    match: 'Exata',
    conv: 1,
    cost: 'R$ 5,65'
  },
  {
    term: 'empresa de ti em goiania',
    keyword: 'empresa de ti goiania',
    match: 'Frase (variação aproximada)',
    conv: 1,
    cost: 'R$ 9,30'
  }
];

const learnings = [
  'A campanha gerou 8 conversões no período analisado.',
  'O desempenho de clique foi positivo, com CTR de 9,39%.',
  'O melhor equilíbrio entre custo e resultado apareceu no início do período.',
  'A fase central concentrou maior volume e maior investimento, mas com perda de eficiência.',
  'A reta final mostrou melhora de qualidade, com CTR mais alto e custo por conversão mais saudável.',
  'Os termos de busca com melhor sinal reforçam aderência a uma demanda comercial local e objetiva.',
  'A leitura geral mostra uma campanha com boa capacidade de gerar conversões, com oscilações naturais de eficiência.'
];

export default function App() {
  return (
    <div className="min-h-screen font-sans">
      {/* Header / Hero */}
      <header className="bg-slate-900 text-white pt-20 pb-24 px-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
          <Cpu className="w-full h-full transform translate-x-1/4 -translate-y-1/4" />
        </div>
        
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 bg-blue-600 rounded flex items-center justify-center">
              <ShieldCheck className="text-white w-6 h-6" />
            </div>
            <span className="text-xl font-display font-bold tracking-tight">EXAKernel</span>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-4 leading-tight">
              [09/03] [NL] - EXAKernel - Search
            </h1>
            <div className="flex flex-wrap items-center gap-4 text-slate-400 mb-8">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>09/03/2026 a 29/03/2026</span>
              </div>
              <div className="w-1 h-1 bg-slate-600 rounded-full hidden md:block"></div>
              <div className="flex items-center gap-2">
                <Search className="w-4 h-4" />
                <span>Google Search</span>
              </div>
              <div className="w-1 h-1 bg-slate-600 rounded-full hidden md:block"></div>
              <div className="flex items-center gap-2">
                <span className="px-2 py-0.5 bg-emerald-500/20 text-emerald-400 text-xs font-bold rounded uppercase tracking-wider">Ativa</span>
              </div>
            </div>
            
            <p className="text-xl text-slate-300 max-w-3xl border-l-2 border-blue-600 pl-6 py-2">
              Campanha Search com forte aderência comercial e recuperação estratégica de eficiência na reta final do período analisado.
            </p>
          </motion.div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 pb-24">
        {/* KPI Grid Section */}
        <section className="py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {kpis.map((kpi, idx) => (
              <motion.div 
                key={kpi.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.05 }}
                className="glass-card p-6 flex flex-col justify-between"
              >
                <div className="flex justify-between items-start mb-4">
                  <span className="stat-label">{kpi.label}</span>
                  <kpi.icon className={`w-4 h-4 ${kpi.color}`} />
                </div>
                <span className="stat-value">{kpi.value}</span>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Evolution Section */}
        <section className="mb-20">
          <div className="flex items-end justify-between mb-8">
            <div>
              <h2 className="text-sm font-bold text-blue-600 uppercase tracking-widest mb-2">Performance</h2>
              <h3 className="text-3xl font-display font-bold text-slate-900">Evolução do Período</h3>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {phases.map((phase, idx) => (
              <div key={phase.title} className="glass-card p-8 flex flex-col h-full relative">
                <div className="absolute top-0 right-0 p-4">
                  <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded ${
                    idx === 0 ? 'bg-emerald-50 text-emerald-600' : 
                    idx === 1 ? 'bg-amber-50 text-amber-600' : 
                    'bg-blue-50 text-blue-600'
                  }`}>
                    {phase.status}
                  </span>
                </div>
                <h4 className="text-xl font-display font-bold mb-1">{phase.title}</h4>
                <p className="text-sm text-slate-400 mb-6">{phase.period}</p>
                
                <div className="grid grid-cols-2 gap-y-6 gap-x-4 mb-8">
                  {phase.metrics.map(m => (
                    <div key={m.label}>
                      <p className="text-[10px] uppercase text-slate-400 font-bold tracking-tighter mb-1">{m.label}</p>
                      <p className="text-lg font-display font-bold text-slate-800">{m.value}</p>
                    </div>
                  ))}
                </div>
                
                <div className="mt-auto pt-6 border-t border-slate-100 italic text-slate-500 text-sm leading-relaxed">
                  "{phase.reading}"
                </div>
              </div>
            ))}
          </div>

          {/* Chart */}
          <div className="glass-card p-8 h-[350px]">
            <div className="flex items-center gap-6 mb-6">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-blue-600"></div>
                <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Custo por Conversão (R$)</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
                <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Conversões</span>
              </div>
            </div>
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={chartData}>
                <defs>
                  <linearGradient id="colorCost" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#2563eb" stopOpacity={0.1}/>
                    <stop offset="95%" stopColor="#2563eb" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <XAxis 
                  dataKey="name" 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fill: '#94a3b8', fontSize: 12 }}
                  dy={10}
                />
                <YAxis 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fill: '#94a3b8', fontSize: 12 }}
                />
                <Tooltip 
                  contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }}
                />
                <Area 
                  type="monotone" 
                  dataKey="cost" 
                  stroke="#2563eb" 
                  strokeWidth={3}
                  fillOpacity={1} 
                  fill="url(#colorCost)" 
                  name="Custo/Conv."
                />
                <Line 
                  type="monotone" 
                  dataKey="conv" 
                  stroke="#10b981" 
                  strokeWidth={3} 
                  dot={{ r: 6, fill: '#10b981', strokeWidth: 2, stroke: '#fff' }}
                  name="Conversões"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </section>

        {/* Strategic Reading */}
        <section className="mb-20 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-sm font-bold text-blue-600 uppercase tracking-widest mb-2">Insights</h2>
            <h3 className="text-3xl font-display font-bold text-slate-900 mb-6">Leitura Estratégica</h3>
            <div className="space-y-4">
              {learnings.map((item, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="flex gap-4 items-start"
                >
                  <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-600 shrink-0"></div>
                  <p className="text-slate-600 leading-relaxed">{item}</p>
                </motion.div>
              ))}
            </div>
          </div>
          <div className="bg-slate-900 rounded-2xl p-10 text-white relative overflow-hidden">
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-blue-600/20 rounded-full blur-3xl"></div>
            <h4 className="text-xl font-display font-bold mb-8 flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-blue-400" />
              Dinâmica de Performance
            </h4>
            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="flex flex-col items-center">
                  <div className="w-8 h-8 rounded-full border border-slate-700 flex items-center justify-center text-xs font-bold">1</div>
                  <div className="w-px h-full bg-slate-700 my-2"></div>
                </div>
                <div>
                  <p className="text-sm font-bold text-blue-400 uppercase tracking-wider mb-1">Início</p>
                  <p className="text-slate-400 text-sm">Operação altamente eficiente com baixo volume de entrada.</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="flex flex-col items-center">
                  <div className="w-8 h-8 rounded-full border border-slate-700 flex items-center justify-center text-xs font-bold">2</div>
                  <div className="w-px h-full bg-slate-700 my-2"></div>
                </div>
                <div>
                  <p className="text-sm font-bold text-amber-400 uppercase tracking-wider mb-1">Escalabilidade</p>
                  <p className="text-slate-400 text-sm">Expansão de volume e investimento, resultando em oscilação de custo.</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="flex flex-col items-center">
                  <div className="w-8 h-8 rounded-full border border-slate-700 flex items-center justify-center text-xs font-bold">3</div>
                </div>
                <div>
                  <p className="text-sm font-bold text-emerald-400 uppercase tracking-wider mb-1">Consolidação</p>
                  <p className="text-slate-400 text-sm">Recuperação de métricas de qualidade e estabilização de conversões.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Top Searches */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-sm font-bold text-blue-600 uppercase tracking-widest mb-2">Qualidade de Busca</h2>
            <h3 className="text-3xl font-display font-bold text-slate-900">Principais buscas que geraram resultado</h3>
          </div>

          <div className="glass-card overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-50 border-bottom border-slate-200">
                  <th className="px-8 py-5 text-[10px] font-bold uppercase tracking-widest text-slate-400">Termo Pesquisado</th>
                  <th className="px-8 py-5 text-[10px] font-bold uppercase tracking-widest text-slate-400">Palavra-Chave Acionada</th>
                  <th className="px-8 py-5 text-[10px] font-bold uppercase tracking-widest text-slate-400">Correspondência</th>
                  <th className="px-8 py-5 text-[10px] font-bold uppercase tracking-widest text-slate-400 text-center">Conv.</th>
                  <th className="px-8 py-5 text-[10px] font-bold uppercase tracking-widest text-slate-400 text-right">Custo/Conv.</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {topSearches.map((search, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/50 transition-colors">
                    <td className="px-8 py-6 font-medium text-slate-900">{search.term}</td>
                    <td className="px-8 py-6 text-slate-500 text-sm">{search.keyword}</td>
                    <td className="px-8 py-6">
                      <span className="text-[10px] font-bold px-2 py-1 bg-slate-100 text-slate-600 rounded uppercase">
                        {search.match}
                      </span>
                    </td>
                    <td className="px-8 py-6 text-center font-bold text-emerald-600">{search.conv}</td>
                    <td className="px-8 py-6 text-right font-display font-bold text-slate-700">{search.cost}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          <div className="mt-8 grid md:grid-cols-3 gap-6">
            <div className="p-6 bg-blue-50 rounded-xl border border-blue-100">
              <p className="text-sm text-blue-800 leading-relaxed">
                Houve aderência relevante em buscas de <strong>intenção comercial direta</strong>.
              </p>
            </div>
            <div className="p-6 bg-blue-50 rounded-xl border border-blue-100">
              <p className="text-sm text-blue-800 leading-relaxed">
                Termos ligados a <strong>empresa de TI em Goiânia</strong> mostraram forte conexão com a proposta.
              </p>
            </div>
            <div className="p-6 bg-blue-50 rounded-xl border border-blue-100">
              <p className="text-sm text-blue-800 leading-relaxed">
                Buscas de <strong>suporte de TI para empresas</strong> indicam alinhamento com a dor principal.
              </p>
            </div>
          </div>
        </section>

        {/* Conclusion */}
        <section className="max-w-4xl mx-auto py-16 border-t border-slate-100">
          <div className="flex flex-col items-center text-center mb-12">
            <div className="w-16 h-1 bg-blue-600 mb-8"></div>
            <h3 className="text-3xl font-display font-bold text-slate-900 mb-6">Conclusão e Análise Profunda</h3>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 text-left">
            <div className="space-y-6">
              <h4 className="text-lg font-display font-bold text-slate-800 flex items-center gap-2">
                <Target className="w-5 h-5 text-blue-600" />
                Eficiência vs. Escala
              </h4>
              <p className="text-slate-600 leading-relaxed">
                A análise do período revela um ciclo clássico de aprendizado de algoritmo. A <strong>Fase 1</strong> operou em um "oceano azul" de alta eficiência, capturando leads com custo extremamente baixo. Ao buscarmos escala na <strong>Fase 2</strong>, o aumento de investimento trouxe volume (43 cliques), mas pressionou o custo por conversão para R$ 134,44.
              </p>
            </div>
            
            <div className="space-y-6">
              <h4 className="text-lg font-display font-bold text-slate-800 flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-emerald-600" />
                Otimização e Relevância
              </h4>
              <p className="text-slate-600 leading-relaxed">
                O sinal mais positivo é a <strong>Fase 3</strong>. Mesmo com volume ligeiramente menor que a fase anterior, o CTR atingiu seu pico histórico de <strong>11,26%</strong>. Isso indica que os anúncios estão cada vez mais relevantes para o público de Goiânia, permitindo uma redução de 37% no custo por conversão em relação ao pico de investimento.
              </p>
            </div>
          </div>

          <div className="mt-12 p-8 bg-slate-50 rounded-2xl border border-slate-200">
            <p className="text-slate-700 leading-relaxed font-medium">
              Em síntese: A campanha da <strong className="text-blue-700">EXAKernel</strong> encerra o ciclo de março com 8 conversões sólidas e um motor de busca calibrado. A aderência aos termos locais ("TI em Goiânia") e de dor ("suporte para empresas") prova que estamos no caminho certo para uma expansão sustentável, priorizando agora a manutenção do CTR elevado e a estabilização do custo por lead abaixo de R$ 90,00.
            </p>
          </div>

          <div className="mt-12 flex items-center justify-center gap-2 text-slate-400 font-bold text-xs uppercase tracking-widest">
            <span>EXAKernel</span>
            <ChevronRight className="w-3 h-3" />
            <span>Performance Report</span>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-200 py-12 px-6 bg-slate-50">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2 opacity-50">
            <ShieldCheck className="w-5 h-5" />
            <span className="font-display font-bold text-sm">EXAKernel</span>
          </div>
          <div className="text-slate-400 text-xs font-medium">
            [09/03] [NL] - EXAKernel - Search • 09/03/2026 a 29/03/2026
          </div>
          <div className="text-slate-400 text-[10px] uppercase tracking-widest">
            Google Search Performance
          </div>
        </div>
      </footer>
    </div>
  );
}
