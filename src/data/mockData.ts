import type {
  ClinicalResult,
  EvidenceSource,
  ExampleQueryItem,
  EvaluationCategory,
  EvaluationMetric,
  QueryOutcomeDatum,
} from '@/types/clinical';

export const EXAMPLE_QUERIES: ExampleQueryItem[] = [
  {
    id: 'aspirin-supported',
    label: 'Aspirin preventive eligibility',
    query: 'Should a 55-year-old with a 12% 10-year CVD risk take aspirin?',
  },
  {
    id: 'atorvastatin-contraindication',
    label: 'Atorvastatin contraindications',
    query: 'What are the contraindications for atorvastatin?',
  },
  {
    id: 'atorvastatin-interactions',
    label: 'Atorvastatin drug interactions',
    query: 'What drug interactions are listed for atorvastatin?',
  },
  {
    id: 'aspirin-clopidogrel',
    label: 'Aspirin + clopidogrel interaction',
    query: 'Does aspirin interact with clopidogrel?',
  },
  {
    id: 'metformin',
    label: 'Metformin dosing',
    query: 'What is the recommended metformin dose?',
  },
];

export const EVIDENCE_SOURCES: EvidenceSource[] = [
  {
    id: 'uspstf-aspirin',
    organization: 'USPSTF',
    title: 'Aspirin Use to Prevent Cardiovascular Disease',
    sourceType: 'Preventive Recommendation',
    publicationYear: 2022,
    lastUpdated: '2022',
    evidenceGrade: 'C',
    indexed: true,
    topics: [
      'Primary prevention',
      'Age criteria',
      'Cardiovascular risk',
      'Bleeding risk',
    ],
    referenceNote:
      'Prototype reference link — replace with a verified live URL before final presentation.',
    provenanceNote:
      'ClinGuard preserves source-level metadata to make evidence traceable.',
  },
  {
    id: 'uspstf-statins',
    organization: 'USPSTF',
    title: 'Statin Use for Primary Prevention of Cardiovascular Disease',
    sourceType: 'Preventive Recommendation',
    publicationYear: 2022,
    lastUpdated: '2022',
    evidenceGrade: 'B',
    indexed: true,
    topics: [
      'Primary prevention',
      'Age',
      'Risk factors',
      '10-year CVD risk',
    ],
    referenceNote:
      'Prototype reference link — replace with a verified live URL before final presentation.',
    provenanceNote:
      'ClinGuard preserves source-level metadata to make evidence traceable.',
  },
  {
    id: 'dailymed-atorvastatin',
    organization: 'DailyMed',
    title: 'Atorvastatin Calcium Label',
    sourceType: 'Official Drug Label',
    lastUpdated: 'Label version 2022',
    version: 'NDC 0071-0156',
    indexed: true,
    topics: ['Contraindications', 'Warnings and precautions', 'Drug interactions'],
    indexedSections: [
      '4 — Contraindications',
      '5 — Warnings and Precautions',
      '7 — Drug Interactions',
    ],
    referenceNote:
      'Prototype reference link — replace with a verified live URL before final presentation.',
    provenanceNote:
      'ClinGuard preserves source-level metadata to make evidence traceable.',
  },
  {
    id: 'dailymed-atorvastatin-alt',
    organization: 'DailyMed',
    title: 'Alternative Atorvastatin Label',
    sourceType: 'Official Drug Label',
    lastUpdated: 'Label version 2021',
    version: 'NDC 16729-0289',
    indexed: true,
    topics: ['Contraindications', 'Warnings and precautions', 'Drug interactions'],
    indexedSections: [
      '4 — Contraindications',
      '5 — Warnings and Precautions',
      '7 — Drug Interactions',
    ],
    referenceNote:
      'Prototype reference link — replace with a verified live URL before final presentation.',
    provenanceNote:
      'Different label versions are tracked separately to preserve provenance.',
  },
];

