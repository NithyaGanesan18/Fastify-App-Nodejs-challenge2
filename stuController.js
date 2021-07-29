const boom = require('boom')
const Student = require("../models/post")
// get all post 
exports.getStuMarklist = async (req, reply) => {
    try {
        let stu = await Student.find();
        return stu;
    } catch (err) {
        throw boom.boomify(err)
    }
}
// get single post by id 
exports.getSingleStudent = async (req, reply) => {
    try {
        const id = req.params.id
        let marks = await Student.findById(id);
        return marks
    } catch (err) {
        throw boom.boomify(err)
    }
}
exports.addStudent = async (req, reply) => {
    try {
        let mark = new Student(req.body);
        let newstu = await mark.save();
        return newstu
    } catch (err) {
        throw boom.boomify(err)
    }
}
exports.updateStudent = async (req, reply) => {
    try {
        const id = req.params.id
        let result = await Student.findByIdAndUpdate(id, req.body, {
            new: true
        });
        return result
    } catch (err) {
        throw boom.boomify(err)
    }
}
exports.deleteStudent = async (req, reply) => {
    try {
        const id = req.params.id
        let result1 = await Student.findByIdAndDelete(
            id
        );
        return {Message:"Post Deleted"}
    } catch (err) {
        throw boom.boomify(err)
    }
}