import { company } from '@/data/company';

export type ContactTopic = {
  readonly value: string;
  readonly label: string;
};

export type ContactChannelIcon = 'email' | 'phone' | 'location';

export type ContactChannel = {
  readonly icon: ContactChannelIcon;
  readonly label: string;
  readonly value: string;
};

export type ContactNote = {
  readonly title: string;
  readonly detail: string;
};

export type ContactFaq = {
  readonly id: string;
  readonly index: string;
  readonly category: string;
  readonly question: string;
  readonly answer: string;
};

export const inquiryTopics = [
  { value: '', label: 'Seleccionar asunto' },
  { value: 'distribucion', label: 'Distribución y puntos de venta' },
  { value: 'fabricacion', label: 'Fabricación a medida' },
  { value: 'materiales', label: 'Materiales y muestrario' },
  { value: 'prensa', label: 'Prensa y comunicación' },
  { value: 'general', label: 'Consulta general' },
] as const satisfies readonly ContactTopic[];

export const contactChannels = [
  {
    icon: 'email',
    label: 'Correo electrónico',
    value: 'hola@emiliofaraoni.com',
  },
  {
    icon: 'phone',
    label: 'Teléfono',
    value: '+34 965 000 000',
  },
  {
    icon: 'location',
    label: 'Ubicación',
    value: 'Elche, Alicante',
  },
] as const satisfies readonly ContactChannel[];

export const contactNotes = [
  {
    title: 'Taller',
    detail: `${company.location} — Fabricación y showroom con visita concertada.`,
  },
  {
    title: 'Tiempo de respuesta',
    detail:
      'Leemos cada mensaje y respondemos sin intermediarios, sin formularios de marketing.',
  },
] as const satisfies readonly ContactNote[];

export const contactFaqs = [
  {
    id: 'precios',
    index: '01',
    category: 'Comercial',
    question: '¿Cuál es la política de precios y cómo solicitar tarifas?',
    answer:
      'Las tarifas profesionales se facilitan tras el primer contacto y la identificación del motivo de consulta. No publicamos precios en la web porque cada cliente y cada serie trabajan con condiciones distintas. Si comparte el contexto, preparamos una propuesta ajustada.',
  },
  {
    id: 'distribucion',
    index: '02',
    category: 'Distribución',
    question: '¿Trabajan con tiendas multimarca y concept stores?',
    answer:
      'Sí. Atendemos a puntos de venta multimarca, concept stores y showrooms que comparten nuestra visión del oficio. Las condiciones se acuerdan en una primera conversación para entender el encaje del producto en cada espacio.',
  },
  {
    id: 'fabricacion',
    index: '03',
    category: 'Taller',
    question: '¿Realizan fabricación a medida o desarrollo de prototipos?',
    answer:
      'Sí. Desarrollamos producto a medida, prototipos y series cortas. El proceso comienza con una llamada o un correo donde entendemos la idea, los materiales, los plazos y el público al que va dirigido.',
  },
  {
    id: 'minimos',
    index: '04',
    category: 'Producción',
    question: '¿Cuál es el pedido mínimo para una serie corta?',
    answer:
      'Trabajamos con series cortas y ediciones limitadas. El pedido mínimo depende del producto, los materiales y los acabados. Lo confirmamos en cada propuesta, después de revisar el alcance.',
  },
  {
    id: 'muestrario',
    index: '05',
    category: 'Catálogo',
    question: '¿Pueden enviar muestrario de materiales y acabados?',
    answer:
      'Sí. Enviamos muestrario de cueros, acabados y referencias a profesionales que hayan contactado previamente con el taller. La selección se prepara a medida según el proyecto.',
  },
  {
    id: 'visitas',
    index: '06',
    category: 'Visitas',
    question: '¿Ofrecen visitas al taller o showroom?',
    answer:
      'Recibimos a profesionales, prensa y colaboradores con cita previa, en horario de fábrica. Las visitas se solicitan a través del formulario o, tras el primer contacto, por correo directo.',
  },
] as const satisfies readonly ContactFaq[];
