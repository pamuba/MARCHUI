const bcrypt = require('bcrypt');

//IIFE
(
    async function main(){
        // increases the time to calculate the hash
        const saltRounds = 10;
        const originalPass = "Complex@123"
        const Pass = "Complex@123"

        const salt = await bcrypt.genSalt(saltRounds);

        const hashedPass = await bcrypt.hash(originalPass, salt)

        //save it to db
        console.log(hashedPass)

        //retrieve it from the db
        const isMatch = await bcrypt.compare(Pass, hashedPass)
        console.log(isMatch)


    }
)();


