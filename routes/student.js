const express=require('express');
const studentcontroller=require('../controllers/studentcontroller')
const router=express.Router();
router.use(express.urlencoded({extended:false}))
router.get('/',(req,res)=>{
    res.render('home')// render ka means :- uss user dekha dena and show kar dena
})
router.post('/add/student',(req,res)=>{
studentcontroller.addStudent(req,res)
})
router.get('/students',(req,res)=>{
    studentcontroller.getStudents(req,res)
})

router.get('/student/page/for/edit/:id',(req,res)=>{ //........yah studentforedit se aaya hai  <td><a href="/student/page/for/edit/<%= student.id %>" class="btn btn-warning w-75">edit</a></td>
    studentcontroller.getPageForEditStudent(req,res)
})
router.post('/edit/student/:id',(req,res)=>{
    studentcontroller.editStudent(req,res);
})
router.get('/student/delete/:id',(req,res)=>{
    studentcontroller.deleteStudent(req,res)
})
module.exports=router;