import { Injectable } from '@nestjs/common';
import { PostType } from 'src/posts/post.interface';

@Injectable()
export class PostsService {
  private readonly posts: PostType[] = [];

  findAll(): PostType[] {
    return this.posts;
  }

  create(post: PostType) {
    this.posts.push(post);
  }
}
