let getTest = async (req, res) => {
	res.status(200).json({
		message: "Test API is REALLY working!",
	});
};

export default getTest