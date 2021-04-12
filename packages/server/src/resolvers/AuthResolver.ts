import { Query, Resolver } from 'type-graphql';

@Resolver()
class AuthResolver {
  @Query(() => String)
  async auth(): Promise<string> {
    return 'auth';
  }
}

export default AuthResolver;