const ASPIRIN_SUPPORTED: ClinicalResult = {
  id: 'aspirin-supported',
  query: 'Should a 55-year-old with a 12% 10-year CVD risk take aspirin?',
  status: 'supported',
  queryUnderstanding: {
    medication: 'Aspirin',
    intent: 'Preventive Eligibility',
    population: 'Adults 40–59',
    cvdRisk: '12%',
  },
  answer:
    'The indexed USPSTF recommendation indicates that the decision to initiate low-dose aspirin for the primary prevention of cardiovascular disease in adults aged 40–59 who have a 10-year CVD risk of 10% or greater should be an individual one. For a 55-year-old with a 12% 10-year CVD risk, the recommendation grade is C, meaning patients who are not at increased risk for bleeding and are willing to take low-dose aspirin daily may derive a small net benefit. Bleeding risk should be considered before initiating therapy.',
  answerDisclaimer:
    'This is an evidence summary drawn from the indexed prototype corpus, not a personalized medical prescription.',
  evidenceGrade: 'C',
  coverage: {
    percentage: 92,
    items: [
      { label: 'Medication identified', found: true },
      { label: 'Population identified', found: true },
      { label: 'Recommendation evidence found', found: true },
      { label: 'Relevant risk context found', found: true },
      { label: 'Safety evidence checked', found: true },
    ],
    explanation:
      'Evidence coverage indicates whether the evidence required for this query was found in the indexed corpus. It does not represent clinical certainty.',
  },
  chunks: [
    {
      id: 'aspirin-chunk-1',
      sourceId: 'uspstf-aspirin',
      sourceTitle: 'Aspirin Use to Prevent Cardiovascular Disease',
      organization: 'USPSTF',
      sourceType: 'Recommendation',
      section: 'Clinical Considerations',
      page: 6,
      evidenceGrade: 'C',
      retrievalScore: 0.94,
      status: 'relevant',
      excerpt:
        'The decision to initiate low-dose aspirin use for the primary prevention of CVD in adults aged 40 to 59 years who have a 10% or greater 10-year CVD risk should be an individual one. Persons who are not at increased risk for bleeding and are willing to take low-dose aspirin daily are more likely to benefit.',
      excerptIsMock: true,
    },
    {
      id: 'aspirin-chunk-2',
      sourceId: 'uspstf-aspirin',
      sourceTitle: 'Aspirin Use to Prevent Cardiovascular Disease',
      organization: 'USPSTF',
      sourceType: 'Recommendation',
      section: 'Risk Assessment',
      page: 7,
      evidenceGrade: 'C',
      retrievalScore: 0.91,
      status: 'relevant',
      excerpt:
        'The 10-year risk of CVD is estimated based on age, sex, blood pressure, cholesterol, and smoking status. Bleeding risk increases with age, previous gastrointestinal bleeding, and use of other medications that increase bleeding.',
      excerptIsMock: true,
    },
  ],
  retrievalTrace: {
    decomposition: {
      medication: 'aspirin',
      intent: 'preventive eligibility',
      population: 'adults 40–59',
    },
    retrievedChunks: [
      {
        id: 'aspirin-chunk-1',
        sourceTitle: 'USPSTF Aspirin',
        section: 'Clinical Considerations',
        score: 0.94,
      },
      {
        id: 'aspirin-chunk-2',
        sourceTitle: 'USPSTF Aspirin',
        section: 'Risk Assessment',
        score: 0.91,
      },
      {
        id: 'aspirin-chunk-3',
        sourceTitle: 'USPSTF Aspirin',
        section: 'Rationale',
        score: 0.78,
      },
    ],
    note: 'Retrieval scores indicate relevance ranking in this prototype. They do not represent clinical certainty.',
  },
  limitations: [
    'ClinGuard only answers from the currently indexed evidence corpus.',
    'Absence of evidence in the corpus does not mean that no evidence exists elsewhere.',
  ],
};

