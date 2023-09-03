const is_valid = (key: string, default_env: string | undefined = undefined) => {
  const env_val = process.env[key] || default_env;

  if (env_val == null) {
    throw new Error(`Environment variable - ${key} is not set`);
  }

  return env_val;
};

export const config = {
  AWS_ACCESS_ID_NEXT: is_valid('AWS_ACCESS_ID_NEXT'),
  AWS_SECRET_KEY_NEXT: is_valid('AWS_SECRET_KEY_NEXT'),
  AWS_REGION_NEXT: is_valid('AWS_REGION_NEXT'),
  TABLENAME: is_valid('TABLENAME'),
  BASE_URL: is_valid('BASE_URL', 'http://localhost:3000'),
  AWS_LAMBDA_KEY: is_valid('AWS_LAMBDA_KEY'),
  AWS_LAMBDA_SECRET: is_valid('AWS_LAMBDA_SECRET'),
  AWS_LAMBDA_FUNCTION: is_valid('AWS_LAMBDA_FUNCTION'),
  AWS_LAMBDA_REGION: is_valid('AWS_LAMBDA_REGION'),
  GOOGLE_CLIENT_ID: is_valid('GOOGLE_CLIENT_ID'),
  GOOGLE_SECRET: is_valid('GOOGLE_SECRET'),
  ENVIRONMENT: is_valid('ENVIRONMENT'),
};
