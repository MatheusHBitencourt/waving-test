# DEV

FROM node:22

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

RUN npx prisma generate

EXPOSE 3000 9229

CMD ["npm", "run","start:dev"]

# PROD
# # ----- Stage 2: Production Image -----
# FROM node:18-alpine
# 
# WORKDIR /usr/src/app
# 
# # Copy only package files and install production dependencies
# COPY package*.json ./
# RUN npm install --only=production
# 
# # Copy built application from the builder stage
# COPY --from=builder /usr/src/app/dist ./dist
# 
# # Expose your app port (adjust if needed)
# EXPOSE 3000
# 
# # Start the application
# CMD ["node", "dist/main.js"]