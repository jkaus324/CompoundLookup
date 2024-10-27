# Step 1: Use a Node.js base image
FROM node:14

# Step 2: Set the working directory inside the container
WORKDIR /app

# Step 3: Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Step 4: Install dependencies
RUN npm install

# Step 5: Copy all the remaining backend files
COPY . .

# Step 6: Expose the port (3307 as per your .env)
EXPOSE 3307

# Step 7: Start the application
CMD ["node", "index.js"]
