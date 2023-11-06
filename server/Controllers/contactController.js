const contactModel = require('../Models/contactModel');



async function postcontactus(req, res) {
    
    const { user_name, user_email, user_message } = req.body;
    console.log( user_name, user_email, user_message)
    try {
        const result = await contactModel.contactus(user_name, user_email, user_message);
        //console.log(result);
        res.status(201).json({ message: 'Contact us form data saved successfully!' });
    } catch (error) {
        console.log(error);
        res.status(401).json("error in contact us controller");
    }
  };

async function getmessages(req, res){   
    try{
        const get = gatall();
        res.status(200).json(get);
    }catch(error){
        res.status(500).json(error);
    }
}

  module.exports ={
    postcontactus,
    getmessages
};


