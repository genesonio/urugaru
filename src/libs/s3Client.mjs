import aws from "aws-sdk"
import { promisify } from "util"
import crypto from "crypto"
import { env } from "../env/client.mjs"

const region = "sa-east-1"
const bucketName = "urugaru"
const randomBytes = promisify(crypto.randomBytes)
const accessKeyId = env.NEXT_PUBLIC_AWS_ACCESS_KEY_ID
const secretAccessKey = env.NEXT_PUBLIC_AWS_SECRET_ACCESS_KEY

const s3 = new aws.S3({
  region,
  accessKeyId,
  secretAccessKey,
  signatureVersion: "v4"
})

export const generateUploadUrl = async () => {
  const rawBytes = await randomBytes(16)
  const imageName = rawBytes.toString("hex")

  const params = {
    Bucket: bucketName,
    Key: imageName,
    Expires: 60
  }

  const uploadUrl = await s3.getSignedUrlPromise("putObject", params)
  return uploadUrl
}
