export default {
  swagger: "2.0",
  info: {
    version: "1.0.0",
    title: "Node Express Skeleton",
    description: "A Skeleton made for self use.",
    license: {
      name: "MIT",
      url: "https://opensource.org/licenses/MIT",
    },
  },
  host: "localhost:3000",
  basePath: "/",
  tags: [
    {
      name: "Users",
      description: "API for users in the system",
    },
    {
      name: "Auth",
      description: "User Authentications & register.",
    },
  ],
  paths: {
    "/users/get-users": {
      get: {
        tags: ["Users"],
        summary: "Get all users in the api.",
        responses: {
          200: {
            description: "OK",
            schema: {
              $ref: "#/definitions/Users",
            },
          },
        },
      },
    },
    "/users/add-user": {
      post: {
        tags: ["Users"],
        summary: "Create new user in the api.",
        description: "Create new user in the api.",
        parameters: [
          {
            name: "user",
            in: "body",
            description: "User that we want to create",
            schema: {
              $ref: "#/definitions/User",
            },
          },
        ],
        produces: ["application/json"],
        responses: {
          201: {
            description: "New user is created",
            schema: {
              $ref: "#/definitions/User",
            },
          },
        },
      },
    },
    "/users/{email}": {
      get: {
        tags: ["Users"],
        summary: "Get specific user by his Email.",
        parameters: [
          {
            name: "email",
            in: "path",
            description: "Email that we want to search user with.",
            schema: {
              $ref: "#/definitions/User",
            },
          },
        ],
        responses: {
          200: {
            description: "OK",
            schema: {
              $ref: "#/definitions/Users",
            },
          },
        },
      },
    },
    "/users/update-user": {
      put: {
        tags: ["Users"],
        summary: "Update specific user by his Email.",
        parameters: [
          {
            name: "email",
            in: "body",
            description: "Email that we want to search user with.",
            schema: {
              $ref: "#/definitions/User",
            },
          },
        ],
        produces: ["application/json"],
        responses: {
          200: {
            description: "User Updated.",
            schema: {
              $ref: "#/definitions/User",
            },
          },
        },
      },
    },
    "/users/delete-user": {
      delete: {
        tags: ["Users"],
        summary: "delete specific user by his Email.",
        parameters: [
          {
            name: "email",
            in: "body",
            description: "Email that we want to delete user with.",
            schema: {
              type: "object",
              properties: {
                email: {
                  type: "string",
                },
              },
            },
          },
        ],
        produces: ["application/json"],
        responses: {
          200: {
            description: "User Deleted.",
          },
        },
      },
    },
    "/auth/register": {
      post: {
        tags: ["Auth"],
        summary: "Register New User",
        parameters: [
          {
            name: "user",
            in: "body",
            description: "User that we want to create",
            schema: {
              $ref: "#/definitions/User",
            },
          },
        ],
        produces: ["application/json"],
        responses: {
          201: {
            description: "User Created.",
            schema: {
              $ref: "#/definitions/User",
            },
          },
        },
      },
    },
    "/auth/login": {
      post: {
        tags: ["Auth"],
        summary: "Login to the Server",
        parameters: [
          {
            name: "user",
            in: "body",
            description:
              "Send credentials and the server will send you a valid token.",
            schema: {
              type: "object",
              properties: {
                email: {
                  type: "string",
                },
                password: {
                  type: "string",
                },
              },
            },
          },
        ],
        produces: ["application/json"],
        responses: {
          201: {
            description: "Valid Token.",
          },
        },
      },
    },
  },
  definitions: {
    User: {
      required: ["email", "_id", "password"],
      properties: {
        email: {
          type: "string",
          uniqueItems: true,
        },
        password: {
          type: "string",
        },
        firstName: {
          type: "string",
        },

        lastName: {
          type: "string",
        },

        phone: {
          type: "string",
        },
        image: {
          type: "string",
        },
      },
    },
    Users: {
      type: "array",
      $ref: "#/definitions/User",
    },
  },

  schemes: ["http"],
  consumes: ["application/json"],
  produces: ["application/json"],
};
