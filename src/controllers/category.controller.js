const CategoryServices = require("../services/categories.services");

const getallCategory = async (req, res) => {
  try {
    const category = await CategoryServices.getAll();
    res.status(200).json({
      status: "succes",
      category,
    });
  } catch (error) {
    res.status(400).json(error);
  }
};

const createCategory = async (req, res) => {
  try {
    const data = req.body;
    const category = await CategoryServices.create(data);
    res.status(200).json({
      status: "succes",
      category,
    });
  } catch (error) {
    res.status(400).json(error);
  }
};

const updateCategory = async(req, res)=>{
   try {
     const { id } = req.params;
     const data = req.body;
     const result = await CategoryServices.updated(data, id);

     res.status(200).json({
       status: "Succes",
       result,
     });
   } catch (error) {
     res.status(400).json({
       status: "error",
       error,
     });
   }

}

module.exports = {
  getallCategory,
  createCategory,
  updateCategory,
};
