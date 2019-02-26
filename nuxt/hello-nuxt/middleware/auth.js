export default function(context) {
  console.log('middleware哈哈哈')
  context.userAgent = process.server
    ? context.req.headers['user-agent']
    : navigator.userAgent
  console.log(context.userAgent, '')
}
