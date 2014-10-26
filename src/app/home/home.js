/**
 * Each section of the site has its own module. It probably also has
 * submodules, though this boilerplate is too simple to demonstrate it. Within
 * `src/app/home`, however, could exist several additional folders representing
 * additional modules that would then be listed as dependencies of this one.
 * For example, a `note` section could have the submodules `note.create`,
 * `note.delete`, `note.edit`, etc.
 *
 * Regardless, so long as dependencies are managed correctly, the build process
 * will automatically take take of the rest.
 *
 * The dependencies block here is also where component dependencies should be
 * specified, as shown below.
 */
angular.module( 'ngBoilerplate.home', [
  'ui.router',
  'plusOne'
])

/**
 * Each section or module of the site can also have its own routes. AngularJS
 * will handle ensuring they are all available at run-time, but splitting it
 * this way makes each module more "self-contained".
 */
.config(function config( $stateProvider ) {
  $stateProvider.state( 'home', {
    url: '/home',
    views: {
      "main": {
        controller: 'HomeCtrl',
        templateUrl: 'home/home.tpl.html'
      }
    },
    data:{ pageTitle: 'Home' }
  });
})

/**
 * And of course we define a controller for our route.
 */
.controller( 'HomeCtrl', function HomeController( $scope , $location) {
  $scope.class = [{"year" : 2015},{"year" : 2016},{"year" : 2017},{"year" : 2018}];
  $scope.major = ["Architecture Major",
"Landscape Architecture Major",
"Sustainable Environmental Design Major",
"Urban Studies Major",
"Conservation and Resource Studies Major",
"Environmental Economics and Policy Major",
"Environemtnal Sciences Major",
"Forestry and Natural Resources Major",
"Genetics and Plant Biology Major",
"Microbial Biology Major",
"Molecular Environmental Biology Major",
"Molecular Toxicology Major",
"Nutritional Science Major",
"Society and Environment Major",
"Chemical Biology Major",
"Chemical Engineering Major",
"Chemistry Major",
"Bioengineering Major",
"Civil Engineering Major",
"Electrical Engineering and Computer Science Major",
"Energy Engineering Major",
"Engineering Mathematics and Statistics Major",
"Engineering Physics Major",
"Environmental Engineering Science Major",
"Industrial Engineering and Operations Research Major",
"Joint Bioengineering and Materials Science Major",
"Joint Electrical Engineering & Computer Sciences and Materials Science Major",
"Joint Electrical Engineering and Nuclear Engineering Major",
"Joint Materials Science and Mechanical Engineering Major",
"Joint Materials Science and Nuclear Engineering Major",
"Joint Mechanical Engineering and Nuclear Engineering Major",
"Materials Science and Engineering Major",
"Mechanical Engineering Major",
"Nuclear Engineering Major",
"Business Administration Major",
"African American Studies Major",
"American Studies Major",
"Anthropology Major",
"Applied Mathematics Major",
"Asian American and Asian Diaspora Studies Major",
"Asian American and Asian Diaspora Studies Major",
"Asian Studies Major",
"Astrophysics Major",
"Atmospheric Science Major",
"Biochemistry & Molecular Biology Major",
"Cell Developmental Biology Major",
"Celtic Studies Major",
"Chemistry Major",
"Chicano/Latino Studies Major",
"Chinese Major",
"Classical Civilizations Major",
"Cognitive Science Major",
"Computer Science Major",
"Czech, Polish, Bosnian, Croatian, and Serbian Language and Literature Major",
"Dance Performance Studies Major",
"Development Studies Major",
"Dutch Studies Major",
"Economics Major",
"English Major",
"Environmental Earth Science Major",
"Ethnic Studies Major",
"Film Major",
"French Major",
"Gender and Women's Studies Major",
"Genetics, Genomics & Development Major",
"Geography Major",
"Geology Major",
"Geophysics Major",
"German Major",
"Greek Major",
"History of Art Major",
"History Major",
"Iberian Language and Literature Major",
"Immunology and Pathogenesis Major",
"Integative Biology Major",
"Interdisciplinary Studies Major",
"Italian Studies Major",
"Japanese Major",
"Latin American Literatures Major",
"Latin Major",
"Legal Studies Major",
"Linguistics Major",
"Linguistics Major",
"Luso-Brazilian Language and Literature Major",
"Luso-Brazilian Language and Literature Major",
"Marine Science Major",
"Mathematics Major",
"Media Studies Major",
"Middle Eastern Studies Major",
"Music Major",
"Native American Studies Major",
"Near Eastern Civilizations Major",
"Neurobiology Major",
"Operations Research and Management Science Major",
"Peace and Conflict Studies Major",
"Philosophy Major",
"Physics Major",
"Planetary Science Major",
"Political Economy Major",
"Political Science Major",
"Practice of Art Major",
"Psychology Major",
"Religious Studies Major",
"Rhetoric Major",
"Russian / East European / Eurasian Cultures Major",
"Russian Language and Literature Major",
"Scandinavian Major",
"Sociology Major",
"South and Southeast Asian Languages and Literatures Major",
"Spanish Language and Literature Major",
"Statistics Major",
"Public Health Major",
"Social Welfare Major"];
  $scope.getHelp = function() {
    $location.path('/add');
  };

})

;
