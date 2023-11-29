'use strict'

import { formidable } from 'formidable';

export default function (opt) {
    return async function (ctx, next) {
        const form = formidable({})
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
    }
}