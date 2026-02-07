const { loadEnv, defineConfig } = require("@medusajs/framework/utils")

loadEnv(process.env.NODE_ENV || "development", process.cwd())

module.exports = defineConfig({
    projectConfig: {
        databaseUrl: process.env.DATABASE_URL,
        http: {
            storeCors: process.env.STORE_CORS || "*",
            adminCors: process.env.ADMIN_CORS || "*",
            authCors: process.env.AUTH_CORS || "*",
        },
        jwtSecret: process.env.JWT_SECRET,
        cookieSecret: process.env.COOKIE_SECRET,
    },
    admin: {
        disable: false
    },
    modules: [
        {
            resolve: "@medusajs/medusa/file",
            options: {
                providers: [
                    {
                        resolve: "@medusajs/medusa/file-s3",
                        id: "s3",
                        options: {
                            file_url: process.env.S3_FILE_URL,
                            access_key_id: process.env.S3_ACCESS_KEY_ID || "minioadmin",
                            secret_access_key: process.env.S3_SECRET_ACCESS_KEY || "minioadmin",
                            region: "us-east-1",
                            bucket: "mygodphotos", // Matches your screenshot
                            endpoint: process.env.S3_ENDPOINT,
                            additional_client_config: {
                                forcePathStyle: true,
                            },
                        },
                    },
                ],
            },
        },
    ],
})