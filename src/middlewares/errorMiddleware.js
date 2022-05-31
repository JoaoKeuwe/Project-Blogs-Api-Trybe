const errorMiddleware = (err, _req, res, _next) => {
if (err.status) {
    res.status(err.status).json({ message: err.message }); 
}
res.status(500).json({ message: err.message });
};

module.exports = errorMiddleware;