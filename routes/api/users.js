const express = require('express');
const randomId = require('random-id');
const router = express.Router();
const users = [
    {
        id: "1",
        firstName: "first1",
        lastName: "last1",
        email: "abc@gmail.com"
    },
    {
        id: "2",
        firstName: "first2",
        lastName: "last2",
        email: "abc@gmail.com"
    },
    {
        id: "3",
        firstName: "first3",
        lastName: "last3",
        email: "abc@gmail.com"
    }
];
router.get('/', (req, res) => {
    res.json(users);
});
router.post('/', (req, res) => {
    const user = req.body.user;
    user.id = randomId(10);
    users.push(user);
    res.json("User added!");
});
module.exports = router;