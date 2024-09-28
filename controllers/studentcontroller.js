const Student=require('../models/Student');
async function addStudent(req,res){
    try{
        // console.log(req.body);
        let student=new Student(req.body)
        await student.save();
        // res.end("<h1> Data has been inserted is sucessfully.....")
        let students=await Student.find({});
        res.render('studentlist',{
            students:students //...............ish me data rakha hai................
        })
    }catch(err){
        console.log("error",err)
    }

}

async function getStudents(req,res){
    try{
        let students=await Student.find({});
        // res.send(students)
        res.render('studentlist',{
            students:students //...............ish me data rakha hai................
        })
    }catch(err){
        console.log("error:- controler getstudents",err)
    }
}
async function getPageForEditStudent(req,res){
    try{//.......................yah id new page open krega .......................
        let id=req.params.id;
        let student=await Student.findOne({_id: id});
        // console.log(student);
        // res.send(student);
        res.render('studentforedit',{
            student: student
        })
    }catch(err){
        console.log(err)
    }
}
async function editStudent(req,res){
    try{
        let id =req.params.id;//..............id aa rhe hai yah nahi
        // console.log(req.body,'req.body')//...........body aa rhe hai yah nahi
        let student = await Student.findOne({_id: id});//............student uss me hai yah nahi
        // console.log(student);
        student.rollNo=req.body.rollNo;
        student.firstName=req.body.firstName;
        student.lastName=req.body.lastName;
        student.fatherName=req.body.fatherName;
        student.adharCard=req.body.adharCard;
        student.mobileNo=req.body.mobileNo;//.....................yah aane wala update data hai 
        await student.save();//..........save promise lota rha hai 
        // res.send("<h1> Student edit Data Sucessfully......... </h1>")
        let students=await Student.find({});
        // res.send(students)
        res.render('studentlist',{
            students:students //...............ish me data rakha hai................
        })
        
        
    }catch(err){
        console.log(err.message,'msg');
    }
}

async function deleteStudent(req,res) {
    try{
        // let id =req.params.id;
        // console.log(id,'id');
        let id =req.params.id;
        console.log(id,'id');
        await Student.deleteOne({_id: id})
        // res.end("<h1> Student has been deleted sucessfully </h1>")
        let students=await Student.find({});
        // res.send(students)
        res.render('studentlist',{
            students:students //...............ish me data rakha hai................
        })
    }catch(err){
        console.log("studet is delete",err)
    }
}
module.exports={
    addStudent,
    getStudents,
    getPageForEditStudent,
    editStudent,
    deleteStudent

}