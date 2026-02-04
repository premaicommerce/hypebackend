const { defineConfig } = require("@medusajs/medusa")

module.exports = defineConfig({
    projectConfig: {
        databaseUrl: process.env.DATABASE_URL,
        http: {
            storeCors: process.env.STORE_CORS || "*",
            adminCors: process.env.ADMIN_CORS || "*",
            authCors: process.env.AUTH_CORS || "*",
        },
        jwtSecret: process.env.JWT_SECRET || "supersecret",
        cookieSecret: process.env.COOKIE_SECRET || "supersecret",
    },

    // ✅ enable admin (served with backend)
    admin: {
        disable: process.env.DISABLE_MEDUSA_ADMIN === "true",
    },
})
