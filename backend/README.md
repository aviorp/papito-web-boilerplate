# Node.Js - Skeleton using TypeScript

## Overview

This Server made With Express library to create a Restful Server.

### Commands

- npm run dev : Create Dist folder with the compiled files (Compiles to JS) & run as Node Program.
- npm start : Start the Dev Server using Nodemon.
- npm run build : Compiling the TS files to JS files as Production mode.

### I want to create all of this by my own ! how can i do this ?

1. Install typescript globally:
   npm i -g typescript

2. Create src folder and in there create app.ts file.

3. Create tsconfig file in root folder by the command:
   tsc --init

4. Uncomment and change the following properties:
   "target": "esnext",
   "sourceMap": true,
   "outDir": "./dist",
   "rootDir": "./src",
   "moduleResolution": "node",

5. Install the following packages by the command:
   npm i -D express typescript ts-node nodemon mongoose @types/node @types/express

6. Create a package json file by the command:
   npm init --y

7. add the following scripts in package.json file:

   "start": "node dist/app.js" - start the compiled js server

   "dev": "nodemon src/app.ts" - start the ts dev server

   "build":"tsc -p ." - compile ts files to dist folder with js source

8. In launch.json, replace this following code with the default :

{
"version": "0.2.0",
"configurations": [
{
"type": "node",
"request": "launch",
"name": "Launch Program",
"skipFiles": [
"<node_internals>/**"
],
"program": "${workspaceFolder}\\src\\app.ts",
            "preLaunchTask": "tsc: build - tsconfig.json",
            "outFiles": [
                "${workspaceFolder}/\*_/_.js"
]
}
]
}
