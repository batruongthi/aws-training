const { S3Client } = require("@aws-sdk/client-s3");

const s3Client = new S3Client();

export default s3Client;