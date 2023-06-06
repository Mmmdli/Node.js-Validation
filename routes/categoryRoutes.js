const express = require('express');
const { categoryController } = require('../controllers/categoryController');
const { body } = require('express-validator');
const { validate } = require('../middleware/validation');

const router = express.Router();


router.get('/', categoryController.getAll)
router.get('/:id', categoryController.getById)
router.post(
    '/',
    [body('name').notEmpty().withMessage("Name cannot be empty!")],
    [body('surname').notEmpty().withMessage("Surname cannot be empty")],
    [
        body("email")
        .notEmpty()
        .withMessage('Email cannot be empty.')
        .isEmail()
        .withMessage('Invalid email format.'),
    ],
    [
        body('password')
        .notEmpty()
        .withMessage('Password cannot be empty.')
        .isLength({ min:8 })
        .withMessage('Password should be at least 8 characters long.'),
    ],

    validate,
     categoryController.add
     );
router.delete('/:id', categoryController.delete);
router.delete('/:login', categoryController.login);



module.exports = router;
// uxlklmd06ZfaSWyv
// mongodb+srv://zivar:<password>@cluster0.avlrkki.mongodb.net/