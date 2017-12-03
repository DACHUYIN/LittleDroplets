import { Photo } from './photo';

export class User {
    public userId: number;
    public userName: string;
    public password: string;
    public createdTime: Date;
    public photoList: Photo[];
    public likedPhotoList: Photo[];
}
