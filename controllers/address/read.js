import Address from "../../models/address.js";


const read = async (req, res) => {
  try {
    const addressId = await Address.find({user_id: req.params.id})
    console.log(addressId);
  if(addressId){
        return res.status(200).json({
            success: true,
            data: addressId,
        })
    } else {
        return res.status(404).json({
          message: [{
            path: 'exists',
            message: "The address doesn't exists"
          }]
        })
      }
    } catch (error) {
      return res.status(500).json({
        succes: false,
        message: [{
          path: 'internal',
          message: 'Internal server error'
        }]
      })
    }
}
export default read