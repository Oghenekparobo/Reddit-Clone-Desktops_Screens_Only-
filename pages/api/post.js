//...
import middleware from "middleware/middleware";
import nextConnect from "next-connect";
import fs from "fs";
import path from "path";
import AWS from "aws-sdk";

const s3 = new AWS.S3({
  accessKeyId: process.env.AWS_S3_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_S3_SECRET_ACCESS_KEY,
});

const uploadFile = (filePath, fileName, id) => {
  return new Promise((resolve, reject) => {
    const content = fs.readFileSync(filePath);

    const params = {
      Bucket: process.env.AWS_S3_BUCKET_NAME,
      Key: `post-${id}${path.extname(fileName)}`,
      Body: content,
    };

    s3.upload(params, (err, data) => {
      if (err) {
        reject(err);
      }
      resolve(data.Location);
    });
  });
};

if (req.files && req.files.image[0] && req.files.image[0].size > 0) {
  const location = await uploadFile(
    req.files.image[0].path,
    req.files.image[0].originalFilename,
    post.id
  )

  await prisma.post.update({
    where: { id: post.id },
    data: {
      image: location,
    },
  })
}

const handler = nextConnect();
handler.use(middleware);

handler.post(async (req, res) => {
  //... handle POST request

  const post = await prisma.post.create({
    data: {
      title: req.body.title[0],
      content: req.body.content[0],
      subreddit: {
        connect: {
          name: req.body.subreddit_name[0],
        },
      },
      author: {
        connect: { id: user.id },
      },
    },
  });

  res.json(post);
  return;
});

export const config = {
  api: {
    bodyParser: false,
  },
};

export default handler;
