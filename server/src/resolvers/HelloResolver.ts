import { Query } from 'type-graphql';

class HelloResolver {
  @Query(() => String)
  async helloWorld(): Promise<string> {
    return 'Hello World';
  }
}

export default HelloResolver;
