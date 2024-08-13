import { useState, useEffect } from 'react';
import AWS from 'aws-sdk';
import { AWS_ACCESS_KEY_ID, AWS_SECRET_ACCESS_KEY, AWS_REGION, S3_BUCKET_NAME } from '../../config';

export default function BucketReader():JSX.Element {
  const [files, setFiles] = useState<(string | undefined)[]>([])

  useEffect(() => {
    const s3 = new AWS.S3({
      accessKeyId: AWS_ACCESS_KEY_ID,
      secretAccessKey: AWS_SECRET_ACCESS_KEY,
      region: AWS_REGION,
    });

    const params = {
      Bucket: S3_BUCKET_NAME,
    };

    s3.listObjectsV2(params, (err, data) => {
      if (err) {
        console.log('Error', err);
      } else if(data.Contents) {
        const fileList = data.Contents.map((file) => file.Key);
        setFiles(fileList);
      }
    });
  }, []);

  return (
    <div>
      <h2>Files in S3 Bucket</h2>
      <ul>
        {files.map((file, index) => (
          <li key={index}>{file}</li>
        ))}
      </ul>
    </div>
  );
}