import Image from './Image';
import Model from './Model';

export default interface User extends Model {
  avatar?: Image;
  avatarId: number | null;
  name: string;
  username: string;
  email: string;
}
