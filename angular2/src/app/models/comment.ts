import { Photo } from './photo';
import { User } from './user';

export class Comment {
   public commentId: number;
   public photo: Photo;
   public userName: string;
   public content: string;
   public photoId: number;
}
