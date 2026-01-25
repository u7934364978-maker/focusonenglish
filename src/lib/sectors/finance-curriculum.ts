import { CurriculumModule } from '../curriculum-data';

export const FINANCE_SECTOR_CURRICULUM: Record<string, CurriculumModule[]> = {
  B1: [
    {
      title: "Trimestre 1: Fundamentos Bancarios y Atención al Cliente (Mes 1-3)",
      topics: [
        "Gestión de cuentas personales y corporativas",
        "Productos financieros básicos: Tarjetas y Préstamos",
        "Protocolos de seguridad y banca digital",
        "Resolución de conflictos y atención al cliente internacional"
      ],
      grammar: [
        "Present Perfect vs Past Simple en transacciones",
        "First Conditional para asesoramiento financiero",
        "Modal verbs for rules (must/can't) and advice (should)"
      ],
      vocabulary: [
        "Overdraft, Interest rate, Yield, Mortgage",
        "Transaction fee, Wire transfer, Fraud prevention",
        "Statements, Balance inquiry, Credit score"
      ],
      skills: {
        reading: ["Análisis de contratos y términos y condiciones bancarios"],
        writing: ["Emails de atención al cliente y reporte de incidencias"],
        listening: ["Simulaciones de banca telefónica y atención al público"],
        speaking: ["Explicación de productos financieros y onboarding de clientes"]
      }
    },
    {
      title: "Trimestre 2: Finanzas Corporativas y Operaciones (Mes 4-6)",
      topics: [
        "Gestión de facturación y pagos internacionales",
        "Creación y control de presupuestos departamentales",
        "Impuestos y fiscalidad básica (VAT, Tax returns)",
        "Financiación para empresas y análisis de riesgo"
      ],
      grammar: [
        "Passive Voice para procesos contables",
        "Comparatives and Superlatives para análisis de rendimiento",
        "Future forms for forecasting and budgeting"
      ],
      vocabulary: [
        "Invoicing, Accounts Payable/Receivable, Ledger",
        "Profit and Loss, Expenditure, Cash flow basics",
        "Audit trail, Compliance, Regulatory framework"
      ],
      skills: {
        reading: ["Lectura de facturas complejas y reportes de gastos"],
        writing: ["Redacción de solicitudes de crédito y propuestas de presupuesto"],
        listening: ["Seguir debates sobre asignación de recursos en reuniones"],
        speaking: ["Presentación de estados financieros mensuales"]
      }
    },
    {
      title: "Trimestre 3: Reporting y Análisis Estratégico (Mes 7-9)",
      topics: [
        "Análisis de estados financieros (P&L, Balance Sheet)",
        "Introducción a los mercados de valores y divisas",
        "Reporting financiero para la dirección",
        "Proyecto Final: Análisis financiero de una empresa real"
      ],
      grammar: [
        "Reporting verbs para análisis de datos",
        "Second Conditional para simulaciones de escenarios (What if...)",
        "Connectors of cause and effect for executive summaries"
      ],
      vocabulary: [
        "Assets, Liabilities, Equity, Shareholders",
        "EBITDA, ROI, Margin analysis, Break-even point",
        "Exchange rate risk, Stocks, Bonds, Dividends"
      ],
      skills: {
        reading: ["Interpretación de informes anuales simplificados"],
        writing: ["Redacción de informes ejecutivos de 10 páginas"],
        listening: ["Comprensión de noticias financieras (Bloomberg/FT)"],
        speaking: ["Defensa de auditoría y análisis de desviaciones"]
      }
    }
  ],
  B2: [
    {
      title: "Trimestre 1: Reporting Corporativo y Auditoría (Mes 1-3)",
      topics: [
        "Análisis profundo de P&L y Balance Sheet",
        "Control de gestión y análisis de desviaciones (Variance Analysis)",
        "Auditoría interna y procedimientos de cumplimiento",
        "KPIs financieros avanzados y cuadros de mando"
      ],
      grammar: [
        "Reporting verbs for data interpretation",
        "Complex passives for audit documentation",
        "Modal verbs of deduction for financial trends"
      ],
      vocabulary: [
        "Accruals, Provisions, Depreciation, Amortization",
        "Operating Margin, Net Profit, Variance analysis",
        "Internal controls, Compliance, Statutory audit"
      ],
      skills: {
        reading: ["Interpretación de informes de auditoría externa"],
        writing: ["Redacción de informes trimestrales para inversores"],
        listening: ["Seguir presentaciones de resultados trimestrales complejas"],
        speaking: ["Exposición y defensa de estados financieros ante el consejo"]
      }
    },
    {
      title: "Trimestre 2: Inversiones y Mercados Internacionales (Mes 4-6)",
      topics: [
        "Gestión de carteras y diversificación de activos",
        "Mercados de capitales (Bolsa, Bonos, Commodities)",
        "Finanzas internacionales y riesgo de divisa",
        "Instrumentos de inversión alternativa (Hedge Funds, PE)"
      ],
      grammar: [
        "Conditionals Type 2 & 3 for risk simulations",
        "Future Perfect for investment goal tracking",
        "Gerunds vs Infinitives in investment strategy"
      ],
      vocabulary: [
        "Asset allocation, Diversification, Portfolio rebalancing",
        "Stocks, Bonds, Derivatives, Futures, Options",
        "Exchange rate risk, Hedging, Arbitrage"
      ],
      skills: {
        reading: ["Análisis de prospectos de fondos de inversión"],
        writing: ["Elaboración de tesis de inversión y reportes de mercado"],
        listening: ["Comprensión de debates sobre política monetaria y tipos"],
        speaking: ["Discusión sobre estrategias de inversión y asignación de activos"]
      }
    },
    {
      title: "Trimestre 3: M&A y Reestructuración Estratégica (Mes 7-9)",
      topics: [
        "Fusiones y Adquisiciones (M&A): El proceso completo",
        "Due Diligence financiera y operativa",
        "Valoración de sinergias y post-merger integration",
        "Reestructuración de deuda y concursos de acreedores"
      ],
      grammar: [
        "Mixed Conditionals for complex deal scenarios",
        "Advanced relative clauses for contract terminology",
        "Subjunctive for formal negotiation points"
      ],
      vocabulary: [
        "Mergers, Acquisitions, Takeover, Buyout",
        "Due diligence, Sinergies, Goodwill, Intangible assets",
        "Debt restructuring, Insolvency, Liquidation"
      ],
      skills: {
        reading: ["Lectura de contratos de compraventa de empresas (SPA)"],
        writing: ["Redacción de memorandos de oferta (Information Memorandum)"],
        listening: ["Simulaciones de negociaciones de cierre de acuerdos"],
        speaking: ["Liderazgo en procesos de negociación de M&A"]
      }
    }
  ],
  C1: [
    {
      title: "Trimestre 1: Estrategia de Capital y Valoración (Mes 1-3)",
      topics: [
        "Modelización financiera avanzada y valoración (DCF, Multiples)",
        "Estructura de capital óptima y coste de capital (WACC)",
        "Estrategia de financiación corporativa (Equity vs Debt)",
        "Planificación estratégica a largo plazo"
      ],
      grammar: [
        "Inversion for emphasis in high-stakes presentations",
        "Advanced hedging to express caution in valuation",
        "Mastery of register: Formal vs Executive English"
      ],
      vocabulary: [
        "Discounted Cash Flow, WACC, Capital structure",
        "Equity capital markets, Debt issuance, Leverage",
        "Strategic objectives, Financial modeling"
      ],
      skills: {
        reading: ["Análisis de modelos financieros complejos en Excel"],
        writing: ["Redacción de planes estratégicos financieros de 20+ páginas"],
        listening: ["Seguir conferencias de prensa de bancos centrales"],
        speaking: ["Presentación de propuestas de financiación a la directiva"]
      }
    },
    {
      title: "Trimestre 2: Gestión de Riesgos y Gobernanza (Mes 4-6)",
      topics: [
        "Gestión de riesgos empresariales (ERM) y derivados",
        "Gobierno corporativo y ética profesional avanzada",
        "Inversión sostenible (ESG) y reporting no financiero",
        "Cumplimiento regulatorio global (Basel, Solvency, etc.)"
      ],
      grammar: [
        "Causative forms in legal/compliance contexts",
        "Advanced linking words for persuasive arguments",
        "Subjunctive for formal recommendations and mandates"
      ],
      vocabulary: [
        "Hedging, Swaps, Credit Default Swaps, Options",
        "Fiduciary duty, Corporate governance, Board of directors",
        "ESG, Sustainability, Green bonds, Impact investing"
      ],
      skills: {
        reading: ["Evaluación de políticas de gestión de riesgos y ética"],
        writing: ["Redacción de políticas de gobernanza y manuales de ética"],
        listening: ["Entender debates sobre ética corporativa y ESG"],
        speaking: ["Liderar comités de riesgos y auditoría"]
      }
    },
    {
      title: "Trimestre 3: Liderazgo Global e IPOs (Mes 7-9)",
      topics: [
        "Salidas a bolsa (IPO) y procesos de cotización pública",
        "Finanzas globales y gestión de multinacionales",
        "Comunicación ejecutiva con stakeholders y medios",
        "Proyecto Final: Simulación de salida a bolsa de una empresa"
      ],
      grammar: [
        "Rhetorical devices for executive leadership",
        "Nuance and subtlety in international negotiations",
        "Precision in high-level legal and financial drafting"
      ],
      vocabulary: [
        "IPO, Listing, Underwriting, Prospectus",
        "Multinational finance, Transfer pricing, Repatriation",
        "Stakeholder management, Investor relations"
      ],
      skills: {
        reading: ["Análisis de prospectos de salida a bolsa (Prospectus)"],
        writing: ["Redacción de comunicados de prensa para inversores"],
        listening: ["Seguir 'Earnings Calls' de empresas del S&P 500"],
        speaking: ["Liderazgo en 'Roadshows' de inversores"]
      }
    }
  ]
};
