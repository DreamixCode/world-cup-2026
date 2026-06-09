db.auth('root', 'wc-dreamix')

db = db.getSiblingDB('wc2026')

db.createUser({
  user: 'wc-dreamix',
  pwd: 'wc-dreamix',
  roles: [
    {
      role: 'readWrite',
      db: 'wc2026',
    },
  ],
});
