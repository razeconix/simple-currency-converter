module.exports = (request, response) => {
        const input = request.body.input
        const currency1 = request.body.currency1
        const currency2 = request.body.currency2

        const context = {converted}
    response.render('converted')
  }