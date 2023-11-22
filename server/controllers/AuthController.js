
export const checkUser = (req, res, next) => {
    try {
        const { email } = req.body;
    } catch (error) {
        next(error);
    }
};