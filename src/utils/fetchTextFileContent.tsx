import { AWSError } from "aws-sdk";
import { S3Client, GetObjectCommand } from "@aws-sdk/client-s3";
import { S3_BUCKET_NAME } from '../../config';

export default function fetchTextFileContent (s3: AWS.S3, bucketName: string, key: string): Promise<string> {
    return new Promise((resolve, reject) => {
      s3.getObject({ Bucket: bucketName, Key: key }, (err:AWSError, data) => {
        if (err) {
          reject(err);
        } else {
          resolve(data.Body?.toString('utf-8') ?? '');
        }
      });
    });
  }

  export async function fetchTextFileContentV2(s3Client: S3Client, key: string): Promise<string> {
    const command = new GetObjectCommand({
      Bucket: S3_BUCKET_NAME,
      Key: key,
    });
    const response = await s3Client.send(command);
    const streamReader = response.Body?.transformToString();
    if (!streamReader) {
      throw new Error('Failed to read file content');
    }
    return streamReader;
  }