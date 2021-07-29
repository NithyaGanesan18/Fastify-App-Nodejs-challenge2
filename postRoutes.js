const stuController =require('../controller/stuController');
const routes = [
     {
        method: 'GET',
        url: '/api/Students',
        handler: stuController.getStuMarklist
      },
      {
        method: 'GET',
        url: '/api/Students/:id',
        handler: stuController.getSingleStudent
      },
      {
        method: 'POST',
        url: '/api/Students',
        handler: stuController.addStudent
      },
      {
        method: 'PUT',
        url: '/api/Students/:id',
        handler: stuController.updateStudent
      },
      {
        method: 'DELETE',
        url: '/api/Students/:id',
        handler: stuController.deleteStudent
      }
]
module.exports = routes;