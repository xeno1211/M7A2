//console.log("Test function")
const Loan = require('../models/loanModel')
exports.getData = async (req, res) => {
    const loans = await Loan.find()
    //console.log("Loans: " + loans)
    return await loans
    // res.status(200).json({
    //     status: "success",
    //     results: loans.length,
    //     data: {
    //         loans
    //     }
    //})
}


exports.getDataByID = async (req, res) => {
    const {id} = req.params
    const loans = await Loan.find({_id: id})
    res.status(200).json({
        status: "success",
        results: loans.length,
        data: {
            loans
        }
    })
}
exports.createloan = async  (req, res) => {
    try {
      // const newloan = new loan({})
      // newloan.save()
  
      const newloan = await Loan.create(req.body);
  
      res.status(201).json({
        status: 'success',
        data: {
          loan: newloan
        }
      });
    } catch (err) {
      res.status(400).json({
        status: 'fail',
        message: err
      });
    }
  };
exports.updateloan = async (req, res) => {
    try {
      const loan = await Loan.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true
      });
  
      res.status(200).json({
        status: 'success',
        data: {
          loan
        }
      });
    } catch (err) {
      res.status(404).json({
        status: 'fail',
        message: err
      });
    }
  };

  exports.deleteloan = async (req, res) => {
    try {
      await Loan.findByIdAndDelete(req.params.id);
  
      res.status(204).json({
        status: 'success',
        data: null
      });
    } catch (err) {
      res.status(404).json({
        status: 'fail',
        message: err
      });
    }
  };

  //module.exports = controller