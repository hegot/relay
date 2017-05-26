class User {}
var viewer = new User();
viewer.id = '1';
viewer.name = 'Anonymous';

module.exports = {
  getUser: (id) => id === viewer.id ? viewer : null,
  getViewer: () => viewer,
  User,
};