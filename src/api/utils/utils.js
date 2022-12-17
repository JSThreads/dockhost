function jsonToCongif(json) {
    let config = ```events {}
http {
```;

    // First we need to list all upstreams to do all the load balancing
    let upstreamsConfig = upstreams(json.apps, json.templates.upstream);


    return config;
}
function upstreams(apps, template) {
    let upstreamCount = 0;
    let upstreamsConfig = [];
    apps.forEach(app => {
        app.locations.forEach(location => {
            upstreamsConfig.push({ name: template.replaceAll('#', `${upstreamCount}`), servers: location.servers })
            upstreamCount++;
        });
    });
    return upstreamsConfig;
}
