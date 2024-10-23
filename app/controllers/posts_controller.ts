import type { HttpContext } from '@adonisjs/core/http'
import PostPolicy from '#policies/post_policy'

export default class PostsController {
  async render({ bouncer, inertia, response }: HttpContext) {
    if (await bouncer.with(PostPolicy).denies('view')) {
      return response.unauthorized()
    }

    return inertia.render('home')
  }
}
