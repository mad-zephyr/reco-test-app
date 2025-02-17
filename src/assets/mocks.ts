const tableApps = [
  {
    app: {
      id: '1',
      name: 'zoom',
      category: 'video',
      avatar: '/',
    },

    connector: {
      name: 'reco',
      avatar: '/',
      lastUsed: new Date(),
    },

    users: [
      {
        avatar: '/',
        email: 'asdad@cc.com',
      },
      {
        avatar: '/',
        email: 'dsfr@cc.com',
      },
    ],
  },
  {
    app: {
      id: '2',
      name: 'slack',
      category: 'im',
      avatar: '/',
    },

    connector: {
      name: 'reco',
      avatar: '/',
      lastUsed: new Date(),
    },

    users: [
      {
        avatar: '/',
        email: 'asdad@cc.com',
      },
      {
        avatar: '/',
        email: 'dsfr@cc.com',
      },
    ],
  },
  {
    app: {
      id: '3',
      name: 'xsoar',
      category: 'security automation',
      avatar: '/',
    },

    connector: {
      name: 'reco',
      avatar: '/',
      lastUsed: new Date(),
    },

    users: [
      {
        avatar: '/',
        email: 'asdad@cc.com',
      },
      {
        avatar: '/',
        email: 'dsfr@cc.com',
      },
    ],
  },
  {
    app: {
      id: '4',
      name: 'torq',
      category: 'security automation',
      avatar: '/',
    },

    connector: {
      name: 'reco',
      avatar: '/',
      lastUsed: new Date(),
    },

    users: [
      {
        avatar: '/',
        email: 'asdad@cc.com',
      },
      {
        avatar: '/',
        email: 'dsfr@cc.com',
      },
    ],
  },
];

export const tableData = {
  table: {
    head: [
      { title: 'Application name' },
      { title: 'Category' },
      { title: 'Connectors (Data source)' },
    ],

    rows: tableApps,
  },
};
