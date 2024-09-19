class UserController {


    static getalluser = async(req,res) => {
        try{
            res.send("Hello user")
        } catch(error){
            console.log(error)
        }
    }





}

module.exports = UserController