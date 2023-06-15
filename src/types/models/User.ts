import Image from './Image';
import Model from './Model';

export default interface User extends Model {
  avatar?: Image | null;
  avatarId: number | null;
  name: string;
  username: string;
  email: string;
  role: string | null;
  locale: string | null;
}
