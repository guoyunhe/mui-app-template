export default interface ValidationError {
  rule: string;
  field: string;
  message: string;
  args?: any;
}
