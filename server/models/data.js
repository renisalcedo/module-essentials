var Person = {
  name: 'Reni',
  lastName: 'Salcedo',
  github:   'renisalcedo',
  email:    'salcedoreynaldo5@gmail.com'
};

var Page = {
  title:       'Module Essentials',
  description: 'Different module resources for building any Nodejs application. All different modules mentioned on the same page. Modules for building, testing and deploying.',
  repository:  `${Person.github}/module-essentials`
};

module.exports = {
  Person,
  Page
};