const ATORVASTATIN_CONTRAINDICATION: ClinicalResult = {
  id: 'atorvastatin-contraindication',
  query: 'What are the contraindications for atorvastatin?',
  status: 'supported',
  queryUnderstanding: {
    medication: 'Atorvastatin',
    intent: 'Contraindication',
  },
  answer:
    'The indexed DailyMed atorvastatin calcium label lists active liver disease, unexplained persistent elevations of serum transaminases, and pregnancy as contraindications. The label also identifies nursing mothers as a contraindicated population. Warnings and precautions highlight potential musculoskeletal effects and drug interaction considerations referenced in section 7 of the label.',
  answerDisclaimer:
    'This is an evidence summary drawn from the indexed prototype corpus, not a personalized medical prescription.',
  evidenceGrade: 'Label',
  coverage: {
    percentage: 88,
    items: [
      { label: 'Medication identified', found: true },
      { label: 'Intent identified (contraindication)', found: true },
      { label: 'Contraindication section found', found: true },
      { label: 'Warnings and precautions found', found: true },
      { label: 'Drug interaction section found', found: true },
    ],
    explanation:
      'Evidence coverage indicates whether the evidence required for this query was found in the indexed corpus. It does not represent clinical certainty.',
  },
  chunks: [
    {
      id: 'atorva-chunk-1',
      sourceId: 'dailymed-atorvastatin',
      sourceTitle: 'Atorvastatin Calcium Label',
      organization: 'DailyMed',
      sourceType: 'Official Drug Label',
      section: '4 — Contraindications',
      retrievalScore: 0.95,
      status: 'relevant',
      excerpt:
        'Active liver disease, which may include unexplained persistent elevations in hepatic transaminase levels. Pregnancy. Nursing mothers.',
      excerptIsMock: true,
    },
    {
      id: 'atorva-chunk-2',
      sourceId: 'dailymed-atorvastatin',
      sourceTitle: 'Atorvastatin Calcium Label',
      organization: 'DailyMed',
      sourceType: 'Official Drug Label',
      section: '5 — Warnings and Precautions',
      retrievalScore: 0.92,
      status: 'relevant',
      excerpt:
        'Unexplained muscle pain or weakness should be evaluated. Persistent transaminase elevations should be investigated before continuing therapy.',
      excerptIsMock: true,
    },
    {
      id: 'atorva-chunk-3',
      sourceId: 'dailymed-atorvastatin',
      sourceTitle: 'Atorvastatin Calcium Label',
      organization: 'DailyMed',
      sourceType: 'Official Drug Label',
      section: '7 — Drug Interactions',
      retrievalScore: 0.89,
      status: 'relevant',
      excerpt:
        'Drug interactions referenced in section 7 include strong CYP3A4 inhibitors and selected fibrates, which may increase the risk of musculoskeletal effects.',
      excerptIsMock: true,
    },
  ],
  retrievalTrace: {
    decomposition: {
      medication: 'atorvastatin',
      intent: 'contraindication',
    },
    retrievedChunks: [
      {
        id: 'atorva-chunk-1',
        sourceTitle: 'DailyMed Atorvastatin',
        section: '4 — Contraindications',
        score: 0.95,
      },
      {
        id: 'atorva-chunk-2',
        sourceTitle: 'DailyMed Atorvastatin',
        section: '5 — Warnings and Precautions',
        score: 0.92,
      },
      {
        id: 'atorva-chunk-3',
        sourceTitle: 'DailyMed Atorvastatin',
        section: '7 — Drug Interactions',
        score: 0.89,
      },
    ],
    note: 'Retrieval scores indicate relevance ranking in this prototype. They do not represent clinical certainty.',
  },
  limitations: [
    'ClinGuard only answers from the currently indexed evidence corpus.',
    'Absence of evidence in the corpus does not mean that no evidence exists elsewhere.',
  ],
};

