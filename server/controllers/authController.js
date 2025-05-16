const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// bcrypt.hash(): Şifreyi veritabanına kaydetmeden önce güvenli hale getirir.

// bcrypt.compare(): Giriş sırasında gelen şifre ile veritabanındaki hash’i karşılaştırır.

// jwt.sign(): Token oluşturur, kullanıcıya gönderilir. Bu token ile kullanıcı, blog sayfasına erişir.

const registerUser = async (req, res) => {
  const { username, email, password } = req.body;

  try {
    const existingUser = await User.findOne({ email });

    // Daha önce kayıtlı mı kontrol

    if (existingUser) {
      return res.stats(400).json({ message: "Email already existing!" });
    }

    // Şifreyi hashleme

    const hashedPwd = await bcrypt.hash(password, 10);

    // Yeni kullanıcı

    const newUser = new User({
      username,
      email,
      password: hashedPwd,
    });

    await newUser.save();

    res.status(201).json({ message: "Signed Up!" });

    // Eğer ki yeni kullanıcı kaydetme işlemimiz başarılıysa status code 200 değilse 500.
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error!" });
  }
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    //Kullanıcı var mı yok mu kontrolü
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: "Email doesnt exist!" });

    //Şifre doğru mu kontrolü
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch)
      return res.status(400).json({ message: "Password is wrong " });

    //JWT Token
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1d",
    });

    res.json({ token, user: { id: user._id, username: user.username } });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = { registerUser, loginUser };
