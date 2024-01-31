module.exports = (schema) => {
    return async (req, res, next) => {
        try {
            const valid = await schema.validateAsync(req.body);
            req.body = valid;
            next();
        } catch (err) {
            res.status(400).json(err.details);
        }
    }
}