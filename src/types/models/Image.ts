import Model from './Model';

export default interface Image extends Model {
  url: string;
  path: string;
  size: number;
  width: number;
  height: number;
}
