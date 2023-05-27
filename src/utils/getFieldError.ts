export default function getFieldError(errors: any, field: string) {
  return errors?.errors?.find((err: any) => err.field === field)?.message;
}
