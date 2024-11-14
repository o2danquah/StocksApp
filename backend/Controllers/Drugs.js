const { queryPostDrugs, queryInputDrugs} = require("../Service/queryDrugs");

const getDrugs = async(req, res) => {
    try {
        const drugs = await queryPostDrugs()
       return res.send(drugs) 
    } catch (error) {
        res.status(200).json("Error in generating drugs")
    }  
}

const postDrugs = async(req, res) => {
    try {  
    const info = await queryInputDrugs(req.body)
    res.json(info)
    
    } catch (error) {
       res.status(200).json("Error in inputing drugs")    
    }
}

module.exports = {postDrugs, getDrugs}