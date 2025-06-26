import jwt from 'jsonwebtoken';

const authMiddleware = async (req, res, next) => {
  const { token } = req.headers;

  if (!token) {
    return res.status(401).json({
      success: false,
      message: "Not authorized. Please login again.",
    });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // ✅ Safely attach userId to req.user (not req.body)
    req.user = { userId: decoded.id };

    next();
  } catch (error) {
    console.error("JWT verification failed:", error.message);
    return res.status(401).json({
      success: false,
      message: "Token verification failed",
    });
  }
};

export default authMiddleware;
