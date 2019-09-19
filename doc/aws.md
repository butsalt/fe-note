# aws

## Pre-Signed Posts
1. [表单参数](https://docs.aws.amazon.com/zh_cn/AmazonS3/latest/dev/HTTPPOSTForms.html)
2. 需要额外传的参数(比如key,Cache-Control,Content-Type)必须在options里声明约束，否则表单提交时会提示不允许这些额外参数
3. formInputs可以定义额外要回传给前端的表单项(键值对)，但如果其中包含的参数并没有在options里声明约束，那么表单提交时会提示不允许这些额外参数
