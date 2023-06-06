const { Category } = require("../models/Category");

const categoryController = {
  getAll: (req, res) => {
    Category.find()
      .then((data) => {
        res.json(data);
      })
      .catch((err) => {
        res.status(500).json(err);
      });
  },
  getById: (req, res) => {
    let id = req.params.id;
    Category.findById(id)
      .then((data) => {
        if (data) {
          res.json(data);
        } else {
          res.status(400).json({ msg: "Not Found!" });
        }
      })
      .catch((error) => {
        res.status(500).json(error);
      });
  },
  add: (req, res) => {
    let category = new Category({
      name: req.body.name,
      surname: req.body.surname,
      email: req.body.email,
      password: req.body.password,
    });
    category.save();
    res.json(category);
  },
  update: (req, res) => {
    let id = req.params.id;
    let updatedCategory = {
      name: req.body.name,
      surname: req.body.surname,
      email: req.body.email,
      password: req.body.password,
    };
    Category.findByIdAndUpdate(id, updatedCategory, { new: true })
      .then((updatedCategory) => {
        if (updatedCategory) {
          res.json(updatedCategory);
        } else {
          res.status(400).json({ msg: "Not Found!" });
        }
      })
      .catch((error) => {
        res.status(500).json(error);
      });
    },
    delete: (req, res) => {
        let id = req.params.id;
        Category.findByIdAndDelete(id)
          .then((data) => {
            res.json(data);
          })
          .catch((error) => {
            res.status(500).json(error);
          });
      },


      login: (req,res) => {
        const {email,password} = req.body;
        Category.findOne({ email })
        .then((category) => {
         if (!category) {
            return res.status(404).json({ msg: "Category not found"});
         } 
         if (category.password !== password) {
            return res.status(401).json({ msg: "Invalid password"});
         }
         res.json({ msg: "Login successful",category});

        })
        .catch((error) => {
            res.status(500).json(error);
        });
      },
    };
    module.exports = { categoryController };

      

















