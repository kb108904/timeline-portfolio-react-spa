import { AWSError } from "aws-sdk";

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
