// const handelAddHotel = (req,res,db)=>{
// 	const {hotelRating,hotelImage,hotelName,hotelEmail,hotelPhone,hotelAddress,hotelOnlinePrice ,hotelOfferPrice} = req.body;
// 	     db.transaction(trx =>{
// 			trx.insert({
// 				hotelRating:hotelRating,
// 				hotelImage:hotelImage,
// 				hotelName:hotelName,
// 				hotelEmail:hotelEmail,
// 				hotelPhone:hotelPhone,
// 				hotelAddress:hotelAddress,
// 				hotelOnlinePrice:hotelOnlinePrice,
// 				hotelOfferPrice:hotelOfferPrice
// 			})
// 			.into('hotels').returning('hotelName')
// 			.then(trx.commit)
// 			.catch(trx.rollback)
// 			})
// 			.catch(err=> res.status(400).json('error'));
// 		};

// module.exports = handelAddHotel;