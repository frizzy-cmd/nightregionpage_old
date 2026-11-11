export default {
  async fetch(request) {
    const url = new URL(request.url);
    
    url.hostname = "maylan.teaa.workers.dev";
    return Response.redirect(url.toString(), 301);
  },
};
