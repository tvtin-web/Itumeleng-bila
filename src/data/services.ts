export interface Service {
  id: string;
  title: string;
  /** Link label used in the jump menu on the Services page. */
  short: string;
  cta: string;
  points: string[];
}

export const services: Service[] = [
  {
    id: 'camp',
    title: 'Camp Facilitation Training',
    short: 'Camp facilitation',
    cta: 'Enquire about this training',
    points: [
      'Planning and structuring a camp (objectives, budgets, logistics)',
      'Creating engaging and safe camp environments',
      'Managing risk and child protection',
      'Camp games, activities and themes',
    ],
  },
  {
    id: 'lifeskills',
    title: 'Life Skills Programme Training',
    short: 'Life skills',
    cta: 'Enquire about this training',
    points: [
      'Curriculum development',
      'Facilitation techniques for after-school settings',
      'Working with diverse learners (language, background, ability)',
      'Monitoring and evaluation of programmes',
    ],
  },
  {
    id: 'presenting',
    title: 'Presentation & Facilitation Skills for Children',
    short: 'Presenting to children',
    cta: 'Enquire about this training',
    points: [
      'Engaging young minds (storytelling, visuals, voice control)',
      'Classroom management and behaviour guidance',
      'Emotional intelligence and empathy in facilitation',
    ],
  },
  {
    id: 'custom',
    title: 'Custom Training for Organisations & Schools',
    short: 'Custom training',
    cta: 'Request a custom quote',
    points: [
      'On-site or online',
      'Short courses, weekend intensives or multi-week programmes',
      'Training materials and follow-up mentorship',
    ],
  },
  {
    id: 'consultancy',
    title: 'Consultancy Services',
    short: 'Consultancy',
    cta: 'Book a consultation',
    points: [
      'One-on-one or group consultations for schools, NGOs and churches',
      'Support in setting up new youth-focused initiatives',
      'Assistance with programme design, M&E, policy creation and team structuring',
    ],
  },
  {
    id: 'coaching',
    title: 'Coaching & Mentoring',
    short: 'Coaching',
    cta: 'Ask about mentorship',
    points: [
      'Personalised coaching for youth workers and teachers',
      'Ongoing support after training to help implement and grow programmes',
      'Group coaching calls, one-on-one check-ins and WhatsApp/Telegram support groups',
    ],
  },
];
