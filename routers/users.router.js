const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const { Users } = require("../models");
const createError = require("../utils/errorResponse");

require("dotenv").config();

router.post("/auth/login", async (req, res, next) => {
  const { email, password } = req.body;

  const user = await Users.findOne({ where: { email } });
  if (!user) {
    return next(
      createError(
        400,
        "해당 이메일을 가진 사용자를 찾을 수 없습니다."
      )
    );
  }

  const isValidPassword = await bcrypt.compare(
    password,
    user.password
  );
  if (!isValidPassword) {
    return next(createError(400, "비밀번호가 일치하지 않습니다."));
  }

  const expiresIn = "12h";
  const accessToken = jwt.sign(
    { userId: user.id },
    process.env.JWT_SECRET,
    { expiresIn }
  );

  return res.status(200).json({
    message: "로그인에 성공했습니다.",
    data: {
      accessToken,
      expiresIn,
      userId: user.id,
    },
  });
});

module.exports = router;
