const parseEnv = () => {
  const envs = Object.entries(process.env).filter(item => item[0].startsWith("RSS_"));
  const mapped = envs.map(item => `${item[0]}=${item[1]}`);

  process.stdout.write(mapped.join("; "));
};

parseEnv();
