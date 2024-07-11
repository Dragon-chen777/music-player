/** @type {import('next').NextConfig} */
import withAntdLess from 'next-plugin-antd-less';

const nextConfig = {
  reactStrictMode: true,
  ...withAntdLess({}) // 引入less
};

export default nextConfig;
