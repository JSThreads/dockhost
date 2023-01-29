import http.server 
import socketserver

PORT = 1010

class DockerAPI(http.server.SimpleHTTPRequestHandler):
    def do_GET(self):
        print(self.headers)
    
Handler = DockerAPI

with socketserver.TCPServer(('', PORT), Handler) as httpd:
    print("Http Server Serving at port", PORT)
    httpd.serve_forever()
