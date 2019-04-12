module.exports = {
    getAll : (req,res,next) => {
        const dbInstance = req.app.get("db");
        
        dbInstance.get_inventory()
        .then(result => {
            res.status(200).json(result)
        })
        .catch(err => {
            res.status(500).send({errorMessage: "something went wrong"})
            console.log(err)
        })
            
    },

    create : (req, res, next) => {
        const dbInstance = req.app.get("db");

        dbInstance.create_inventory([req.body.name, req.body.price, req.body.img])
        .then(result => {
            res.status(200).json(result)
        })
        .catch(err =>{
            res.status(500).send({errorMessage: "something went wrong"})
            console.log(err)
         })
    } ,  

    Delete: (req, res, next) => {
        const dbInstance = req.app.get("db");

        dbInstance.delete_product(req.params.id)
        .then(result => {
            res.status(200).json(result)
        })
        .catch(err => {
            res.status(500).json({errorMessage: "something wrong with Delete method"})
            console.log(err)
        })
    },

    update : (req, res, next) => {
        const dbInstance = req.app.get("db");
        
        dbInstance.update_inventory([req.body.id, req.query.name, req.query.price, req.query.img])
        .then(result => {
            res.status(200).json(result)
        })
        .catch(err => {
            res.status(500).json({errorMessage: "something wrong with update"})
            console.log(err)
        })
    }
}