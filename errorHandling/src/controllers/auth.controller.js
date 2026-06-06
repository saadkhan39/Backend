export async function register(req,res,next) {
    try {
       throw new Error("user already exists")
    } catch (error) {
        error.status = 409
       next(error) 
    }
}

