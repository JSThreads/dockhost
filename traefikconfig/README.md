# Traefik configurations 

```yml traefik.yml
## Static configuration
entryPoints:
  web:
    address: ":80" # [host]:port[/tcp|/udp]
    forwardedHeaders:
      insecure: true
      
    # We can filter the trusted IPs like in the example below
    # forwardedHeaders:
    #  trustedIPs:
    #    - "127.0.0.1/32"
    #    - "192.168.1.7"
    
    # Http to Https redirections
    # http:
    #   redirections:
    #     entryPoint:
    #       to: websecure
    #       scheme: https
    
    # We can add middlewares aswell
    #     middlewares:
    #       - auth@file
    #       - strip@file

  websecure:
    address: ":443" # [host]:port[/tcp|/udp]
    # Https certificates

providers:
  # Enable the file provider to define routers / middlewares / services in file
  file:
    directory: /path/to/dynamic/conf
```

```yml dynamic-configuration.yml
## Dynamic configuration
http:
  routers:
    Router-1:
      rule: "HostRegexp(`{subdomain:[a-z]+}.traefik.com`)"
      entryPoints:
      - "web"
      service: service-1
      priority: 1
    Router-2:
      rule: "Host(`foobar.traefik.com`)"
      entryPoints:
      - "web"
      priority: 2
      service: service-2
  services:
    my-service:
      loadBalancer:
        servers:
        - url: "http://<private-ip-server-1>:<private-port-server-1>/"
        - url: "http://<private-ip-server-2>:<private-port-server-2>/"
        
tls:
  certificates:
    - certFile: /path/to/domain.cert
      keyFile: /path/to/domain.key
    - certFile: /path/to/other-domain.cert
      keyFile: /path/to/other-domain.key
```
