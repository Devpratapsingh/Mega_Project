const asncHandler=(requestHandler)=>{
    (req,res,next)=>{
        Promise.resolve().catch((err)=>next(err))
    }
}



export{asncHandler}






//const asyncHandler =()=>{}
// const asyncHandler =(func)=>()=>{}
// const asyncHandler = (func)=>async()=>{}



// const asyncHandler = (fn)=>async(req,res,next)=>{
//     try {
        
//     } catch (error) {
//         res.status(err.code||500).json({
//             success:false,
//             message:err.message
//         })
//     }
// }


