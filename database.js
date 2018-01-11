const Sequelize = require('sequelize');
const sequelize = new Sequelize('bulletinboard', process.env.POSTGRES_USER, null, {
  host: 'localhost',
  dialect: 'postgres',
  logging: false
});

const Posts = sequelize.define('posts', {
    title: Sequelize.STRING(100),
    body: Sequelize.TEXT,
    avatar: Sequelize.STRING(30),
    name: Sequelize.STRING(100)
}, {
    timestamps: false
});

//Functions
function makeMap(obj) {
    return obj.map(i => i.dataValues)
}

exports.retrieveRecords = (offset, sort) => {
    return Posts.findAll({
        order: [['id', sort]],
        limit: 4,
        offset: offset}
    ).then(makeMap)
}

exports.insertRecords = (req) => {
    let parameters = [ req.body.com_title, req.body.com_body, req.body.com_avatar, req.body.com_name ];
    return Posts.create({
        title: parameters[0],
        body: parameters[1],
        avatar: parameters[2],
        name: parameters[3]
    });
}

// Synchronisation
sequelize.sync({ force: true}).then(() => {
    Posts.create({ title: `Hello World!`, body: `Hi there, welcome to our little place, feel free to leave a comment!`, avatar: `sheep`, name: `Robert`});
    Posts.create({ title: `This is amazing!`, body: `I just stumbled upon this place, it's amazing. Keep up the good work!`, avatar: `elephant`, name: `Max`});
    Posts.create({ title: `What's this about though?`, body: `You seem like nice people but what's this about?`, avatar: `kitty`, name: `Dave`});
    Posts.create({ title: `This Sucks`, body: `Whoever setup this site should be fired or something`, avatar: `hippo`, name: `Jennifer`});
    Posts.create({ title: `Hi!`, body: `My name is JSON. JSON Bourne.`, avatar: `hyena`, name: `Jason`});
    Posts.create({ title: `I'm a freaking Prince`, body: `I'm a freaking prince!! How about that!!`, avatar: `elephant`, name: `William`});
    Posts.create({ title: `Uhh`, body: `I'm not really sure about any of this`, avatar: `puppy`, name: `Janick`});
    Posts.create({ title: `My name is burt`, body: `I'm from Kentucky. Woo!`, avatar: `bunny`, name: `Burt`});
    Posts.create({ title: `Rock and roll`, body: `Check out my new album on bandcamp`, avatar: `hippo`, name: `Henry Rollins`});
    Posts.create({ title: `First!`, body: `First!`, avatar: `kitty`, name: `Sanne123`});
    Posts.create({ title: `Colourful`, body: `This site has an amazing colorscheme. Props to the webmaster`, avatar: `sheep`, name: `Baklap`});
    Posts.create({ title: `I'm the one`, body: `I knwow you're out there`, avatar: `elephant`, name: `Thomas A. Anderson`});
    Posts.create({ title: `Can anybody help me?`, body: `I've got a problem. Yesterday my pet rock died and I've been sad ever since. My boyfriend tells me to get over it, what should I do?`, avatar: `bunny`, name: `Monica`});
    Posts.create({ title: `@Monica get over it`, body: `^`, avatar: `hyena`, name: `Gerald`});
    Posts.create({ title: `Jimmy knows best`, body: `Hi I'm jimmy and I knows best`, avatar: `kitty`, name: `Jimmy`});
    Posts.create({ title: `The first, the last`, body: `We've got it together baby. We've really got it together.`, avatar: `elephant`, name: `Barry White`});
    Posts.create({ title: `Reminder`, body: `Just a friendly reminder, this is a bulletin board with comments from you lot on it. Keep the posts coming!`, avatar: `sheep`, name: `Robert`});
    Posts.create({ title: `Burgers 1EUR`, body: `All burgers are 1EUR today. Come get some you junk food addicts.`, avatar: `hyena`, name: `Ronald McDonald`});
    Posts.create({ title: `Shakes as well btw`, body: `^`, avatar: `hyena`, name: `Ronald McDonald`});
    Posts.create({ title: `This almost works`, body: `This almost works with sequelize.`, avatar: `puppy`, name: `Johnny`});
    Posts.create({ title: `Oh danny boy`, body: `The pipes? Crap, I forgot how the song goes`, avatar: `hippo`, name: `Danny`});
});
