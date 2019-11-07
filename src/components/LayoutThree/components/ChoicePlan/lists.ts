export const PLAN_LISTS = [
  {
    title: 'Essentials',
    subtitle: 'The essentials to get your team up and running',
    price: 4.79,
    showEssentialMsg: false,
    items: [
      {
        title: 'Unlimited tasks',
        children: [],
        withIcon: false,
        longText: false,
      },
      {
        title: 'Unlimited projects',
        children: [],
        withIcon: false,
        longText: false,
      },
      {
        title: 'Assignees + Due dates',
        children: [],
        withIcon: false,
        longText: false,
      },
      {
        title: 'Essential features',
        children: [
          'commenting',
          'file uploads (unlimited)',
          'tagging',
          'filtering',
          'search',
        ],
        withIcon: false,
        longText: false,
      },
      {
        title: 'advanced security',
        children: [],
        withIcon: true,
        longText: false,
      },
    ],
  },
  {
    title: 'Everything (best Value)',
    subtitle: 'Everything you need to help your team achieve more together',
    price: 11.95,
    showEssentialMsg: true,
    items: [
      {
        title: 'start dates + timelines',
        children: [],
        withIcon: false,
        longText: false,
      },
      {
        title: 'Free Guest Accounts (unlimited)',
        children: [],
        comingSoon: true,
        withIcon: false,
        longText: false,
      },
      {
        title: 'workgroups for different teams and departments',
        children: [],
        withIcon: false,
        longText: true,
      },
      {
        title: 'advanced reporting',
        children: [
          'project timelines',
          'open and complete tasks...',
          'team workload management...',
        ],
        withIcon: false,
        longText: false,
      },
      {
        title: 'advanced security',
        children: [],
        withIcon: true,
        longText: false,
      },
    ],
  },
  {
    title: 'Enterprise',
    subtitle:
      'Everything we offer, plus additional security, control, and support.',
    price: 19.95,
    showEssentialMsg: true,
    items: [
      {
        title: 'SAML Single Sign-On (SSO)',
        children: [],
        withIcon: false,
        longText: false,
      },
      {
        title: 'Dedicated Training + Account Manager',
        children: [],
        withIcon: false,
        longText: true,
      },
      {
        title: 'Priority Support',
        children: [],
        withIcon: false,
        longText: false,
      },
      {
        title: 'Advanced Controls',
        children: [
          'full data export',
          'cross-regional backups',
          'user provisioning and deprovisio...',
        ],
        withIcon: false,
        longText: false,
      },
      {
        title: 'advanced security',
        children: [],
        withIcon: true,
        longText: false,
      },
      {
        title: '99.9% uptime SLA',
        children: [],
        withIcon: false,
        longText: false,
      },
    ],
  },
];
