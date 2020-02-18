import { SignUpRequest } from 'types/koa';
import Router from 'koa-router';
import firebaseClient from 'clients/firebase-client';
import userSignUpSchema from 'user/schemas/user-sign-up-schema';
import validate from 'utils/validator';

export default (router: Router ): void => {
  router.post('POST /users/sign-up', '/users/sign-up', async ctx => {
    validate(userSignUpSchema, ctx.request.body);

    const {
      email,
      password
    } = ctx.request.body as SignUpRequest;

    await firebaseClient.createUser({
      email,
      password
    })
  });
};