const COMBINED_QUERY: ClinicalResult = {
  id: 'combined-query',
  query: 'Can a 70-year-old taking atorvastatin start aspirin?',
  status: 'supported',
  queryUnderstanding: {
    medication: 'Aspirin + Atorvastatin',
    intent: 'Combined preventive eligibility and safety',
    population: 'Adults 60–69',
    age: '70',
  },
  answer:
    'The indexed sources provide relevant evidence from both the USPSTF aspirin recommendation and the DailyMed atorvastatin safety label. The USPSTF recommendation notes that aspirin initiation in adults aged 60–69 is an individual decision when 10-year CVD risk is 10% or greater. The atorvastatin label provides contraindication, warning, and drug-interaction context. However, these sources do not by themselves establish a complete patient-specific treatment decision for a 70-year-old already taking atorvastatin.',
  answerDisclaimer:
    'The indexed sources provide relevant evidence from both recommendation and drug-label sources, but they do not by themselves establish a complete patient-specific treatment decision.',
  evidenceGrade: 'C',
  multiSource: [
    {
      organization: 'USPSTF',
      title: 'Aspirin preventive recommendation',
      sourceType: 'Recommendation',
      section: 'Clinical Considerations',
      retrievalScore: 0.9,
    },
    {
      organization: 'DailyMed',
      title: 'Atorvastatin safety information',
      sourceType: 'Official Drug Label',
      section: '4 — Contraindications',
      retrievalScore: 0.88,
    },
  ],
  coverage: {
    percentage: 80,
    items: [
      { label: 'Aspirin recommendation', found: true },
      { label: 'Age-related context', found: true },
      { label: 'Atorvastatin safety evidence', found: true },
      {
        label: 'Complete patient-specific treatment decision',
        found: false,
        note: 'Not established by the indexed corpus',
      },
    ],
    explanation:
      'The indexed sources provide relevant evidence from both recommendation and drug-label sources, but they do not by themselves establish a complete patient-specific treatment decision.',
  },
  chunks: [
    {
      id: 'combined-aspirin',
      sourceId: 'uspstf-aspirin',
      sourceTitle: 'Aspirin Use to Prevent Cardiovascular Disease',
      organization: 'USPSTF',
      sourceType: 'Recommendation',
      section: 'Clinical Considerations',
      page: 6,
      evidenceGrade: 'C',
      retrievalScore: 0.9,
      status: 'relevant',
      excerpt:
        'The decision to initiate low-dose aspirin use for the primary prevention of CVD in adults aged 40 to 59 years who have a 10% or greater 10-year CVD risk should be an individual one.',
      excerptIsMock: true,
    },
    {
      id: 'combined-atorva',
      sourceId: 'dailymed-atorvastatin',
      sourceTitle: 'Atorvastatin Calcium Label',
      organization: 'DailyMed',
      sourceType: 'Official Drug Label',
      section: '4 — Contraindications',
      retrievalScore: 0.88,
      status: 'relevant',
      excerpt:
        'Active liver disease, pregnancy, and nursing mothers are listed as contraindications. Drug interactions referenced in section 7 may be relevant when assessing combined medication therapy.',
      excerptIsMock: true,
    },
  ],
  retrievalTrace: {
    decomposition: {
      medication: 'aspirin + atorvastatin',
      intent: 'combined preventive eligibility and safety',
      population: 'adults 60–69',
    },
    retrievedChunks: [
      {
        id: 'combined-aspirin',
        sourceTitle: 'USPSTF Aspirin',
        section: 'Clinical Considerations',
        score: 0.9,
      },
      {
        id: 'combined-atorva',
        sourceTitle: 'DailyMed Atorvastatin',
        section: '4 — Contraindications',
        score: 0.88,
      },
    ],
    note: 'Retrieval scores indicate relevance ranking in this prototype. They do not represent clinical certainty.',
  },
  limitations: [
    'ClinGuard only answers from the currently indexed evidence corpus.',
    'The indexed sources do not establish a complete patient-specific treatment decision.',
  ],
};

const ASPIRIN_CLOPIDOGREL_REFUSAL: ClinicalResult = {
  id: 'aspirin-clopidogrel',
  query: 'Does aspirin interact with clopidogrel?',
  status: 'refused',
  queryUnderstanding: {
    medication: 'Aspirin',
    interaction: 'Clopidogrel',
    intent: 'Drug Interaction',
  },
  refusalReason:
    'The requested claim requires interaction evidence that is not available in the indexed corpus.',
  refusalDecision: 'REFUSE',
  foundEvidence: ['Aspirin evidence found'],
  missingEvidence: ['Aspirin–clopidogrel interaction evidence not found'],
  blockedExplanation:
    'To prevent unsupported clinical claims, answer generation was blocked.',
  coverage: {
    percentage: 50,
    items: [
      { label: 'Aspirin evidence', found: true },
      { label: 'Clopidogrel interaction evidence', found: false },
    ],
    explanation:
      'Aspirin evidence was located in the corpus, but the specific aspirin–clopidogrel interaction evidence required to answer this question was not found.',
  },
  retrievalTrace: {
    decomposition: {
      medication: 'aspirin',
      interaction: 'clopidogrel',
      intent: 'drug interaction',
    },
    retrievedChunks: [
      {
        id: 'aspirin-chunk-1',
        sourceTitle: 'USPSTF Aspirin',
        section: 'Clinical Considerations',
        score: 0.61,
      },
    ],
    note: 'No retrieved chunk addressed the aspirin–clopidogrel interaction claim. Retrieval scores are relevance rankings only.',
  },
};

