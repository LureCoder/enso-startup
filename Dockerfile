# 第一阶段：构建项目
FROM node:24-alpine AS builder

# 设置工作目录
WORKDIR /app

# 复制package.json和package-lock.json
COPY package*.json ./

# 安装依赖
RUN npm install

# 复制项目文件
COPY . .

# 构建项目
RUN npm run build

# 第二阶段：使用Nginx提供静态文件
FROM nginx:alpine

# 复制构建结果到Nginx的静态文件目录
COPY --from=builder /app/out /usr/share/nginx/html

# 复制Nginx配置文件
COPY nginx.conf /etc/nginx/conf.d/default.conf

# 创建证书目录
RUN mkdir -p /etc/certs

# 暴露80和443端口
EXPOSE 80 443

# 启动Nginx
CMD ["nginx", "-g", "daemon off;"]
