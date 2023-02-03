module.exports = ({ env }) => ({
    upload: {
    config: {
        provider: 'strapi-provider-upload-minio-ce',
        providerOptions: {
        accessKey: env('MINIO_ACCESS_KEY'),
        secretKey: env('MINIO_SECRET_KEY'),
        bucket: env('MINIO_BUCKET',),
        endPoint: env('MINIO_ENDPOINT', 'localhost'),
        port: env('MINIO_PORT', '9000'),
        useSSL: env('MINIO_USE_SSL', 'false'),
        host: env('MINIO_HOST', 'localhost'),
        folder: env('MINIO_FOLDER', 'photos'),
        },
    },
    },
});