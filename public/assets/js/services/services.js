
// Contacts Factory
app.factory('contacts', function contactsFactory($resource) {

    var contacts = [
        {
            name: 'Stephen Radford',
            phone: '0123456789',
            address: '123, Some Street\nLeicester\nLE1 2AB',
            email: 'stephen@email.com',
            website: 'stephenradford.me',
            notes: 'Some thing here'
        },
        {
            name: 'Declan Proud',
            phone: '91234859',
            address: '234, Some Street\nLeicester\nLE1 2AB',
            email: 'declan@declan.com',
            website: 'declanproud.me',
            notes: 'Some notes about the contact.'
        },
        {
            name: 'Sumit Singh',
            phone: '8034677003',
            address: '234, Nishi Ikebukuro\nTokyo\nJapan\n171-0021',
            email: 'sumit@singh.com',
            website: 'jetnixx.me',
            notes: 'Some notes about the contact.'
        },
        {
            name: 'Shivi Singh',
            phone: '02135468',
            address: '234, Some Street\nLeicester\nLE1 2AB',
            email: 'singh@shivi.com',
            website: 'ccccccccccud.me',
            notes: 'Some notes contact.'
        }
    ];

    return {
        get: function () {
            return contacts;
        },
        find: function (index) {
            return contacts[index];
        },
        create: function (contact) {
            contacts.push(contact);
        },
        destroy: function (index) {
            contacts.splice(index, 1);
        }
    };
});