const METFORMIN_OUT_OF_SCOPE: ClinicalResult = {
  id: 'metformin',
  query: 'What is the recommended metformin dose?',
  status: 'out_of_scope',
  refusalReason:
    'The current ClinGuard evidence corpus does not contain sufficient evidence for this question.',
  refusalDecision: 'BLOCK',
  foundEvidence: ['Query recognized'],
  missingEvidence: ['Required evidence unavailable'],
  blockedExplanation:
    'The question was understood, but the indexed corpus does not contain metformin dosing evidence. Answer generation was blocked to avoid unsupported claims.',
  coverage: {
    percentage: 20,
    items: [
      { label: 'Query recognized', found: true },
      { label: 'Required evidence unavailable', found: false },
      { label: 'Answer generation blocked', found: true },
    ],
    explanation:
      'The question was recognized as out of scope because metformin is not part of the current indexed corpus.',
  },
};

const GENERIC_REFUSAL: ClinicalResult = {
  id: 'generic-refusal',
  query: '',
  status: 'refused',
  refusalReason:
    'The requested claim requires evidence that is not available in the indexed corpus.',
  refusalDecision: 'REFUSE',
  foundEvidence: [],
  missingEvidence: ['Required evidence unavailable'],
  blockedExplanation:
    'To prevent unsupported clinical claims, answer generation was blocked.',
  coverage: {
    percentage: 0,
    items: [
      { label: 'Query recognized', found: true },
      { label: 'Required evidence unavailable', found: false },
    ],
    explanation:
      'ClinGuard could not map this question to any evidence in the controlled corpus.',
  },
};

export const MOCK_RESULTS: Record<string, ClinicalResult> = {
  'aspirin-supported': ASPIRIN_SUPPORTED,
  'atorvastatin-contraindication': ATORVASTATIN_CONTRAINDICATION,
  'aspirin-clopidogrel': ASPIRIN_CLOPIDOGREL_REFUSAL,
  metformin: METFORMIN_OUT_OF_SCOPE,
  'combined-query': COMBINED_QUERY,
  'generic-refusal': GENERIC_REFUSAL,
};

export const EVALUATION_METRICS: EvaluationMetric[] = [
  {
    id: 'precision',
    label: 'Retrieval Precision@5',
    value: '91%',
    description: 'Prototype value for top-5 retrieval relevance.',
  },
  {
    id: 'citation',
    label: 'Citation Accuracy',
    value: '96%',
    description: 'Prototype value for supported source attribution.',
  },
  {
    id: 'refusal',
    label: 'Correct Refusal Rate',
    value: '100%',
    description: 'Prototype value for correctly blocked unsupported claims.',
  },
  {
    id: 'unsupported',
    label: 'Unsupported Claims',
    value: '0',
    description: 'Prototype value for unsupported answers emitted.',
  },
];

export const QUERY_OUTCOMES: QueryOutcomeDatum[] = [
  { name: 'Supported', count: 18 },
  { name: 'Correct Refusal', count: 10 },
  { name: 'Incorrect Refusal', count: 1 },
  { name: 'Unsupported Answer', count: 1 },
];

export const EVALUATION_CATEGORIES: EvaluationCategory[] = [
  {
    id: 'in-scope',
    title: 'In-Scope',
    description: 'Questions directly covered by the indexed corpus.',
    examples: [
      'Aspirin preventive eligibility',
      'Atorvastatin contraindications',
      'Atorvastatin interactions',
    ],
  },
  {
    id: 'ambiguous',
    title: 'Ambiguous',
    description:
      'Clinically plausible questions where required evidence may be missing.',
    examples: [
      'Aspirin + clopidogrel interaction',
      'Unindexed drug interaction',
    ],
  },
  {
    id: 'out-of-scope',
    title: 'Out-of-Scope',
    description: 'Questions outside the corpus.',
    examples: ['Metformin dosing', 'Diabetes treatment', 'Antibiotic selection'],
  },
];
