db.auth('root', 'wc-dreamix')

db = db.getSiblingDB('euro2020')

db.createUser({
  user: 'wc-dreamix',
  pwd: 'wc-dreamix',
  roles: [
    {
      role: 'readWrite',
      db: 'euro2020',
    },
  ],
});

db = db.getSiblingDB('euro2024')
db.insert()

db.createUser({
  user: 'wc-dreamix',
  pwd: 'wc-dreamix',
  roles: [
    {
      role: 'readWrite',
      db: 'euro2024',
    },
  ],
});
