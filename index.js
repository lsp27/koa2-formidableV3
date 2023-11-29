const formidable = require('formidable')

module.exports = function formidableKoa(opt) {
    return async function (ctx, next) {
        if (ctx.method.toLowerCase() === 'post') {
            const form = formidable.formidable({})
            for (const key in opt) {
                form[key] = opt[key]
            }
            await new Promise((reslove, reject) => {
                form.parse(ctx.req, (err, fields, files) => {
                    if (err) {
                        reject(err)
                    } else {
                        ctx.request.body = fields
                        ctx.request.files = files
                        reslove()
                    }
                })
            })
            await next()
        }else{
            await next()
        }
    }
}