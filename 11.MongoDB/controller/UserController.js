const express = require('express')

const UserModel = require('../model/user')

const getUser = async (req, res) => {
    try {
        let id = req.params.id;
        let data = await UserModel.findById(id);
        if (data) {
            res.send(data);
        } else {
            res.status(404).send("User not found");
        }
    } catch (err) {
        // 发送错误消息到客户端
        res.status(500).send(err.message);
    }
}

const addUser = async (req, res) => {
    try {
        const { username, password, age } = req.body
        let result = await UserModel.create({
            username,
            password,
            age
        })
        console.log(result)
        res.send(result)
    } catch (error) {
        // 发送错误消息到客户端
        res.status(500).send(error.message);
    }
}

module.exports = {
    getUser,
    addUser
}